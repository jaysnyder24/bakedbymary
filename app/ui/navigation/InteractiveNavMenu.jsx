import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

export default function InteractiveNavMenu(props) {
  const specialProducts = props.specialProducts;

  return (
    <div className='absolute overflow-hidden group-hover/nav-parent:overflow-visible flex h-0 group-hover/nav-parent:h-auto top-full pt-2 z-[100]'>
      <div className='bg-white rounded-lg p-5 ring-0 group-hover/nav-parent:ring-1 ring-pink-100 flex justify-start items-start space-x-10 shadow-none group-hover/nav-parent:shadow-lg opacity-0 -translate-y-4 group-hover/nav-parent:opacity-100 group-hover/nav-parent:translate-y-0 delay-200 transition-all duration-300 ease-in-out'>
        <div className='flex flex-col justify-start items-start h-full'>
          <Link
            href={`/cookies`}
            className={`text-white rounded-lg flex flex-col justify-end items-start min-w-[200px] h-full group/lineup-cookies relative overflow-hidden`}
          >
            <div className='space-y-3 flex flex-col justify-end items-start z-[110] p-5'>
              <Image
                src={`/images/logo.svg`}
                className='fill-white stroke-white text-white'
                width={80}
                alt='baked by mary cookies logo'
                height={62}
              ></Image>
              <span className='font-poppins font-medium text-lg text-white flex justify-start items-center'>
                All Cookies
                <ArrowRightIcon
                  className={`h-4 w-4 group-hover/lineup-cookies:ml-3 ml-2
                transition-all duration-300 ease-in-out`}
                />
              </span>
              <span className='font-poppins text-xs font-light text-white z-[110]'>
                Get a taste for everything we have to offer.
              </span>
            </div>

            <div className='w-full h-full absolute bg-repeat bg-[url("/images/tileDark.png")] z-[100]'></div>
          </Link>
        </div>
        <div
          className={`grid opacity-100 w-auto
          grid-flow-row grid-cols-6 grid-rows-6 min-w-[700px] h-full flex-wrap gap-4`}
        >
          {specialProducts.map((product, index) => {
            return (
              <Link
                href={`/cookies/${product.metadata.slug}`}
                key={index}
                className='col-span-3 row-span-2 flex justify-start items-center group min-h-[100px]'
              >
                <div className='h-full w-1/3 flex flex-col justify-center items-center relative'>
                  <div className="w-7/12 h-2/3 group-hover:h-full rounded-lg bg-[url('/images/tileLight.png')] bg-cover absolute top-0 left-0 overflow-hidden transition-all duration-300 ease-in-out"></div>
                  <div className='h-2/3 aspect-square rounded-lg z-50 -translate-x-2 group-hover:translate-x-0 relative transition-transform duration-300 ease-in-out'>
                    <Image
                      src={`/images/${product.metadata.imageUnique}Circle.png`}
                      fill
                      className={`object-cover`}
                    ></Image>
                  </div>
                </div>
                <div className='h-full w-2/3 flex-grow flex flex-col justify-center items-start space-y-1'>
                  <span className='font-playfair font-black text-xl text-pink-950'>
                    {product.name}
                  </span>
                  <span className='font-poppins font-semibold text-pink-700'>
                    ${product.default_price.unit_amount / 100}
                    {(product.default_price.unit_amount / 100)
                      .toString()
                      .split('').length > 2
                      ? '0'
                      : '.00'}
                    / half dozen
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
