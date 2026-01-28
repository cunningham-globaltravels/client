import { TiqwaApiErrorUtil } from './errors/tiqwa-api-error.util';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };
type RequestBody = JsonValue | FormData;

interface ITiqwaFetchOptions<TBody, TError> {
  method?: HttpMethod; // default: GET
  query?: Record<string, string | number | boolean | undefined>;
  body?: TBody;
  headers?: Record<string, string>;
  parseError?: (raw: unknown) => TError;
}

export async function TiqwaFetcherUtil<TResponse, TBody extends RequestBody | undefined = undefined, TError = unknown>(
  endpoint: string,
  options?: ITiqwaFetchOptions<TBody, TError>,
): Promise<TResponse> {
  const { method = 'GET', query, body, headers, parseError } = options || {};
  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;

  // Build query string
  const queryString = query
    ? '?' +
      Object.entries(query)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join('&')
    : '';

  const url = `${process.env.TIQWA_BASE_URL_SB}${endpoint}${queryString}`;

  const tiqwa_response = await fetch(url, {
    method,
    body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
    headers: {
      ...(isFormData ? {} : body ? { 'Content-Type': 'application/json' } : {}),
      Authorization: `Bearer ${process.env.TIQWA_API_KEY_SB}`,
      ...headers,
    },
    cache: 'no-store', // change if you want caching
  });

  const rawText = await tiqwa_response.text();
  const rawData = rawText ? JSON.parse(rawText) : null;

  if (!tiqwa_response.ok) {
    const parsedError = parseError ? parseError(rawData) : (rawData as TError);
    throw new TiqwaApiErrorUtil<TError>(tiqwa_response.status, 'Tiqwa API request failed', parsedError);
  }

  return rawData as TResponse;
}
