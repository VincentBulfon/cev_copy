import React from 'react';
import '../styles/main.scss';
import type { AppProps } from 'next/app';
import Header from 'components/components/Header';
import Footer from 'components/components/Footer';
import client from 'providers/apollo-provider';
import { ApolloProvider } from '@apollo/client';
import AppLifecycleProvider from 'providers/app-lifecycle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppLifecycleProvider>
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </AppLifecycleProvider>
    </ApolloProvider>
  );
}
export default MyApp;
