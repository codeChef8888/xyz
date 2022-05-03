/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from 'web3';
import { ethers } from "ethers";

//Getting The Library Provider To Connect To A Wallet...
const POLLING_INTERVAL = 12000;
function getLibrary(provider: any) {
  // const library = new Web3(provider);
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Bootstrap v4.4.1 css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/bootstrap.min.css"
        />
        {/* animate css */}
        <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
        {/* magnific css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/magnific-popup.css"
        />
        {/* owl.carousel css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/owl.carousel.css"
        />
        {/*  off canvas css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/off-canvas.css"
        />
        {/*  flaticon css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/ico-moon-fonts.css"
        />
        {/*  spacing css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/sc-spacing.css"
        />
        {/* style css */}
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        {/* responsive css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/responsive.css"
        />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
      {/* modernizr js */}
      <script src="assets/js/modernizr-2.8.3.min.js"></script>
      {/* jquery latest version */}
      <script src="assets/js/jquery.min.js"></script>
      {/* Bootstrap v4.4.1 js */}
      <script src="assets/js/bootstrap.min.js"></script>
      {/* popup.min js */}
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      {/* imagesloaded.pkgd.min js */}
      <script src="assets/js/imagesloaded.pkgd.min.js"></script>
      {/* wow js */}
      <script src="assets/js/wow.min.js"></script>
      {/* jquery counterup js */}
      <script src="assets/js/jquery.counterup.min.js"></script>
      {/* counter top js */}
      <script src="assets/js/waypoints.min.js"></script>
      {/* owl.carousel js */}
      <script src="assets/js/owl.carousel.min.js"></script>
      {/* plugins js */}
      <script src="assets/js/plugins.js"></script>
      {/* Time Counter js */}
      <script src="assets/js/time-counter.js"></script>
      {/* main js */}
      <script src="assets/js/main.js"></script>
    </>
  );
}

export default MyApp;
