import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavNew from "../components/NavNew"
import HeroItem from '../components/HeroItem'
import { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import { LinkIcon, MailIcon } from '@heroicons/react/solid'

export default function AboutUs({lineup, special}) {

  return (
    <div className='w-screen relative'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Baked By Mary | CookiesMary & The Snyder Family</title>
      </Head>
      <NavNew activeProducts={lineup} inactiveProducts={special} />
      <main className='w-full md:flex md:flex-row flex-col md:justify-between max-w-[1400px] justify-start md:items-start items-center pt-[116px] lg:pt-[156px] px-10 pb-[147px] md:pb-20 md:mx-auto'>
        <div className='flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start h-1/4 md:h-full md:w-5/12 min-h-[180px] mb-10 md:mb-0 grow md:grow-0'>
          <div className='relative min-h-[180px] h-full md:h-auto w-auto md:w-full aspect-square rounded-full overflow-hidden z-10 md:mb-10 ring-8 ring-pink-600'><Image src="/images/aboutUsPhoto.jpg" layout="fill" objectFit='cover' objectPosition={"center"} /></div>
          <div className='flex flex-col md:flex-row justify-center items-end z-10 space-y-2 md:space-y-0 md:space-x-7 md:mx-auto'>
            <Link href="https://www.instagram.com/bakedbymarycookies/" passHref={true}>
              <a className='relative w-14 flex flex-row justify-center items-center aspect-square rounded-full overflow-hidden mr-5 md:mr-0 hover:scale-105 transition-all group'>
                <Image src="/images/instagram.svg" layout='fixed' height="20px" width="20px" className='h-5 w-5 text-white z-50' />
                <div className='absolute w-full h-full inset-0 bg-pink-600 bg-opacity-60 z-20 group-hover:bg-opacity-80 transition-all'></div>
                <Image src="/images/chocolateOverloadDefault.jpg" layout='fill' objectFit='cover' objectPosition={"center"} priority sizes='10vw'/>
              </a>
            </Link>
            <Link href="mailto:mary@bakedbymary.com" passHref={true}>
              <a className='relative w-14 flex flex-row justify-center items-center aspect-square rounded-full overflow-hidden hover:scale-105 transition-all group'>
                <MailIcon className='h-5 w-5 text-white z-50' />
                <div className='absolute w-full h-full inset-0 bg-pink-600 bg-opacity-60 z-20 group-hover:bg-opacity-80 transition-all'></div>
                <Image src="/images/cookieDoughDefault.jpg" layout='fill' objectFit='cover' objectPosition={"center"} priority sizes='10vw'/>
              </a>
            </Link>
            <Link href="https://www.bakedbymary.com" passHref={true}>
              <a onClick={(e) => navigator.clipboard.writeText(e.target.getAttribute('href'))} href="https://www.bakedbymary.com" className='relative w-14 flex flex-row justify-center items-center aspect-square rounded-full overflow-hidden mr-5 md:mr-0 hover:scale-105 transition-all group'>
                <LinkIcon className='h-5 w-5 text-white z-50' />
                <div className='absolute w-full h-full inset-0 bg-pink-600 bg-opacity-60 z-20 group-hover:bg-opacity-80 transition-all'></div>
                <Image src="/images/creamFilledChocolateDefault.jpg" layout='fill' objectFit='cover' objectPosition={"center"} priority sizes='10vw'/>
              </a>
            </Link>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start z-50 w-full md:w-1/2'>
          <h1 className='text-black font-playfair font-extrabold leading-none text-4xl lg:text-5xl xl:text-[60px] mb-7'>About Mary <span className='text-pink-600'>& The Snyder's</span></h1>
          <div className='flex flex-col justify-start items-start w-full space-y-5'>
            <p className='w-full text-lg shrink overflow-y-auto'>Mary's mother instilled a love for desserts and an even bigger heart for seeing others take joy in her passions. Whether it was providing sweets for Thanksgiving dinner or baked goods for a school fundraiser, Mary's mom showed her that gift that's shared is a gift well-used.</p>
            <p className='w-full text-lg shrink overflow-y-auto'>Another key inspiration for Mary was her grandmother, Ruth, who she remembers watching work her magic in the kitchen for hours making treats for everyone at the family gathering. Ruth, like Colette, showed Mary that baking can bring people together like few things can.</p>
            <p className='w-full text-lg shrink overflow-y-auto'>When she isn't baking, Mary loves spending time at her full-time job as a stay-at-home mom for her three kids and her husband, Jay. The kids love "helping" make Mary's creative confections and Jay enjoys his role in the company as Quality Control Specialist.</p>
        </div>
        </div>
        
        <div className='min-w-[260px] min-h-[260px] max-w-[600px] max-h-[600px] w-4/12 aspect-square absolute -top-[0vh] -right-[1vw] z-0 fill-pink-50 overflow-visible'>
          <Image src={'/images/cookieIcon.svg'} style={{zIndex:0}} layout="fill" objectFit='cover' objectPosition="center" alt="cookies" priority sizes='40vw' quality={30} />          
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
      lineup: lineupProducts,
      special: specialProducts
    }
  }
}