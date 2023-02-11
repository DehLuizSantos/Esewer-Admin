import { GlobalStyle } from '@/styles/global';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import Providers from './_providers';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
      <GlobalStyle />
    </Providers>
  );
}
export default MyApp;
