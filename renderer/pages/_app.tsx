import type { AppProps } from "next/app";
import "@/styles/global.css";
import "@/styles/ui/radix.css";
import { Provider } from "react-redux";
import { appStore } from "store/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={appStore}>
      <Component {...pageProps} />;
    </Provider>
  );
}
