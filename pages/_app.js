import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Vsight</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Vsight" />
        <meta
          name="description"
          content="Make your daily experience entertaining and augmented"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vsight.vercel.app/" />
        <meta property="og:title" content="Vsight" />
        <meta
          property="og:description"
          content="Make your daily experience entertaining and augmented"
        />
        <meta property="og:image" content="/meta/meta-logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vsight.vercel.app/" />
        <meta property="twitter:title" content="Vsight" />
        <meta
          property="twitter:description"
          content="Make your daily experience entertaining and augmented"
        />
        <meta property="twitter:image" content="/meta/meta-logo.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
