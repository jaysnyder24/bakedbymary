import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AdjustCart from './AdjustCart';
import Nav from './nav';
import CookieSlider from './CookieSlider.jsx';
import ImageSelector from './cookies/[slug]/ImageSelector.jsx';

async function getProducts() {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const products = await stripe.products.list({
    active: true,
    expand: ['data.default_price'],
    limit: 100,
  });

  return products.data;
}

export const metadata = {
  title: 'Baked By Mary | Homemade, Specialty Cookies Made In Ankeny, Iowa',
  description:
    'Looking For Local Cookies Shops In Central Iowa? Your Search Is Over! We have 40+ Cookie Flavors For Any Occassion.',
  metadataBase: new URL('https://www.bakedbymary.com'),
  alternates: {
    canonical: '/',
  },
};

export default async function Homepage() {
  const products = await getProducts();
  const lineupProducts = products.filter((item) => {
    return item.metadata.available === 'lineup';
  });

  const assortedProduct = lineupProducts.pop();

  const specialProducts = products.filter((item) => {
    return item.metadata.available === 'special';
  });

  const limitedProducts = products.filter((item) => {
    return item.metadata.available === 'limited';
  });

  const saleProducts = products.filter((item) => {
    return item.metadata.available !== 'other';
  });

  async function specialOrderForm(formData) {
    'use server';

    const sendgrid = require('@sendgrid/mail');
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    const email = formData.get('email');

    const message = {
      to: 'mary@bakedbymary.com',
      from: 'mary@bakedbymary.com',
      subject: 'Special Order Request',
      text: `${email} would like to place a special order. Please follow up.`,
      html: `<p>${email} would like to place a special order. Please follow up.</p>`,
    };

    sendgrid
      .send(message)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='mx-auto w-full max-w-[1400px]'>
      <main className='flex flex-col md:flex-row justify-center items-start w-full px-10 md:px-14 pt-10 md:pt-14 h-auto md:h-[80vh]'>
        <div className='flex flex-col md:flex-row justify-start items-center md:justify-between md:items-start w-full h-full space-y-10 md:space-y-0 md:space-x-10'>
          <div className='flex flex-col justify-center items-start w-full md:w-4/12 h-full space-y-6 pr-5'>
            <h1 className='font-playfair font-bold text-6xl md:text-8xl text-pink-950'>
              Giving Thanks Cookies
            </h1>
            <span className='font-poppins font-semibold text-base text-pink-500'>
              <span className='font-extrabold'>Next Pickup Day:</span> Monday,
              November 25th
            </span>
            <p className='font-poppins font-normal text-black'>
              Gobble up these goodies! Our Thanksgiving cookie lineup is a feast
              for the eyes and the taste buds. From creamy pumpkin cream cheese
              cookies to crunchy pecan pie cookies and adorable
              pumpkin-decorated sugar cookies, there’s something for every
              hungry holiday guest.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center w-full md:w-4/12 h-auto md:h-full md:px-5 relative'>
            <div
              className='rounded-full bg-pink-100 h-full w-full hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-pink-200 shadow-pink-200 bg-repeat flex flex-col justify-center space-y-2 md:space-y-8 items-center px-10 py-10 md:py-20 group transition-transform duration-300'
              style={{ backgroundImage: "url('/images/tileDark.png')" }}
            >
              <div className='hidden md:flex flex-row justify-center items-start -space-x-6 md:-space-x-8 w-full h-auto'>
                <div className='relative h-[100px] aspect-square w-auto mt-6 z-10 group-hover:scale-105 transition-transform duration-300'>
                  <Image
                    src={
                      '/images/' +
                      lineupProducts[0].metadata.imageUnique +
                      'Circle.png'
                    }
                    className='object-fill object-center'
                    fill
                  />
                </div>
                <div className='relative h-[100px] aspect-square w-auto z-20 group-hover:scale-125 transition-transform duration-300'>
                  <Image
                    src={
                      '/images/' +
                      lineupProducts[1].metadata.imageUnique +
                      'Circle.png'
                    }
                    className='object-fill object-center'
                    fill
                  />
                </div>
                <div className='relative h-[100px] aspect-square w-auto mt-6 z-10 group-hover:scale-105 transition-transform duration-300'>
                  <Image
                    src={
                      '/images/' +
                      lineupProducts[2].metadata.imageUnique +
                      'Circle.png'
                    }
                    className='object-fill object-center'
                    fill
                  />
                </div>
              </div>
              <div className='flex flex-col justify-start items-center space-y-5'>
                <div className='flex flex-col justify-start items-center space-y-5'>
                  <h2 className='hidden md:flex font-playfair w-full font-bold text-3xl text-white text-center'>
                    Can't decide? Get assorted boxes instead!
                  </h2>
                  <h2 className='flex md:hidden font-playfair w-full font-bold text-xl text-white text-center'>
                    Assorted Box
                  </h2>
                  <p className='text-white font-poppins text-lg'>
                    ${assortedProduct.default_price.unit_amount / 100}
                    {(assortedProduct.default_price.unit_amount / 100)
                      .toString()
                      .split('').length > 2
                      ? '0'
                      : '.00'}{' '}
                    / half dozen
                  </p>
                </div>
                <AdjustCart
                  item={assortedProduct}
                  delay={false}
                  theme={'light'}
                  orientation={'col'}
                />
              </div>
            </div>
            <Link
              href={'/cookies'}
              className='absolute font-poppins font-bold hidden md:flex flex-row justify-center items-center bottom-0 right-0 bg-pink-200 hover:bg-pink-300 hover:scale-110 text-pink-950 aspect-square h-1/5 w-auto rounded-full p-5 transition-all duration-300'
            >
              see all
            </Link>
          </div>
          <div className='flex flex-col justify-between items-start space-y-4 md:space-y-0 md:py-8 w-full md:w-4/12 h-full md:pl-5 md:pr-5'>
            {lineupProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className='group relative flex flex-col-reverse justify-start md:flex-row md:justify-between items-center w-full bg-repeat px-6 py-6 md:py-2 md:hover:py-6 rounded-2xl shadow-md ring-1 ring-pink-200 shadow-pink-200 transition-all duration-300 hover:-pr-10'
                  style={{ backgroundImage: "url('/images/tileLight.png')" }}
                >
                  <div className='flex flex-col justify-start items-center md:items-start w-full md:w-1/2 space-y-2 transition-all duration-300'>
                    <span className='text-pink-950 font-playfair font-extrabold text-xl'>
                      {product.name}
                    </span>
                    <span className='text-pink-950 font-poppins text-lg'>
                      ${assortedProduct.default_price.unit_amount / 100}
                      {(assortedProduct.default_price.unit_amount / 100)
                        .toString()
                        .split('').length > 2
                        ? '0'
                        : '.00'}{' '}
                      / half dozen
                    </span>
                    <AdjustCart
                      item={product}
                      delay={true}
                      theme={'dark'}
                      orientation={'col'}
                    />
                  </div>
                  <div className='md:w-[40%] w-2/3 group-hover:delay-100 mb-5 md:mb-0 aspect-square relative md:-mr-[20%] md:group-hover:mr-0 flex flex-row justify-center items-center transition-all duration-300'>
                    <div className='h-full w-full relative'>
                      <Image
                        src={
                          '/images/' +
                          product.metadata.imageUnique +
                          'Circle.png'
                        }
                        className='object-fill object-center'
                        fill
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <div className='flex flex-col md:flex-row justify-start md:justify-between items-center w-full mt-20 px-10 md:px-14'>
        {/*<div className="mx-auto w-full max-w-[1400px]">
                <div className="flex flex-col-reverse md:flex-row justify-start items-center md:justify-center w-full px-10 pt-10 pb-[140px] md:p-14 md:h-[90vh] md:space-x-14 relative">
                    <div className="w-full md:w-1/2 h-auto flex flex-col justify-start items-center md:items-start space-y-5 md:space-y-6">
                        <div className="w-full flex flex-col justify-start items-center md:items-start space-y-4">
                            <h2 className="font-extrabold font-playfair text-5xl text-pink-950">Thanksgiving Special <span className=" italic">Addition</span> Cookie</h2>
                            <span className="w-full font-poppins font-bold text-2xl text-pink-800 flex flex-row justify-start items-center">{limitedProducts[0].name}</span>
                            <span className="w-full font-poppins font-medium text-lg text-pink-600 flex flex-row justify-start items-center">${limitedProducts[0].default_price.unit_amount / 100}{limitedProducts[0].default_price.unit_amount / 100 > 2 ? "0" : ".00"} / half dozen</span>
                        </div>
                        <div className="w-full flex flex-col justify-start items-center md:items-start space-y-4">
                            <p className='w-full font-poppins text-lg'>Alright, we heard you already! We get it! Pumpkin pie is the most consumed dessert at Thanksgiving AND it was a huge mistake not to turn this delicious delicacy into a cream-topped cookie. Due to popular demand we have made our <Link href="/cookies/pumpkin-pie-cookies" className="font-semibold text-pink-600 underline underline-offset-4">Pumpkin Pie Cookie available for the November 20th pickup date</Link>.</p>
                            <p className='w-full font-poppins text-lg'>These will, however, not be included in assorted boxes. Enjoy!</p>
                        </div>
                        <AdjustCart item={limitedProducts[0]} delay={false} theme={"dark"} orientation={"col"} />
                    </div>
                    <div className="relative w-full mb-5 md:mb-0 md:w-1/2 aspect-square rounded-2xl overflow-hidden">
                        <Image src={`/images/${limitedProducts[0].metadata.imageUnique}One.jpg`} fill priority className={`object-cover object-center`} />
                    </div>
                </div>
            </div>*/}
      </div>
      <div className='flex flex-row justify-center items-center mt-20 px-10 md:px-14'>
        <div
          className='flex flex-col md:flex-row justify-between md:justify-start items-center space-y-5 md:space-y-0 w-full bg-repeat rounded-3xl py-10 ring-1 ring-pink-200 shadow-2xl shadow-pink-200'
          style={{ backgroundImage: "url('/images/tileLight.png')" }}
        >
          <div className='w-full md:w-4/12 px-10 h-full'>
            <h2 className='font-playfair font-extrabold text-3xl md:text-5xl text-pink-950'>
              How Monthly Cookie Orders Work
            </h2>
          </div>
          <div className='w-full md:w-4/12 h-full px-10 flex flex-col justify-start items-start border-pink-600 md:border-r md:border-l space-y-4'>
            <div className='flex flex-row justify-start items-center space-x-4 w-full'>
              <Image
                src='/images/cookieIcon.svg'
                className='overflow-visible rotate-90 fill-pink-300 text-pink-300'
                width={32}
                height={32}
                alt='cookie icon'
              />
              <h3 className='font-poppins text-xl font-semibold text-pink-950'>
                Place Your Order
              </h3>
            </div>
            <p className='font-poppins text-lg'>
              First, things first: check out the pickup date and order cookies
              from the monthly lineup. Yay! Shortly after, you'll receive an
              email receipt.
            </p>
          </div>
          <div className='w-full md:w-4/12 h-full px-10 flex flex-col justify-start items-start space-y-4'>
            <div className='flex flex-row justify-start items-center space-x-4 w-full'>
              <Image
                src='/images/cookieIcon.svg'
                className='overflow-visible rotate-90 fill-pink-300 text-pink-300'
                width={32}
                height={32}
                alt='cookie icon'
              />
              <h3 className='font-poppins text-xl font-semibold text-pink-950'>
                Cookie Pickup Day
              </h3>
            </div>
            <p className='font-poppins text-lg'>
              Next... we wait. About a week out from pickup day, you'll receive
              an email with all the details on getting your cookies. Then, just
              pickup and enjoy!
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between justify-start items-center w-full py-20 md:py-[120px] px-10 md:px-14 h-auto md:h-[100vh]'>
        <div
          className='w-full aspect-square hidden md:flex md:w-5/12 h-auto bg-repeat rounded-3xl relative shadow-xl shadow-pink-200 group'
          style={{ backgroundImage: "url('/images/tileDark.png')" }}
        >
          <div className='absolute -bottom-10 -right-10 group-hover:-bottom-8 group-hover:-right-8 h-full w-full rounded-3xl overflow-hidden transition-all duration-300 ease-in-out'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/pecanTwo.jpg'
                fill
                className='object-cover object-center'
              />
            </div>
          </div>
        </div>
        <div className='w-full md:w-6/12 flex flex-col justify-center items-start space-y-6'>
          <h2 className='font-playfair font-extrabold text-5xl text-pink-950'>
            Don't Want To Wait For The Pickup Date?
          </h2>
          <p className='font-poppins text-black'>
            Every month we have several specials for all sorts of events,
            activities or strange justifications for needing a large number of
            cookies ordered on a certain date. You just need to muster up enough
            dough to order <strong>at least</strong> two dozen cookies, pick a
            date when we're available to make them and we're in business!
          </p>
          <p className='font-poppins text-black'>
            Fill out the form below and we'll be in touch to get more details or
            your event!
          </p>
          <form
            action={specialOrderForm}
            className='flex flex-col md:flex-row justify-start items-center space-y-6 md:space-y-0 md:space-x-5 overflow-visible w-full'
          >
            <input
              className='overflow-visible w-full text-center outline-none placeholder:underline underline-offset-[6px] decoration-pink-600 focus:decoration-pink-700 font-poppins text-xl py-2'
              type='email'
              placeholder='jondoe@gmail.com'
              aria-label='email'
              name='email'
            />
            <button
              className='bg-pink-700 hover:bg-pink-800 font-poppins text-lg font-bold px-6 py-2 text-white rounded-full'
              type='submit'
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <CookieSlider cookies={saleProducts} />
    </div>
  );
}
