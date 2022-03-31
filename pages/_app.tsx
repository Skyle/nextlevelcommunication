import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header></Header>
      <main className="px-2">
        <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default MyApp;
