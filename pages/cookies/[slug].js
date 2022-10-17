import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from "../../components/Nav"
import { LinkIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import SpecialOrder from '../../components/SpecialOrder'
import ProductContext from '../../context/ProductContext'

export default function ProductPage({product, active, inactive}) {

  const router = useRouter();
  const page = router.pathname;
  const [image, setImage] = useState("Default");
  const [clicked, setClicked] = useState(false);

  const copyURL = () => {
    navigator.clipboard.writeText("https://www.bakedbymary.com/cookies/" + router.query.slug).then(setClicked(true));
  }

  const cookie = product[0];

  return (
    <div className='w-screen z-0'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{cookie.name} Cookies | Baked By Mary Cookies</title>
      </Head>
      <Nav activeProducts={active} inactiveProducts={inactive} />
      <main className='w-full md:h-screen md:flex md:flex-row flex-col md:justify-center justify-start md:items-start items-center relative md:pt-[120px] md:pb-[3%] pt-24 pb-10'>
        <div className="w-full h-full max-w-[1400px] inline-grid md:grid-cols-6 md:gap-20 grid-cols-2 md:grid-rows-6 px-10 z-10">
          <div className='w-full h-full flex flex-col justify-start items-start md:col-span-3 col-span-2 md:row-span-6 mb-5 md:mb-0'>
            <div className='w-full flex flex-col justify-start items-start flex-wrap grow md:pt-10'>
              <div className='w-full relative h-[20vh] md:hidden mb-10 rounded-xl overflow-hidden'>
                <Image src={"/images/" + cookie.metadata.imageUnique + image +".jpg"} layout='fill' objectFit='cover' objectPosition="center" alt="mary and jay snyder smiling into camera" priority />
              </div>
              <div className='flex flex-col justify-start items-start mb-10'>
                <h1 className='w-full text-black font-serif font-extrabold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>{cookie.name}</h1>
                <span className='text-pink-500 text-xl font-serif font-extrabold'>{cookie.active ? "$20 per dozen" : "$25 per dozen"}</span>
              </div>
              <div className='flex flex-row justify-start items-center space-x-4 mb-10'>
                  <button onClick={() => {copyURL()}} className='bg-pink-500 p-4 rounded-full flex justify-center items-center hover:bg-pink-600 active:bg-active-700'>
                    {clicked === true ? <span className='text-white font-bold text-xs mr-2 leading-none'>copied link</span> : <span className='text-white font-bold text-xs mr-2 leading-none'>share link</span>}
                    <LinkIcon className='text-white h-4 w-4' />
                  </button>
                {/*<SpecialOrder />*/}
              </div>
              <p className='w-full text-black text-xl flex mb-5 font-light'><span className='text-pink-500 font-bold mr-2'>Available:</span> {cookie.metadata.available}</p>
              <p className='w-full text-black text-lg flex mb-10'>{cookie.description}</p>
              <div className='flex flex-row justify-start items-center space-x-4 grow h-10 w-full'>
                <div onMouseEnter={() => setImage("Two")} className='relative w-full h-full rounded-lg overflow-hidden ring-0 ring-pink-500 hover:ring-2 group'>
                  <Image src={'/images/' + cookie.metadata.imageUnique + 'Two.jpg'} className="z-0" layout="fill" objectFit='cover' objectPosition="center" alt="cookies" priority sizes='40vw' />
                  <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300 placeholder="blur'></div>
                </div>
                <div onMouseEnter={() => setImage("One")} className='relative w-full h-full rounded-lg overflow-hidden ring-0 ring-pink-500 hover:ring-2 group'>
                  <Image src={'/images/' + cookie.metadata.imageUnique + 'One.jpg'} className="z-0" layout="fill" objectFit='cover' objectPosition="center" alt="cookies" priority sizes='40vw' />
                  <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300 placeholder="blur'></div>
                </div>
                <div onMouseEnter={() => setImage("Default")} className='relative w-full h-full rounded-lg overflow-hidden ring-0 ring-pink-500 hover:ring-2 group'>
                  <Image src={'/images/' + cookie.metadata.imageUnique + 'Default.jpg'} className="z-0" layout="fill" objectFit='cover' objectPosition="center" alt="cookies" priority sizes='40vw' />
                  <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300 placeholder="blur'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-5/12 md:h-[95%] h-1/6 w-full hidden md:flex md:mx-0 mx-auto absolute bottom-0 md:top-0 md:right-0 md:bottom-auto sm:top-auto sm:right-auto z-0 overflow-clip md:rounded-bl-2xl md:rounded-t-none rounded-t-2xl bg-pink-200'>
          <div className='relative w-full h-full'>
            <Image src={'/images/' + cookie.metadata.imageUnique + image + '.jpg'} className="z-0" layout="fill" objectFit='cover' objectPosition="center" alt="cookies" priority sizes='40vw' />
          </div>
          
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  const product = await stripe.products.search({
    query: 'metadata[\'slug\']:\''+ context.params.slug +'\'',
    expand: ['data.default_price'],
  });

  const productData = product.data;

  const reqActiveProducts = await stripe.products.list({
    active: true,
    expand: ['data.default_price'],
  });

  const activeProducts = reqActiveProducts.data;

  const reqInactiveProducts = await stripe.products.list({
    active: false,
    expand: ['data.default_price'],
  });

  const inactiveProducts = reqInactiveProducts.data;

  return {
    props: {
      product: productData,
      active: activeProducts,
      inactive: inactiveProducts,
    }
  }
}