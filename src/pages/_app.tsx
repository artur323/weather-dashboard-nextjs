import type { AppProps } from "next/app";
import { Router } from "next/router";

import Inspect from "inspx";
import NProgress from "nprogress";

import AppLayout from "layouts";

import "nprogress/nprogress.css";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <Inspect>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Inspect>
  );
};

export default MyApp;
