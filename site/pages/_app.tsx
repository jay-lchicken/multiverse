import Meta from "@/components/Meta";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta as={Head} />
      <Component {...pageProps} />
    </>
  );
}
