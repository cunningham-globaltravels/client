// src/lib/hooks/context/fetch-with-indicator.hook.ts

import { useServerIndicatorStore } from '@/store/server-indicator.store';

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
