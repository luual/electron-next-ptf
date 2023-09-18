import type { AppProps } from "next/app";
import "@/styles/global.css";
import "@/styles/ui/radix.css";
import { Provider } from "react-redux";
import { appStore, persistor } from "store/store";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { PersistGate } from 'redux-persist/integration/react'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://192.168.0.32/graphql" }),
});



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
