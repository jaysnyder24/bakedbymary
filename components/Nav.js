import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import Cart from '../components/Cart'
import { useEffect } from 'react'
import SubscribeForm from './Form'
import { Menu, Transition, Fragment } from '@headlessui/react'
import ProductContext from '../context/ProductContext'
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export default function Nav(props) {

    const firstFour = props.inactiveProducts.filter((product, index) => index <= 3);
    const nextThree = props.inactiveProducts.filter((product, index) => index >= 4 && index <= 6);
    const firstThree = props.inactiveProducts.filter((product, index) => index <= 2);
    
    return (
        <div className='w-screen absolute top-0 z-30 bg-white md:bg-transparent'>
            <nav className='w-full max-w-[1400px] flex flex-row justify-between items-center mx-auto px-10 py-5 relative'>
                <div className='flex flex-row justify-start items-end'>
                  <Link href="/" passHref={true}><a className='font-bold text-pink-500 mr-10'>baked by<span className='font-serif font-normal text-black text-3xl leading-0 ml-2'>Mary</span></a></Link>
                  <Link href="/about-us" passHref={true}><a className='hidden md:flex h-full hover:underline hover:decoration-pink-500 hover:underline-offset-4 transition-all mr-5'>about us</a></Link>
                  <Menu as="div" className="text-left whitespace-nowrap">
                    <div className='text-amber-800 transition-all ease-in-out group'>
                      <Menu.Button className="hidden md:flex text-black flex-row justify-start items-center h-full hover:underline hover:decoration-pink-500 hover:underline-offset-4 transition-all mr-5">
                          cookies
                          <ChevronDownIcon
                          className="ml-1 h-4 w-4 text-pink-500 group-hover:text-pink-600"
                          aria-hidden="true"
                          />
                      </Menu.Button>
                    </div>
                    <Transition 
                    className={"absolute w-full left-0 px-10 z-[200]"}
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
                                  <a className="w-[23%] h-60 relative rounded-lg overflow-hidden group transition-all">
                                    <div className='w-full h-full z-[202] absolute flex justify-center items-center top-0 opacity-0 group-hover:opacity-100 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-60 transition-all ease-in-out flex-wrap p-5'>
                                      <span className='text-white font-serif font-bold text-2xl whitespace-pre-wrap text-center'>{product.name}</span>
                                    </div>
                                    <Image src={"/images/" + product.metadata.imageUnique + "Two.jpg"} alt="cookie" className="group-hover:scale-110 group-hover:blur-sm transition-all ease-in-out z-[201]" layout="fill" objectFit='cover' objectPosition={"center"} sizes={'20vw'} />
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
                </div>
                <div className='flex flex-row justify-end items-center space-x-4'>
                  <SubscribeForm />
                  {props.activeProducts.length > 0 ? <Cart /> : ""}
                  <Menu as="div" className="text-left whitespace-nowrap">
                    <div className='transition-all ease-in-out group'>
                      <Menu.Button className="flex md:hidden bg-pink-500 flex-row justify-center items-center h-full p-3 rounded-full">
                          <MenuIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                          />
                      </Menu.Button>
                    </div>
                    <Transition 
                    className={"absolute w-full left-0 px-10 z-[200]"}
                    as={Fragment}
                    enter="transition ease-out duration-200 delay-200"
                    enterFrom="transform opacity-0 -translate-x-10"
                    enterTo="transform opacity-100 -translate-x-0"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 -translate-x-0"
                    leaveTo="transform opacity-0 -translate-x-10"
                    >
                      <Menu.Items className="mt-5 w-full rounded-2xl bg-white shadow-lg ring-1 ring-pink-200 p-5 flex flex-row justify-start flex-wrap items-center outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link href={"/about-us"} passHref={true}>
                              <a className="w-full h-full relative rounded-lg overflow-hidden group transition-all text-pink-500 font-bold text-center p-4 outline-none">About Us</a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href={"/cookies"} passHref={true}>
                              <a className="w-full h-full relative rounded-lg overflow-hidden group transition-all text-pink-500 font-bold text-center p-4 outline-none">Cookies</a>
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
