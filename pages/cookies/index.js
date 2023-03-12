import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavNew from '../../components/NavNew'

export default function AllCookies({all, lineup, special}) {

  return (
    <div className='w-screen z-0'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Homemade, Specialty Cookies From Iowa | Baked By Mary Cookies</title>
      </Head>
      <NavNew activeProducts={lineup} inactiveProducts={special} />
      <main className='w-full md:h-screen md:flex md:flex-row flex-col md:justify-center justify-start md:items-start items-center relative pt-[116px] pb-[147px] md:pb-20'>
        <div className="w-full h-full max-w-[1400px] flex flex-row flex-wrap justify-start md:justify-between items-center z-10 px-10">
          <h1 className='text-black font-playfair font-extrabold leading-none text-4xl lg:text-5xl xl:text-[60px] mb-5 z-20'>Mary's Homemade Cookies</h1>
          <p className='w-full text-xl mb-7 z-20'>Every month Mary curates a lineup of select, discounted cookies for month pickup but that's not all she does. If you need cookies for an event, or just because, take a look at our full selection below and email us at <Link href="mailto:mary@bakedbymary.com"><a className='text-pink-700'>mary@bakedbymary.com</a></Link> with the cookies you want and when you need them. Minimum of one dozen per cookie type.</p>
          {all.map((product) => 
            <Link href={"/cookies/" + product.metadata.slug} passHref={true} key={product.id}>
              <a className="flex flex-row justify-end items-center w-full md:w-[32%] aspect-video relative rounded-xl overflow-hidden mb-7">
                <div className='h-full w-7/12 p-5 z-20 flex flex-col justify-center items-center bg-pink-50 bg-opacity-80'>
                  <span className='font-bold text-lg font-playfair text-center mb-5 text-pink-700'>{product.name}</span>
                  <span className='px-4 py-2 text-xs rounded-full bg-pink-700 text-pink-50 font-bold'>Details</span>
                </div>
                <Image src={"/images/" + product.metadata.imageUnique + "Two.jpg"} alt="cookie" layout="fill" objectFit='cover' objectPosition={"center"} sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"} quality={40} />
              </a>
            </Link>
            )
          }
        </div>
        <div className='min-w-[260px] min-h-[260px] max-w-[360px] max-h-[360px] w-4/12 aspect-square absolute -top-[0vh] -right-[1vw] z-0 fill-pink-50 overflow-visible'>
          <Image src={'/images/cookieIcon.svg'} className="z-0" layout="fill" objectFit='cover' objectPosition="center" alt="cookies" priority sizes='40vw' quality={30} />          
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
      all: activeProducts,
      lineup: lineupProducts,
      special: specialProducts
    }
  }
}