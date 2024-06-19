import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Astrolith | An NFT Collection Showcasing the Future of Space Resources
          and Celebrating Diversity.
        </title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
