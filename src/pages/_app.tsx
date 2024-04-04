import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: { Component: React.ComponentType<any>, pageProps: any, router: any }) {
  return (
    <div className={` main`}>


      {/* <Header /> */}
      {/* <AnimatePresence mode="wait"> */}
      <Component key={router.route} {...pageProps} />
      {/* </AnimatePresence> */}
    </div>
  )
}
