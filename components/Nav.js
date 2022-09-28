import Link from 'next/link'
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import Cart from '../components/Cart'
import { useEffect } from 'react'

export default function Nav(props) {

    const [email, setEmail] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
          const res = await fetch("/api/addContact", {
            body: JSON.stringify({
                "contacts": {
                    "email": email,
                }
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "PUT",
            url: `/v3/marketing/contacts`,
          });
    
          const { error } = await res.json();
          if (error) {
            console.log(error);
            return;
          }
        console.log(email);
      };

    return (
        <div className='w-screen absolute top-0 z-30 bg-white md:bg-transparent'>
            <nav className='w-full max-w-[1400px] flex flex-row justify-between items-center mx-auto px-10 py-5'>
                <div className='flex flex-row justify-start items-end'>
                    <Link href="/" passHref={true}><a className='font-bold text-pink-500 mr-10'>baked by<span className='font-serif font-normal text-black text-3xl leading-0 ml-2'>Mary</span></a></Link>
                    <Link href="/about-us" passHref={true}><a className='hidden md:flex h-full hover:underline hover:decoration-pink-500 hover:underline-offset-4 transition-all'>about us</a></Link>

                </div>
                <div onSubmit={handleSubmit} className='flex flex-row justify-end items-center space-x-4'>
                    <form className='md:flex flex-row justify-end items-center bg-white px-1 py-1 rounded-full hidden'>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className='outline-none placeholder:text-slate-300 text-pink-600 mx-3 w-44 text-sm' placeholder="janedoe@gmail.com"></input>
                        <button type="submit" className='px-3 py-1 bg-pink-600 text-white rounded-full text-sm'>subscribe</button>
                    </form>
                    {props.products ? <Cart /> : ""}
                </div>
            </nav>
        </div>
  )
}
