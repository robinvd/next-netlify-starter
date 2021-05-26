import '@styles/globals.css'
import dynamic from "next/dynamic";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default dynamic(() => Promise.resolve(Application), {
  ssr: false,
});