import type { AppProps } from 'next/app';
import "@/styles/global.css" 
import "@/styles/ui/radix.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}