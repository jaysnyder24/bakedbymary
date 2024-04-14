'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ImageSelector(props) {
  const image = props.image;
  const name = props.name;
  const slug = props.slug;
  const [selected, setSelected] = useState('Default');

  return (
    <div className='flex flex-col justify-start items-start w-full md:w-1/3 h-auto md:h-full'>
      <div
        className={
          'flex-row justify-start items-center space-x-1 mb-3 font-poppins text-pink-600 transition-colors duration-300 ' +
          (props.breadcrumb ? 'flex' : 'hidden')
        }
      >
        <Link
          href='/'
          className='hover:text-pink-700 no-underline hover:underline underline-offset-4'
        >
          home
        </Link>
        <span>/</span>
        <Link
          href='/cookies'
          className='hover:text-pink-700 no-underline hover:underline underline-offset-4'
        >
          cookies
        </Link>
        <span>/</span>
        <Link
          href={'/cookies/' + slug}
          className='hover:text-pink-700 no-underline hover:underline underline-offset-4 lowercase'
        >
          {name} cookie
        </Link>
      </div>
      <div className='w-full h-auto aspect-video md:aspect-square flex-shrink-0 relative rounded-xl overflow-hidden mb-5'>
        <Image
          src={`/images/${image}Default.jpg`}
          fill
          priority
          className={`object-cover object-center transition-all duration-500 ${
            selected === 'Default' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <Image
          src={`/images/${image}One.jpg`}
          fill
          className={`object-cover object-center transition-all duration-500 ${
            selected === 'One' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <Image
          src={`/images/${image}Two.jpg`}
          fill
          className={`object-cover object-center transition-all duration-500 ${
            selected === 'Two' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <div className='hidden md:flex flex-row h-full w-full space-x-5 justify-start items-center'>
        <div
          onMouseEnter={() => setSelected('Default')}
          onClick={() => setSelected('Default')}
          className='w-full h-full relative rounded-xl overflow-hidden group transition-all duration-300'
        >
          <Image
            src={`/images/${image}Default.jpg`}
            fill
            priority
            className='object-cover object-center group-hover:scale-110 transition-transform ease-in'
          />
          <div
            className={
              'w-full h-full absolute bg-repeat group-hover:opacity-0 transition-opacity duration-500 ' +
              (selected === 'Default' ? 'opacity-0' : 'opacity-70')
            }
            style={{ backgroundImage: "url('/images/tileDark.png')" }}
          ></div>
        </div>
        <div
          onMouseEnter={() => setSelected('One')}
          onClick={() => setSelected('One')}
          className='w-full h-full relative rounded-xl overflow-hidden group transition-all duration-300'
        >
          <Image
            src={`/images/${image}One.jpg`}
            fill
            priority
            className='object-cover object-center group-hover:scale-110 transition-transform ease-in'
          />
          <div
            className={
              'w-full h-full absolute bg-repeat group-hover:opacity-0 transition-opacity duration-500 ' +
              (selected === 'One' ? 'opacity-0' : 'opacity-70')
            }
            style={{ backgroundImage: "url('/images/tileDark.png')" }}
          ></div>
        </div>
        <div
          onMouseEnter={() => setSelected('Two')}
          onClick={() => setSelected('Two')}
          className='w-full h-full relative rounded-xl overflow-hidden group transition-all duration-300'
        >
          <Image
            src={`/images/${image}Two.jpg`}
            fill
            priority
            className='object-cover object-center group-hover:scale-110 transition-transform ease-in'
          />
          <div
            className={
              'w-full h-full absolute bg-repeat group-hover:opacity-0 transition-opacity duration-500 ' +
              (selected === 'Two' ? 'opacity-0' : 'opacity-70')
            }
            style={{ backgroundImage: "url('/images/tileDark.png')" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
