import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState, Fragment } from 'react'
import CartContext from '../context/CartContext'
import { useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import ProductContext from '../context/ProductContext'
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import SubscribeFormNew from './FormNew'
import CartNew from './CartNew'

export default function NavNew(props) {

    const firstFour = props.inactiveProducts.filter((product, index) => index <= 3);
    const nextThree = props.inactiveProducts.filter((product, index) => index >= 4 && index <= 6);
    const firstThree = props.inactiveProducts.filter((product, index) => index <= 2);
    
    return (
        <div className='w-full absolute top-0 z-30 bg-transparent'>
            <nav className='w-full max-w-[1400px] flex flex-row justify-between items-center mx-auto px-10 py-7 relative'>
                <div className='flex flex-row justify-start items-center'>
                  <Link href="/" passHref={true}><a className='h-12 w-12 mr-10'><img src="/images/logo.svg"></img></a></Link>
                  <Menu as="div" className="text-left whitespace-nowrap">
                    <div className='text-amber-800 transition-all ease-in-out group'>
                      <Menu.Button className="hidden md:flex text-black flex-row justify-start items-center h-full hover:underline hover:decoration-pink-600 hover:underline-offset-4 transition-all mr-5">
                          cookies
                          <ChevronDownIcon
                          className="ml-1 h-4 w-4 text-pink-600"
                          aria-hidden="true"
                          />
                      </Menu.Button>
                    </div>
                    <Transition 
                    className={"absolute w-full left-0 px-10 z-50"}
                    as={Fragment}
                    enter="transition ease-out duration-200 delay-200"
                    enterFrom="transform opacity-0 -translate-x-10"
                    enterTo="transform opacity-100 -translate-x-0"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 -translate-x-0"
                    leaveTo="transform opacity-0 -translate-x-10"
                    >
                      <Menu.Items className="mt-5 w-full rounded-2xl bg-white shadow-lg ring-1 ring-pink-50 p-5 flex flex-row justify-between items-center space-x-5">
                        <div className='flex flex-row justify-between items-start w-3/4 h-full grow'>
                          {!props.activeProducts.length ?
                            firstFour.map((product) => 
                            <Menu.Item key={product.id}>
                              {({ active }) => (
                                <Link href={"/cookies/" + product.metadata.slug} passHref={true}>
                                  <a className="w-[23%] h-52 relative rounded-lg overflow-hidden group transition-all">
                                    <div className='w-full h-full z-[202] absolute flex justify-center items-center top-0 opacity-0 group-hover:opacity-100 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-60 transition-all ease-in-out flex-wrap p-5'>
                                      <span className='text-white font-serif font-bold text-2xl whitespace-pre-wrap text-center'>{product.name}</span>
                                    </div>
                                    <Image src={"/images/" + product.metadata.imageUnique + "Two.jpg"} alt="cookie" className="group-hover:scale-110 group-hover:blur-sm transition-all ease-in-out z-[201]" layout="fill" objectFit='cover' objectPosition={"center"} sizes={'20vw'} />
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                            )
                            :
                            props.activeProducts.map((product) => 
                            <Menu.Item key={product.id}>
                              {({ active }) => (
                                <Link href={"/cookies/" + product.metadata.slug} passHref={true}>
                                  <a className="w-[23%] aspect-square relative rounded-lg overflow-hidden group transition-all">
                                    <div className='w-full h-full z-[202] absolute flex justify-center items-center top-0 opacity-0 group-hover:opacity-100 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-60 transition-all ease-in-out flex-wrap p-5'>
                                      <span className='text-white font-serif font-bold text-2xl whitespace-pre-wrap text-center'>{product.name}</span>
                                    </div>
                                    <Image src={"/images/" + product.metadata.imageUnique + "Circle.png"} alt="cookie" className="group-hover:scale-110 group-hover:blur-sm transition-all ease-in-out z-[201]" layout="fill" objectFit='cover' objectPosition={"center"} sizes={'20vw'} />
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                            )
                          }
                        </div>
                        <div className='flex flex-col justify-between items-start h-52 w-1/4 shrink space-y-3'>
                         {props.activeProducts.length > 0 ?
                         firstThree.map((product) => 
                         <Menu.Item key={product.id}>
                         {({ active }) => (
                             <Link href={"/cookies/" + product.metadata.slug} passHref={true}>
                               <a className='flex flex-row justify-start items-center h-full rounded-lg transition-all group shrink'>
                                 <div className='aspect-square h-10 rounded-lg overflow-hidden relative mr-4 group-hover:scale-110 transition-all'>
                                   <Image src={"/images/" + product.metadata.imageUnique + "One.jpg"} alt="cookie" layout="fill" objectFit='cover' sizes="5vw" objectPosition={"center"} />
                                 </div>
                                 <span className='text-base group-hover:text-pink-500 group-hover:font-medium transition-all whitespace-pre-wrap leading-tight'>{product.name}</span>
                               </a>
                             </Link>
                         )}
                         </Menu.Item>)
                         :
                         nextThree.map((product) => 
                          <Menu.Item key={product.id}>
                          {({ active }) => (
                              <Link href={"/cookies/" + product.metadata.slug} passHref={true}>
                                <a className='flex flex-row justify-start items-center h-full rounded-lg transition-all group shrink'>
                                  <div className='aspect-square h-10 rounded-lg overflow-hidden relative mr-4 group-hover:scale-110 transition-all'>
                                    <Image src={"/images/" + product.metadata.imageUnique + "One.jpg"} alt="cookie" layout="fill" objectFit='cover' sizes="5vw" objectPosition={"center"} />
                                  </div>
                                  <span className='text-base group-hover:text-pink-500 group-hover:font-medium transition-all whitespace-pre-wrap leading-tight'>{product.name}</span>
                                </a>
                              </Link>
                          )}
                          </Menu.Item>)}
                          <Menu.Item>
                          {({ active }) => (
                              <Link href={"/cookies"} passHref={true}>
                                <a className='flex flex-row justify-center items-center w-full h-10 rounded-lg transition-all group grow bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-600 active:bg-pink-700'>
                                  See All Cookies
                                </a>
                              </Link>
                          )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Link href="/about-us" passHref={true}><a className='hidden md:flex h-full hover:underline hover:decoration-pink-500 hover:underline-offset-4 transition-all mr-5'>about us</a></Link>
                </div>
                <div className='flex flex-row justify-end items-center'>
                  <SubscribeFormNew />
                  {props.activeProducts.length > 0 ? <CartNew /> : ""}
                  <Menu as="div" className="text-left whitespace-nowrap z-50">
                    <div className='transition-all ease-in-out group'>
                      <Menu.Button className={"flex md:hidden flex-col justify-between items-center h-12 w-12 px-3 py-[14px] rounded-full z-50 overflow-visible"}>
                          <div className='bg-pink-600 w-full h-[5px] rounded-tl-full rounded-bl-full rounded-tr-full z-50'></div>
                          <div className='bg-pink-600 w-full h-[5px] rounded-br-full rounded-tl-full z-50'></div>
                          <div className='bg-pink-600 w-full h-[5px] rounded-br-full rounded-tr-full rounded-bl-full z-50'></div>
                      </Menu.Button>
                    </div>
                    <Transition 
                    className={"absolute w-full px-10 left-0 z-[200]"}
                    as={Fragment}
                    enter="transition ease-out duration-200 delay-200"
                    enterFrom="transform opacity-0 -translate-x-10"
                    enterTo="transform opacity-100 -translate-x-0"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 -translate-x-0"
                    leaveTo="transform opacity-0 -translate-x-10"
                    >
                      <Menu.Items className="mt-5 w-full rounded-2xl bg-pink-600 shadow-lg p-5 flex flex-row justify-start flex-wrap items-center outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link href={"/about-us"} passHref={true}>
                              <a className="w-full h-full relative rounded-lg overflow-hidden group transition-all text-white font-bold text-center p-4 outline-none bg-pink-700 hover:bg-pink-700 active:bg-pink-700 mb-4">About Us</a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href={"/cookies"} passHref={true}>
                              <a className="w-full h-full relative rounded-lg overflow-hidden group transition-all text-white font-bold text-center p-4 outline-none bg-pink-700 hover:bg-pink-700 active:bg-pink-700">Cookies</a>
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
            </nav>
        </div>
  )
}
