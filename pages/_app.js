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
      <ProductProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ProductProvider>
    </>
)
}


export default MyApp
