'use client';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/state/store';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={makeStore}>{children}</Provider>;
};

export default StoreProvider;
