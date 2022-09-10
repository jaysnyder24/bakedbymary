import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon } from "@heroicons/react/solid"
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import Cart from '../components/Cart'

export default function Nav() {

    const { items } = useContext(CartContext);

    return (
        <div className='w-screen absolute top-0 z-30 bg-white md:bg-transparent'>
            <nav className='w-full max-w-[1400px] flex flex-row justify-between items-center mx-auto px-10 py-5'>
                <Link href="/" passHref={true}><a className='font-bold text-pink-500'>baked by<span className='font-serif font-normal text-black text-3xl leading-0 ml-2'>Mary</span></a></Link>
                <Cart />
            </nav>
        </div>
  )
}
