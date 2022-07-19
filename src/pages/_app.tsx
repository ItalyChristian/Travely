import 'styles/globals.css'

import type { AppProps } from 'next/app'
import Header from 'components/Header';
import Footer from 'components/Footer';
//neste arquivo você insere os PROVIDERS para exibir o mesmo componente em todas as paginas

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header />
      <Component {...pageProps} />
    <Footer />
  </>
  );
}

export default MyApp;
