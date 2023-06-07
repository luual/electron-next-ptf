import type { AppProps } from 'next/app';
import "@/styles/global.css" 
import "@/styles/ui/popover.css"
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}