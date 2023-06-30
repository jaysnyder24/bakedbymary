import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavNew from "../components/NavNew"
import HeroItemNew from '../components/HeroItemNew'
import SubscribeFormNew from '../components/FormNew'
import { useContext, useEffect, useState } from 'react'
import ProductContext from '../context/ProductContext'
import { ArrowSmRightIcon } from '@heroicons/react/solid'

export default function Home({lineup, special}) {

  return (
    <div className='w-screen z-0'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Baked By Mary | Local, Specialty Cookies In Ankeny, Iowa</title>
        <meta name="google-site-verification" content="RacIvNUCbJG4QsD9IqqfYjj9KR3j0DJHcDHEm-TmQD8" />
      </Head>
      <NavNew activeProducts={lineup} inactiveProducts={special} />
      <main className='w-full h-screen md:flex md:flex-row flex-col md:justify-center justify-start md:items-start items-center relative pt-[116px] md:pt-0'>
        <div className="w-full h-full relative max-w-[1400px] flex flex-col md:flex-row justify-start md:justify-between items-start z-10 pb-[147px] md:pb-20 md:pt-[120px] overflow-hidden">
          <div className='flex flex-col justify-start items-start w-full h-full z-20'>
            <div className='w-full flex flex-col justify-between items-start px-10'>
              <div className='w-full h-full grow flex flex-col justify-start items-start z-10'>
                {lineup.length > 0 ? <h1 className='w-full md:w-1/2 text-black font-playfair font-extrabold leading-none text-3xl lg:text-4xl xl:text-5xl mb-5 md:mb-7'>Welcome To <span className='text-pink-600'>Baked By Mary Cookies!</span></h1> : <h1 className='w-full md:w-1/2 text-black font-playfair font-extrabold leading-none text-3xl lg:text-4xl xl:text-5xl mb-5 md:mb-7'>Well crumbs... <span className='text-pink-600'>you missed out!</span></h1>}
                {lineup.length > 0 ? <span className='w-full md:w-1/2 text-black text-xl inline-block mb-5'>If you’re tired of crummy cookies, you came to the right place!</span> : <span className='w-full text-black text-xl inline-block mb-7'>Don't fret! Mary will be back with a new curated bundle of delicious, seasonally relevant cookies in just a few weeks.</span>}
                {lineup.length > 0 ? <p className='w-full md:w-1/2 text-black text-xl flex flex-row justify-start items-center mb-10'><span className='text-pink-600 font-bold leading-none mr-2'>Pickup Date:</span> Monday July 28th, 2023</p> : ""}
              </div>
            </div>
            <div className='w-11/12 grow md:grow-0 flex flex-row justify-start items-center px-10 overflow-x-scroll space-x-5 scroll-smooth relative snap-x snap-proximity'>
              {lineup.length > 0 ?  
              
              lineup.map((product, index) => <HeroItemNew index={index} key={product.id} name={product.name} price={product.default_price.id} value={product.default_price.unit_amount_decimal / 100} image={product.metadata.imageUnique} description={product.description} type={product.metadata.available} />)
              :
              <div className='col-span-2 h-full w-full rounded-2xl overflow-hidden relative shadow-md aspect-square sm:aspect-auto'>
                <Image src="/images/crumbs.jpg" layout='fill' objectFit='cover' objectPosition="left" size="40vw" priority alt="cookie crumbs" quality={40} />
              </div>
              }
              <div className='md:hidden group h-[96px] w-12 bg-pink-700 absolute rounded-tr-full rounded-br-full -left-5 my-auto flex flex-row justify-center items-center'>
                <ArrowSmRightIcon className="text-white w-6 h-6 mr-1 group-lineup:mr-3 transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
        <div className='h-4/6 aspect-square absolute top-0 -right-24 z-0 hidden md:flex md:top-[120px]'>
          <Image src={lineup.length > 0 ? "/images/" + lineup[0].metadata.imageUnique + "Circle.png" : "/images/crumbs.jpg"} layout="fill" objectFit='cover' objectPosition={"center"} quality={100} />
        </div>
        <div className='min-w-[260px] min-h-[260px] max-w-[500px] max-h-[500px] w-5/12 aspect-square absolute -top-[0vh] -right-[1vw] -z-10 fill-pink-50 overflow-visible'>
            <Image src={'/images/cookieIcon.svg'} className="z-0" layout="fill" objectFit='cover' objectPosition="center" alt="cookies" priority sizes='40vw' quality={30} />          
        </div>
      </main>
      <div className='w-full bg-pink-50 flex flex-row justify-center items-start pb-[147px] md:pb-20'>
        <div className='w-full flex flex-col md:flex-row p-10 md:px-10 md:py-20 justify-between items-center max-w-[1400px]'>
          <div className='w-8/12 aspect-square overflow-hidden ring-8 ring-pink-700 rounded-full relative mb-7 mr-[10%]'>
            <Image src="/images/aboutUsPhoto.jpg" layout='fill' objectFit='cover' objectPosition={"center"} />
          </div>
          <div className='flex flex-col justify-start items-start w-full md:w-3/4'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-pink-700 font-playfair font-extrabold mb-10 w-full'>Who Is this Mary?</h2>
            <p className=' text-xl w-full mb-10'>Mary is a born and raise Iowan, coming from a long line of exceptional bakers. When she’s not baking, she’s also a mother to three, usually, amazing children and wife to one, moderately entertaining husband.<br></br><br></br>Click the button below to hear her whole origin story, radiolineup spider bite and all!</p>
            <Link href="/about-us"><a className='flex flex-row justify-center items-center leading-none text-xl text-white bg-pink-700 font-semibold py-4 px-8 w-full md:w-auto rounded-full'>Mary's Baking Journey</a></Link>
          </div>
        </div>
      </div>
      {/*<div className=' w-full h-screen md:flex md:flex-row flex-col md:justify-center justify-start md:items-start items-center'>
        <div className="w-full h-full max-w-[1400px] flex flex-col justify-start items-start z-10 pb-[147px] pt-10 md:py-20">
          <div className='w-full flex flex-col justify-between items-start px-10'>
            <div className='w-full flex flex-col justify-start items-start z-10'>
              <h2 className='w-full text-black font-playfair font-extrabold leading-none text-3xl lg:text-4xl xl:text-6xl mb-5 md:mb-7'>Need Cookies For A Special Occassion...<br></br> <span className='text-pink-600'>Or Just Because?</span></h2>
              <span className='w-full text-black text-xl inline-block mb-10'>You’re in luck! We do a select number of special orders every month, and you aren’t limited to this month’s lineup. <strong>3 dozen minimum.</strong></span>
            </div>
          </div>
          <div className='w-full grow md:grow-0 flex flex-row justify-start items-center px-10 overflow-x-scroll space-x-5 scroll-smooth relative snap-x snap-proximity'>
            {special.length > 0 ?  
            
            special.map((product, index) => <HeroItemNew index={index} key={product.id} name={product.name} price={product.default_price.id} value={product.default_price.unit_amount_decimal / 100} image={product.metadata.imageUnique} description={product.description} type={product.metadata.available} />)
            :
            <div className='col-span-2 h-full w-full rounded-2xl overflow-hidden relative shadow-md aspect-square sm:aspect-auto'>
              <Image src="/images/crumbs.jpg" layout='fill' objectFit='cover' objectPosition="left" size="40vw" priority alt="cookie crumbs" quality={40} />
            </div>
            }
            {special.length > 0 ? 
              <a className='group h-[96px] w-12 bg-pink-700 absolute rounded-tr-full rounded-br-full -left-5 my-auto flex flex-row justify-center items-center'>
                <ArrowSmRightIcon className="text-white w-6 h-6 mr-1 group-lineup:mr-3 transition-all duration-200" />
              </a>
              :
              ""
            }
          </div>
        </div>
          </div>*/}
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