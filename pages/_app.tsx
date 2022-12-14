import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { global } from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
