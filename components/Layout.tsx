import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b117b" />
        <meta name="Lemmatron Dapp" content="" />
        <meta name="description" content="" />
        <link rel="canonical" href="https://dapp.lemmatron.com" />
        <meta property="og:title" content="Lemmatron Dapp" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="https://dapp.lemmatron.com" />
        <meta property="og:site_name" content="Lemmatron Dapp" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lemmatron Dapp" />
        <meta name="twitter:description" content="" />
      </Head>

      <Header />

      <div className="children">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
