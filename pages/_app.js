import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
)
}


export default MyApp
