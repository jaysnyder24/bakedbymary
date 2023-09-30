"use client"

import deleteCart from '../../actions/deleteCart';
import { useContext, useState, useEffect } from 'react';
import { CartContext, CartProvider } from '../../contexts/CartContext'
import Image from 'next/image';
import { PlusIcon, MinusIcon } from 'lucide-react';

export default function Cart () {

    const {items, increaseQuantity, decreaseQuantity, removeFromCart} = useContext(CartContext);

    console.log("See Cart: " + items.length);

    const total = items.reduce((accumulator, currentValue, index) => accumulator + (currentValue.value * currentValue.quantity), 0);    

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            <main className="flex flex-row justify-center items-start w-full px-14 py-14 h-full space-x-10 relative">
                <div className="flex flex-col justify-center items-center w-auto h-auto space-y-10 p-10 ring-1 ring-pink-200 shadow-md shadow-pink-200 rounded-xl">
                    {items.map((item, index) => {
                        return  <div key={item.name} className="flex flex-row justify-start items-center space-x-5 w-full h-auto">
                                    <div className='relative h-40 aspect-square'>
                                        <Image src={'/images/' + item.image + 'Circle.png'} className="object-cover object-center" fill alt={"cookie image"} />
                                    </div>
                                    <div className='flex flex-col justify-center items-start space-y-2 py-5'>
                                        <span className='font-playfair font-bold text-lg text-pink-950'>{item.name}</span>
                                        <span className='font-poppins text-pink-950'>${item.value} / half dozen</span>
                                        <div className="flex flex-row justify-between items-center space-x-2">
                                            <button onClick={() => (decreaseQuantity(index))} disabled={item.quantity < 2 ? true : false} className={"p-2 rounded-full bg-pink-700 hover:bg-pink-800"}><MinusIcon color={"white"} size={12} /></button>
                                            <span className={"font-medium h-full text-center font-poppins text-pink-950 w-10"}>{item.quantity}</span>
                                            <button onClick={() => (increaseQuantity(index))} className={"p-2 rounded-full bg-pink-700 hover:bg-pink-800"}><PlusIcon color={"white"} size={12} /></button>
                                        </div>
                                        <button onClick={() => (removeFromCart(item.name))} className=' underline underline-offset-4 text-pink-600 hover:text-pink-700'>remove</button>
                                    </div>
                                </div>
                            
                         
                    })}
                </div>
                <div className="flex flex-col justify-center items-start w-auto h-auto space-y-10 p-10 ring-1 ring-pink-200 shadow-md shadow-pink-200 rounded-xl bg-repeat sticky top-0" style={{backgroundImage: "url('/images/tileLight.png')"}}>
                    <span className='font-playfair font-bold text-2xl text-pink-950'>Total ${total}</span>
                    <button className='font-bold text-xl text-white w-full py-4 px-8 rounded-lg duration-300 bg-repeat hover:scale-105 transition-transform' style={{backgroundImage: "url('/images/tileDark.png')"}}>checkout</button>
                </div>
            </main>
        </div>
    )
}