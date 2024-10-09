import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { useEffect } from 'react';
import { useUserStore } from '@/lib/store';

export default function App({ Component, pageProps }: AppProps) {
  const checkAuth = useUserStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}