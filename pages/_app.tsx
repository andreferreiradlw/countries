import type { AppProps } from 'next/app';
// components
import Head from 'next/head';
import Layout from '@/components/Layout';
import ThemeProvider from '@/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
