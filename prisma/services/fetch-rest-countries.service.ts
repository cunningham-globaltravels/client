export interface IRestCountry {
  name: { common: string };
  cca2: string;
  cca3: string;
  ccn3?: string;
  region: string;
  currencies?: Record<string, unknown>;
  idd?: {
    root?: string;
    suffixes?: string[];
  };
  flag?: string;
}

export async function fetchRestCountries(): Promise<IRestCountry[]> {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,cca2,cca3,ccn3,region,currencies,idd,flag',
    {
      headers: {
        // REST Countries rejects requests without this sometimes
        'User-Agent': 'cgt-platform-prisma-seeder/1.0',
        Accept: 'application/json',
      },
    },
  );
  console.log('Prisma Seeders: ', response);

  if (!response.ok) {
    const text = await response.text();
    console.error('Prisma Seeders: ', response);
    throw new Error(`Failed to fetch countries: ${response.status} - ${text}`);
  }

  return response.json();
}
