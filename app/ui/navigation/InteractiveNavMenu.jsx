'use client';

import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function InteractiveNavMenu(props) {
  const [focus, setFocus] = useState(0);
  const lineupProducts = props.lineupProducts;
  const specialProducts = props.specialProducts;

  return (
    <div
      onMouseLeave={() => setFocus(0)}
      className='absolute overflow-hidden group-hover/nav-parent:overflow-visible flex h-0 group-hover/nav-parent:h-auto top-full pt-2 z-[100]'
    >
      <div className='bg-white rounded-lg p-5 ring-0 group-hover/nav-parent:ring-1 ring-stone-100 flex justify-start items-start space-x-5 shadow-none group-hover/nav-parent:shadow-lg opacity-0 -translate-y-4 group-hover/nav-parent:opacity-100 group-hover/nav-parent:translate-y-0 delay-200 transition-all duration-300 ease-in-out'>
        <div className='flex flex-col justify-start items-start space-y-5'>
          <Link
            href={`/cookies`}
            onMouseOver={() => {
              setFocus(0);
            }}
            className={`bg-repeat ${
              focus == 0
                ? 'bg-[url("/images/tileDark.png")] text-white'
                : 'bg-white text-stone-500'
            } hover:bg-[url('/images/tileDark.png')] p-5 rounded-lg space-y-3 flex flex-col justify-start items-start min-w-[260px] group/lineup-cookies`}
          >
            <span className='font-poppins font-bold text-sm group-hover/lineup-cookies:text-white flex justify-start items-center'>
              Lineup Cookies
              <ArrowRightIcon
                className={`h-3 w-3 ${
                  focus == 0 ? 'ml-3' : 'ml-2'
                } transition-all duration-300 ease-in-out`}
              />
            </span>
            <span className='font-poppins text-xs group-hover/lineup-cookies:text-white'>
              This month’s lineup of curated cookies.
            </span>
          </Link>
          <Link
            href={`/cookies`}
            onMouseOver={() => {
              setFocus(1);
            }}
            className={`bg-repeat ${
              focus == 1
                ? 'bg-[url("/images/tileDark.png")] text-white'
                : 'bg-white text-stone-500'
            } hover:bg-[url('/images/tileDark.png')] p-5 rounded-lg space-y-3 flex flex-col justify-start items-start min-w-[260px] group/lineup-cookies`}
          >
            <span className='font-poppins font-bold text-sm group-hover/lineup-cookies:text-white flex justify-start items-center'>
              All Cookies
              <ArrowRightIcon
                className={`h-3 w-3 ${
                  focus == 1 ? 'ml-3' : 'ml-2'
                } transition-all duration-300 ease-in-out`}
              />
            </span>
            <span className='font-poppins text-xs group-hover/lineup-cookies:text-white'>
              Luxurious list of all our delicious cookies.
            </span>
          </Link>
        </div>
        <div
          className={`${
            focus == 0
              ? 'grid opacity-100 translate-x-0 w-auto'
              : 'hidden opacity-0 translate-x-2 w-0'
          } grid-flow-row grid-cols-6 grid-rows-4 min-w-[600px] h-full flex-wrap gap-5`}
        >
          {lineupProducts.map((product, index) => {
            return (
              <Link
                href={`/cookies/${product.metadata.slug}`}
                key={index}
                className='col-span-3 row-span-2 flex justify-start items-center space-x-4 group'
              >
                <div className='h-full w-5/12 flex flex-col justify-center items-center relative'>
                  <div className="w-2/3 h-2/3 group-hover:h-full rounded-lg bg-[url('/images/tileLight.png')] bg-cover absolute top-0 left-0 overflow-hidden transition-all duration-300 ease-in-out"></div>
                  <div className='w-3/4 aspect-square rounded-lg z-50 group-hover:translate-x-2 relative transition-transform duration-300 ease-in-out'>
                    <Image
                      src={`/images/${product.metadata.imageUnique}Circle.png`}
                      fill
                      className={`object-cover`}
                    ></Image>
                  </div>
                </div>
                <div className='h-full w-1/4 flex-grow flex flex-col justify-center items-start space-y-1'>
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
        <div
          className={`${
            focus == 1 ? 'grid' : 'hidden'
          } grid-flow-row grid-cols-6 grid-rows-6 min-w-[600px] h-full flex-wrap gap-5`}
        >
          {specialProducts.map((product, index) => {
            return (
              <Link
                href={`/cookies/${product.metadata.slug}`}
                key={index}
                className='col-span-2 row-span-2 flex justify-start items-center space-x-3 group'
              >
                <div className='h-5/6 aspect-square flex flex-col justify-center items-center relative'>
                  <div className="w-2/3 h-2/3 group-hover:h-full rounded-lg bg-[url('/images/tileLight.png')] bg-cover absolute top-0 left-0 overflow-hidden transition-all duration-300 ease-in-out"></div>
                  <div className='w-10/12 aspect-square rounded-lg z-50 group-hover:translate-x-2 relative transition-transform duration-300 ease-in-out'>
                    <Image
                      src={`/images/${product.metadata.imageUnique}Circle.png`}
                      fill
                      className={`object-cover`}
                    ></Image>
                  </div>
                </div>
                <div className='h-full w-1/4 flex-grow flex flex-col justify-center items-start space-y-1'>
                  <span className='font-playfair font-black text-pink-950'>
                    {product.name}
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
