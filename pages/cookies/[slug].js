import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavNew from "../../components/NavNew"
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import SpecialOrder from '../../components/SpecialOrder'
import ProductContext from '../../context/ProductContext'
import CartContext from '../../context/CartContext'

export default function ProductPage({product, lineup, special}) {

  const router = useRouter();
  const page = router.pathname;
  const [image, setImage] = useState("Circle.png");
  const [clicked, setClicked] = useState(false);
  const [count, setCount]  = useState(1);
  const { addToCart } = useContext(CartContext);

  const copyURL = () => {
    navigator.clipboard.writeText("https://www.bakedbymary.com/cookies/" + router.query.slug).then(setClicked(true));
  }

  const cookie = product[0];

  const getPrice = (cookie) => {
    if (cookie.metadata.available === "special") {
      return cookie.default_price.unit_amount / 100 * 2;
    } else {
      return cookie.default_price.unit_amount / 100;
    }
  }

  const price = getPrice(cookie);
  const splicedPrice = price.toString().split("");

  console.log(cookie);

  return (
    <div className='w-screen relative'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{cookie.name} Cookies | Baked By Mary Cookies</title>
      </Head>
      <NavNew activeProducts={lineup} inactiveProducts={special} />
      <main className='w-full max-w-[1400px] md:flex md:flex-row flex-col md:justify-between justify-start md:items-start items-center pt-[116px] md:pb-20 lg:pt-[156px] px-10 pb-[147px] mx-auto'>
        <div className='flex flex-row md:flex-col justify-between items-start md:items-center w-full h-1/4 min-h-[180px] md:h-full mb-7 grow md:grow-0 mr-[10%]'>
          <div className={'relative h-full md:h-5/6 aspect-square rounded-full md:mr-10 z-10 w-4/6 mb-10 ' + (image === "Circle.png" ? "overflow-visible" : "overflow-hidden")}><Image src={"/images/" + cookie.metadata.imageUnique + image} layout="fill" objectFit='cover' objectPosition={"center"} priority/></div>
          <div className='flex flex-col md:flex-row justify-center items-end md:items-baseline z-10 space-y-2 md:space-y-0 md:space-x-7'>
            <div onMouseEnter={() => setImage("Default.jpg")} onMouseLeave={() => setImage("Circle.png")} className='relative w-14 md:w-20 aspect-square rounded-full overflow-hidden mr-5 md:mr-0 md:mb-5 hover:scale-105 transition-all group'>
              <Image src={"/images/" + cookie.metadata.imageUnique + "Default.jpg"} layout="fill" objectFit='cover' objectPosition={"center"} priority />
              <div className='absolute w-full h-full inset-0 bg-pink-600 bg-opacity-60 z-20 group-hover:bg-opacity-0 transition-all'></div>
            </div>
            <div onMouseEnter={() => setImage("One.jpg")} onMouseLeave={() => setImage("Circle.png")} className='relative w-14 md:w-20 aspect-square rounded-full overflow-hidden hover:scale-105 transition-all group'>
              <Image src={"/images/" + cookie.metadata.imageUnique + "One.jpg"} layout="fill" objectFit='cover' objectPosition={"center"} priority />
              <div className='absolute w-full h-full inset-0 bg-pink-600 bg-opacity-60 z-20 group-hover:bg-opacity-0 transition-all'></div>
            </div>
            <div onMouseEnter={() => setImage("Two.jpg")} onMouseLeave={() => setImage("Circle.png")} className='relative w-14 md:w-20 aspect-square rounded-full overflow-hidden mr-5 md:mr-0 md:mb-5 hover:scale-105 transition-all group'>
              <Image src={"/images/" + cookie.metadata.imageUnique + "Two.jpg"} layout="fill" objectFit='cover' objectPosition={"center"} priority />
              <div className='absolute w-full h-full inset-0 bg-pink-600 bg-opacity-60 z-20 group-hover:bg-opacity-0 transition-all'></div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start w-full z-20'>
          <h1 className='text-black font-playfair font-extrabold leading-none text-4xl lg:text-5xl xl:text-[60px] mb-5 md:mb-7 z-30'>{cookie.name}</h1>
          <span className={'font-bold text-pink-600 text-xl leading-none z-20'}>${price}{splicedPrice[splicedPrice.length - 2] === "." ? "0" : ".00"} per {cookie.metadata.available === "special" ? "dozen" : "half dozen"}</span>
          {cookie.metadata.available === "lineup" ? 
          <div className={'flex-row justify-between md:justify-start items-center w-full my-5 md:mb-10 flex'}>   
            <div className='flex flex-row justify-between items-center mr-7 space-x-2'>
              <button onClick={() => (count > 0 ? setCount((count) => count - 1) : setCount(0))} className='rounded-md bg-pink-50 active:bg-pink-100 p-2 transition-all outline-none focus:outline-none'><MinusIcon className='text-pink-600 h-5 w-5' /></button>
              <span className='px-5 text-lg font-bold'>{count}</span>
              <button onClick={() => setCount((count) => count + 1)} className='rounded-md bg-pink-50 active:bg-pink-100 p-2 transition-all outline-none focus:outline-none'><PlusIcon className='text-pink-600 h-5 w-5' /></button>
            </div>
            <button onClick={() => addToCart(cookie.name, cookie.default_price.id, cookie.default_price.unit_amount / 100, count, cookie.metadata.imageUnique)} className='flex flex-row grow md:grow-0 justify-center items-center px-4 md:px-4 py-2 text-white bg-pink-600 active:bg-pink-700 font-bold text-base rounded-full transition-all'><ShoppingCartIcon className='h-5 w-5 text-white mr-2' />Add To Cart</button>
          </div>
          :
          <div className={'flex-row justify-between md:justify-start items-center w-full my-5 md:mb-10 flex'}>   
            <SpecialOrder />
          </div>
          }
          <p className='w-full text-lg md:text-xl shrink overflow-y-auto'>{cookie.description}</p>
        </div>
        <div className='min-w-[260px] min-h-[260px] max-w-[600px] max-h-[600px] w-4/12 aspect-square absolute -top-[0vh] -right-[1vw] z-0 fill-pink-50 overflow-visible'>
          <Image src={'/images/cookieIcon.svg'} style={{zIndex:0}} layout="fill" objectFit='cover' objectPosition="center" alt="cookies" priority sizes='40vw' quality={30} />          
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
    limit: 100,
  });

  const activeProducts = reqActiveProducts.data;

  const lineupProducts = activeProducts.filter(function (product) {
    return product.metadata.available === "lineup";
  });
  
  const specialProducts = activeProducts.filter( function (product) {
    return product.metadata.available === "special";
  });

  /*specialProducts.forEach(async (product, index) => {
    const secondaryPrice = await stripe.prices.list({
      product: product.id,
    });
    product.secondaryPrice = secondaryPrice.data[0];

  });*/

  return {
    props: {
      product: productData,
      lineup: lineupProducts,
      special: specialProducts,
    }
  }
}