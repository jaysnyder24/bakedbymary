import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import Image from 'next/image'

export default function HeroItem(props) {

  let [isOpen, setIsOpen] = useState(false)
  const { items, addToCart } = useContext(CartContext);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [count, setCount] = useState(1);
  const [image, setImage] = useState((props.images[0]))

  return (
    <>
      <button onClick={() => openModal()} className='aspect-video sm:aspect-auto flex flex-col justify-end items-center rounded-2xl shadow-md relative overflow-clip transition-all group'>
        <div className={'w-full h-full bg-pink-50 bg-opacity-0 opacity-0 absolute top-0 left-0 z-20 group-hover:opacity-100 group-hover:bg-opacity-90 transition-all duration-200 p-7 flex-col justify-center items-center space-y-5 ' + (isOpen ? 'hidden' : 'flex')}>
            <span className='font-bold font-serif text-lg md:text-2xl lg:text-3xl text-pink-600'>{props.name}</span>
            <span className='font-bold font-serif text-lg md:text-xl lg:text-2xl text-pink-600'>${props.value}</span>
        </div>
        <Image src={'/images/' + props.images[0]} className="z-10 group-hover:scale-125 transition-all duration-300" layout="fill" objectFit='cover' objectPosition="center" size="10vw" priority alt='cookie'/>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-pink-400 bg-opacity-40 z-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col justify-start items-start space-y-5 w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all relative">
                  <div className='grid grid-cols-6 grid-rows-3 w-full min-h-20 gap-4'>
                    <div className='relative rounded-xl md:aspect-square aspect-video overflow-clip col-span-6 row-span-2 md:col-span-4 md:row-span-3'>
                      <Image src={"/images/" + image} layout="fill" objectFit='cover' objectPosition='center' sizes='30vw' alt='cookies'/>
                    </div>
                    <div onMouseEnter={() => setImage("cookieDefault.jpeg")} className='relative rounded-xl overflow-clip col-span-2 md:row-span-1 group ring-0 ring-pink-500 hover:ring-2 transition-all'>
                      <Image src={"/images/" + props.images[0]} layout="fill" objectFit='cover' objectPosition='center' sizes='30vw' alt='cookie' />
                      <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300 placeholder="blur'></div>
                    </div>
                    <div onMouseEnter={() => setImage("cookieOne.jpg")} className='relative rounded-xl overflow-clip col-span-2 md:row-span-1 group ring-0 ring-pink-500 hover:ring-2 transition-all'>
                      <Image src={"/images/" + props.images[1]} layout="fill" objectFit='cover' objectPosition='center' sizes='30vw' alt='cookie' />
                      <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300'></div>
                    </div>
                    <div onMouseEnter={() => setImage("cookieTwo.jpg")} className='relative rounded-xl overflow-clip col-span-2 md:row-span-1 group ring-0 ring-pink-500 hover:ring-2 transition-all'>
                      <Image src={"/images/" + props.images[2]} layout="fill" objectFit='cover' objectPosition='center' sizes='30vw' alt='cookie' />
                      <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300'></div>
                    </div>
                  </div>
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 font-serif">
                    {props.name}<span className='text-pink-500 font-normal'> | ${props.value} per dozen</span>
                  </Dialog.Title>
                  <p>{props.description}</p>
                  <div className='inline-grid grid-cols-5 gap-5 w-full'>
                    <div className='flex flex-row justify-between items-center col-span-5 sm:col-span-2'>
                      <button onClick={() => (count > 0 ? setCount((count) => count - 1) : setCount(0))} className='rounded bg-pink-50 hover:bg-pink-100 active:bg-pink-200 ring-1 ring-pink-200 p-2 transition-all'><MinusIcon className='text-pink-500 h-4 w-4' /></button>
                      <span className='px-4 text-lg'>{count} dozen</span>
                      <button onClick={() => setCount((count) => count + 1)} className='rounded bg-pink-50 hover:bg-pink-100 active:bg-pink-200 ring-1 ring-pink-200 p-2 transition-all'><PlusIcon className='text-pink-500 h-4 w-4' /></button>
                    </div>
                    <button onClick={() => addToCart(props.name, props.price, props.value, count)} className='flex flex-row justify-center items-center px-4 py-2 text-pink-600 bg-pink-100 font-bold text-lg rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all ring-1 ring-pink-200 col-span-5 sm:col-span-3'>Add To Cart</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
