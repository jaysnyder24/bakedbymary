import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, EyeIcon, PlusIcon } from "@heroicons/react/solid"
import Nav from "../components/Nav"
import HeroItem from '../components/HeroItem'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'

export default function Home({products}) {

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, [])
  

  return (
    <div className='w-screen'>
      <Nav />
      <main className='w-full md:h-screen md:flex md:flex-row flex-col md:justify-center justify-start md:items-start items-center relative md:pt-[160px] md:pb-[80px] pt-20 pb-10'>
        <div className="w-full h-full max-w-[1400px] inline-grid md:grid-cols-5 md:gap-20 grid-cols-1 md:grid-rows-6 px-10 z-10">
          <div className='w-full flex flex-col justify-start items-start md:col-span-2 col-span-1 md:row-span-6 py-5 mb-5 md:mb-0'>
            <div className='w-full flex flex-col justify-center items-start flex-wrap'>
              <h1 className='w-full text-black font-serif font-extrabold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>Check out this month's <span className='text-pink-500'>homemade cookies!</span></h1>
              <p className='w-full text-black text-base hidden md:flex mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              <div className='md:flex flex-row justify-start items-center w-full hidden'>
                <Link href={'#'} passHref={true}>
                  <a className='p-4 rounded-full overflow-clip bg-pink-500 mr-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all'>
                    <svg className='h-5 w-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                  </a>
                </Link>
                <Link href={'#'} passHref={true}>
                  <a className='p-4 rounded-full overflow-clip bg-pink-500 mr-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all'>
                    <svg className='h-5 w-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                  </a>
                </Link>
                <Link href={'#'} passHref={true}>
                  <a className='p-4 rounded-full overflow-clip bg-pink-500 mr-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all'>
                    <svg className='h-5 w-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full h-full grid sm:grid-cols-2 grid-cols-1 gap-4 md:col-span-3 md:row-span-6 col-span-1 row-span-5'>
            {products.map((product) => <HeroItem key={product.id} name={product.name} price={product.default_price.id} value={product.default_price.unit_amount_decimal / 100} images={[product.metadata.imageOne, product.metadata.imageTwo, product.metadata.imageThree]} description={product.description} />)}

          </div>
        </div>
        <div className='md:w-5/12 md:h-[95%] h-1/6 w-full md:flex md:mx-0 mx-auto absolute bottom-0 md:top-0 md:right-0 md:bottom-auto sm:top-auto sm:right-auto z-0 overflow-clip md:rounded-bl-2xl md:rounded-t-none rounded-t-2xl'>
          <Image src='/images/heroImage.jpg' layout='fill' objectFit='cover' objectPosition="center" priority size="42vw" alt='cookie' />
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  const resProducts = await stripe.products.list({
    active: true,
    expand: ['data.default_price'],
  });

  const products = resProducts.data;

  return {
    props: {
      products: products
    }
  }
}