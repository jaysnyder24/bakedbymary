import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MailIcon, XIcon } from '@heroicons/react/solid'
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'
import { loadStripe } from '@stripe/stripe-js'

export default function SubscribeFormNew() {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        <button onClick={() => openModal()} className={'md:flex flex-row justify-center items-center mr-6 p-1 group relative hidden '}>
          <MailIcon className='h-8 w-8 text-pink-600 group-hover:text-pink-700' />
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
                    Subscribe To Cookie Club
                    </Dialog.Title>
                    <p>Welcome to Cookie Club! If you want to be the first to know when new cookies are available from Baked By Mary, and other fun things we have going on, fill out the form below!</p>
                    <iframe className='w-full h-[460px]' src="https://cdn.forms-content.sg-form.com/4e7e6d4c-3ee8-11ed-8807-ea89ab535263"/>
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