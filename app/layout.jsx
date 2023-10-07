import styles from "./global.css";
import { Poppins, Playfair_Display } from 'next/font/google'
import Nav from "./nav";
import Footer from "./footer";
import CartProvider from "../contexts/CartContext";

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