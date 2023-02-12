import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'
import { ProductProvider } from '../context/ProductContext'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>

        <Script id="ga4-single" strategy='lazyOnload' src="https://www.googletagmanager.com/gtag/js?id=G-QDQ49V35MB"></Script>
        <Script id="ga4-data" strategy='lazyOnload'>
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QDQ49V35MB');`
          }
        </Script>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>
      <ProductProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ProductProvider>
    </>
)
}


export default MyApp
