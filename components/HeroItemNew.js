import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MinusIcon, PlusIcon, XIcon } from '@heroicons/react/solid'
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import Image from 'next/image'

export default function HeroItemNew(props) {

  let [isOpen, setIsOpen] = useState(false)
  const { items, addToCart } = useContext(CartContext);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [count, setCount] = useState(1);
  const [image, setImage] = useState("Default.jpg")
  const splicedValue = props.value.toString().split("")

  return (
    <>
      <button onClick={() => (openModal(), console.log(props.type))} className={'h-full snap-always w-full snap-center flex-nowrap min-w-[250px] flex flex-col justify-start overflow-hidden items-center px-5 pt-5 space-y-6 rounded-[20px] shadow-md relative bg-pink-50 transition-all group'}>
          <span className='font-bold text-xl text-black w-full leading-none'>{props.name}</span>
          <span className='text-xl text-black flex leading-none'><span className='font-bold text-pink-600 mr-2'>${props.value}{splicedValue[splicedValue.length - 2] === "." ? "0" : ""}</span> per half dozen</span>
          <span className='text-xl font-bold text-white flex flex-row justify-center items-center bg-pink-600 w-full px-5 py-3 rounded-full leading-none'>Add To Cart</span>
          <div className='relative aspect-square w-full min-w-[200px] min-h-[200px] overflow-hidden md:overflow-visible rounded-full z-10 transition-all duration-300'>
            <Image src={'/images/' + props.image + 'Circle.png'} layout="fill" objectFit='cover' objectPosition={"top"} size="30vw" priority alt='cookie' />
          </div>
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
            <div className="fixed inset-0 bg-pink-400 bg-opacity-40 z-40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 top-0 overflow-y-auto z-50">
            <div className="flex flex-row w-full h-full items-start md:items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col max-w-[600px] justify-start items-start space-y-5 w-full h-auto transform overflow-hidden bg-white p-10 text-left align-middle shadow-xl transition-all relative rounded-xl">
                  <div className='grid grid-cols-6 grid-rows-3 w-full min-h-20 gap-4'>
                    <div className='relative rounded-xl md:aspect-square aspect-video overflow-hidden col-span-6 row-span-2 md:col-span-4 md:row-span-3'>
                      <Image src={"/images/" + props.image + image} layout="fill" objectFit='cover' objectPosition='center' sizes='30vw' alt='cookies' quality={50} />
                    </div>
                    <div onMouseEnter={() => setImage("Default.jpg")} className='relative rounded-xl overflow-hidden col-span-2 md:row-span-1 group ring-0 ring-pink-500 hover:ring-2 transition-all'>
                      <Image src={"/images/" + props.image + "Default.jpg" } layout="fill" objectFit='cover' objectPosition='center' sizes='30vw' alt='cookie'  quality={50} />
                      <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300 placeholder="blur'></div>
                    </div>
                    <div onMouseEnter={() => setImage("One.jpg")} className='relative rounded-xl overflow-hidden col-span-2 md:row-span-1 group ring-0 ring-pink-500 hover:ring-2 transition-all'>
                      <Image src={"/images/" + props.image + "One.jpg" } layout="fill" objectFit='cover' objectPosition='center' sizes='30vw' alt='cookie' quality={50}  />
                      <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300'></div>
                    </div>
                    <div onMouseEnter={() => setImage("Two.jpg")} className='relative rounded-xl overflow-hidden col-span-2 md:row-span-1 group ring-0 ring-pink-500 hover:ring-2 transition-all'>
                      <Image src={"/images/" + props.image + "Two.jpg" } layout="fill" objectFit='cover' objectPosition='center' sizes='30vw' alt='cookie' quality={50}  />
                      <div className='w-full h-full absolute top-0 bg-pink-400 opacity-40 group-hover:opacity-0 transition-all duration-300'></div>
                    </div>
                  </div>
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 font-serif">
                    {props.name}
                  </Dialog.Title>
                  <span className='text-pink-500 text-xl font-bold'>${props.value} per half dozen</span>
                  <p>{props.description}</p>
                  <div className='inline-grid grid-cols-5 gap-5 w-full'>
                    <div className='flex flex-row justify-between items-center col-span-5 sm:col-span-2'>
                      <button onClick={() => (count > 0 ? setCount((count) => count - 1) : setCount(0))} className='rounded bg-pink-50 hover:bg-pink-100 active:bg-pink-200 ring-1 ring-pink-200 p-2 transition-all'><MinusIcon className='text-pink-500 h-4 w-4' /></button>
                      <span className='px-4 text-base'>{count} half dozen</span>
                      <button onClick={() => setCount((count) => count + 1)} className='rounded bg-pink-50 hover:bg-pink-100 active:bg-pink-200 ring-1 ring-pink-200 p-2 transition-all'><PlusIcon className='text-pink-500 h-4 w-4' /></button>
                    </div>
                    <button onClick={() => addToCart(props.name, props.price, props.value, count, props.image, props.type)} className='flex flex-row justify-center items-center px-4 py-2 text-pink-600 bg-pink-100 font-bold text-lg rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all ring-1 ring-pink-200 col-span-5 sm:col-span-3'>Add To Cart</button>
                  </div>
                  <button onClick={() => closeModal()} className='h-5 w-5 absolute top-0 right-5'><XIcon className='text-pink-500' /></button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
