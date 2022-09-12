import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { PlusIcon, MinusIcon } from "@heroicons/react/solid"
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'

export default function CartItem(props) {

    const {items, removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
      
    const item = {...items[props.index]};

    return (
        <div className='grid grid-cols-4 grid-rows-4 w-full gap-2 shrink'>
            <Link href="#" passHref={true}>
                <a className='col-span-1 row-span-4 relative rounded-xl overflow-clip'>
                    <Image src={'/images/' + item.image + 'Default.jpg'} layout="fill" objectFit='cover' objectPosition="center" alt='cookie' />
                </a>
            </Link>
            <span className='col-span-3 row-span-1 pl-4 font-bold'>{item.name}</span>
            <span className='col-span-3 row-span-1 pl-4 font-bold text-pink-500'>Totale Cost | ${item.value * item.quantity}</span>
            <span className='col-span-3 row-span-1 pl-4'>
                <div className='flex flex-row justify-start items-center'>
                    <button onClick={() => (item.quantity > 1 ? decreaseQuantity(props.index) : removeFromCart(item.name))} className='rounded bg-pink-50 hover:bg-pink-100 active:bg-pink-200 ring-1 ring-pink-200 p-2 transition-all'><MinusIcon className='text-pink-500 h-2 w-2' /></button>
                    <span className='px-4'>{item.quantity} half dozen</span>
                    <button onClick={() => increaseQuantity(props.index)} className='rounded bg-pink-50 hover:bg-pink-100 active:bg-pink-200 ring-1 ring-pink-200 p-2 transition-all'><PlusIcon className='text-pink-500 h-2 w-2' /></button>
                </div>
            </span>
            <div><button onClick={() => removeFromCart(item.name)} className='col-span-3 w-auto row-span-1 pl-4 text-pink-500 hover:text-pink-600 flex flex-row justify-start items-center'>remove</button></div>
        </div>
  )
}
