import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../../components/Nav'

export default function AllCookies({active, inactive}) {

  return (
    <div className='w-screen z-0'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Homemade, Specialty Cookies From Iowa | Baked By Mary Cookies</title>
      </Head>
      <Nav activeProducts={active} inactiveProducts={inactive} />
      <main className='w-full md:h-screen md:flex md:flex-row flex-col md:justify-center justify-start md:items-start items-center relative md:pt-[120px] md:pb-[80px] pt-24 pb-10'>
        <div className="w-full h-full max-w-[1400px] flex flex-row flex-wrap justify-start items-center z-10 px-5">
          <h1 className='w-full text-black font-serif font-extrabold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-10 mx-5'>Mary's Homemade Cookies</h1>
          <p className='w-full px-5 mb-10'>While Mary's monthly lineup of cookies are only available in limited quantities and can only be picked up on a single day, we don't want anyone feeling left out! Check out all of Mary's specialty homemade cookies here and, if you find anything you like, submit a order request and we'll see if it work for her schedule. Enjoy!</p>
          {active.length > 0 ?
          active.map((product) => 
          <Link href={"/cookies/" + product.metadata.slug} passHref={true} key={product.id}>
            <a className="aspect-video w-full h-auto md:aspect-none md:h-[200px] md:w-[356px] mx-5 mb-10 grow relative rounded-lg overflow-hidden group transition-all col-span-1 bg-purple-200">
              <div className='w-full h-full z-[202] absolute flex flex-col justify-center items-center top-0 opacity-0 group-hover:opacity-100 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-60 transition-all ease-in-out p-5'>
                <span className='text-white font-serif font-bold text-2xl whitespace-pre-wrap text-center mb-5'>{product.name}</span>
                <span className='px-4 py-2 rounded-full bg-white text-pink-500 text-sm font-bold'>Cookie Details</span>
              </div>
              <Image src={"/images/" + product.metadata.imageUnique + "Two.jpg"} alt="cookie" className="group-hover:scale-110 group-hover:blur-sm transition-all ease-in-out z-[201]" layout="fill" objectFit='cover' objectPosition={"center"} sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"} />
            </a>
          </Link>
          )
          :
          ""
          }
          {inactive.length > 0 ?
          inactive.map((product) => 
          <Link href={"/cookies/" + product.metadata.slug} passHref={true} key={product.id}>
            <a className="aspect-video w-full h-auto md:aspect-none md:h-[200px] md:w-[356px] mx-5 mb-10 grow relative rounded-lg overflow-hidden group transition-all col-span-1 bg-purple-200">
              <div className='w-full h-full z-[202] absolute flex flex-col justify-center items-center top-0 opacity-0 group-hover:opacity-100 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-60 transition-all ease-in-out p-5'>
                <span className='text-white font-serif font-bold text-2xl whitespace-pre-wrap text-center mb-5'>{product.name}</span>
                <span className='px-4 py-2 rounded-full bg-white text-pink-500 text-sm font-bold'>Cookie Details</span>
              </div>
              <Image src={"/images/" + product.metadata.imageUnique + "Two.jpg"} alt="cookie" className="group-hover:scale-110 group-hover:blur-sm transition-all ease-in-out z-[201]" layout="fill" objectFit='cover' objectPosition={"center"} sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"} />
            </a>
          </Link>
          )
          :
          ""
          } 
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
  });

  const activeProducts = reqActiveProducts.data;

  const reqInactiveProducts = await stripe.products.list({
    active: false,
    expand: ['data.default_price'],
    limit: 100,
  });

  const inactiveProducts = reqInactiveProducts.data;

  return {
    props: {
      active: activeProducts,
      inactive: inactiveProducts,
    }
  }
}