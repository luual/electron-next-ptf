import type { AppProps } from "next/app";
import "@/styles/global.css";
import "@/styles/ui/radix.css";
import { Provider } from "react-redux";
import { appStore } from "store/store";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://192.168.0.14/graphql" }),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={appStore}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
