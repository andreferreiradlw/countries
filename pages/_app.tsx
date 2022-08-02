import type { AppProps } from 'next/app';
// components
import Layout from '@/components/Layout';
import ThemeProvider from '@/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
