import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ShoppingCartIcon, XIcon } from '@heroicons/react/solid'
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'
import { loadStripe } from '@stripe/stripe-js'

export default function SpecialOrder() {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        <button onClick={() => openModal()} className={'flex flex-row justify-start items-center p-4 rounded-full overflow-clip bg-pink-500 hover:bg-pink-600 active:bg-pink-700 transition-all group relative '}>
        <span className='text-white font-bold text-xs mr-2 leading-none'>special order</span>
          <ShoppingCartIcon className='h-4 w-4 text-white' />
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

          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-visible rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all relative">
                    <Dialog.Title as="h3" className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-10 font-serif">
                    Special Orders
                    </Dialog.Title>
                    <p className='mb-5'>Can't wait for next month's order period or not interested in this month's cookies? You're in the right place! A few things to know about special orders with Baked By Mary:</p>
                    <ul className='w-full list-disc ml-4'>
                      <li className='w-full'>Minimum of 4 dozen cookies</li>
                      <li className='w-full'>Orders are subject to scheduling</li>
                      <li className='w-full'>Not all order requests will be accepted</li>
                    </ul>
                    <button onClick={() => closeModal()} className='h-5 w-5 absolute top-5 right-5'><XIcon className='text-pink-500' /></button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}