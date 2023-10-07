import styles from "./global.css";
import { Poppins, Playfair_Display } from 'next/font/google'
import Nav from "./nav";
import Footer from "./footer";
import CartProvider from "../contexts/CartContext";
import Script from "next/script";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-poppins',
  })
   
  const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-playfair-display',
  })

export default function RootLayout ({children}) {
    return ( 
        <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-QDQ49V35MB" />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'G-QDQ49V35MB');
                `}
            </Script>
            <body className="overflow-x-hidden">
                <CartProvider>
                    <Nav />
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    )
}