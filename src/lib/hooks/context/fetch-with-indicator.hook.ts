import { useServerIndicatorStore } from '@/store/server-indicator.store';
//import { useAPICatcher } from "../server/useApiCatcher";

export async function fetchWithIndicatorHook(input: RequestInfo, init?: RequestInit) {
  const { startRequest, endRequest } = useServerIndicatorStore.getState();

  startRequest();
  try {
    const res = await fetch(input, init);
    return res;
  } finally {
    endRequest();
  }
}
