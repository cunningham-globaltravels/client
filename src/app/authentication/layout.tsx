import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login and Register',
  description: 'Cunningham Authentication page',
};

export default function AuthenticationLayout({ children }: { children: React.ReactNode }) {
  return <main className='min-h-screen'>{children}</main>;
}
