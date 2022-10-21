import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ShoppingCartIcon, XIcon } from '@heroicons/react/solid'
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'
import { loadStripe } from '@stripe/stripe-js'
import ProductContext from '../context/ProductContext'

export default function SpecialOrder() {

  let [isOpen, setIsOpen] = useState(false)
  const {activeProducts, inactiveProducts} = useContext(ProductContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [cookies, setCookies] = useState("");

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
     
      const res = await fetch("/api/special_order_request", {
        body: JSON.stringify({
          email: email,
          name: name,
          cookies: cookies,
          date: date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }

    closeModal();
  };

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
                <Dialog.Panel className="w-full max-w-xl transform overflow-visible rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all relative">
                    <Dialog.Title as="h3" className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-10 font-serif">
                    Special Order Request
                    </Dialog.Title>
                    <p className='mb-5'>Can't wait for next month's order period or not interested in this month's cookies? You're in the right place! A few things to know about special orders with Baked By Mary:</p>
                    <ul className='w-full list-disc ml-4 mb-10'>
                      <li className='w-full'>Minimum of 4 dozen cookies</li>
                      <li className='w-full'>Orders are subject to scheduling</li>
                      <li className='w-full'>Request should be at least two weeks in advance of pickup</li>
                      <li className='w-full'>Not all order requests will be accepted</li>
                    </ul>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                      <label htmlFor="name" className='font-bold ml-4 text-sm mb-2'>First & Last Name</label>
                      <input name="name" onChange={(e) => setName(e.target.value)} className='w-full outline-none ring-2 ring-pink-200 focus:ring-pink-500 px-4 py-2 rounded-full mb-5' type={"text"} placeholder="John & Jane Doe"></input>
                      <label htmlFor="email" className='font-bold ml-4 text-sm mb-2'>Email Address</label>
                      <input name="email" onChange={(e) => setEmail(e.target.value)} className='w-full outline-none ring-2 ring-pink-200 focus:ring-pink-500 px-4 py-2 rounded-full mb-5' type={"email"} placeholder="jdoe@example.com"></input>
                      <label htmlFor="date" className='font-bold ml-4 text-sm mb-2'>Pickup Date</label>
                      <input name="date" onChange={(e) => setDate(e.target.value)} className='w-full outline-none ring-2 ring-pink-200 focus:ring-pink-500 px-4 py-2 rounded-full mb-5' type={"datetime-local"} placeholder="01/01/2023"></input>
                      <label htmlFor="cookies" className='font-bold ml-4 text-sm mb-2'>Cookies</label>
                      <textarea name="cookies" onChange={(e) => setCookies(e.target.value)} rows={"3"} className='w-full outline-none ring-2 ring-pink-200 focus:ring-pink-500 px-4 py-2 rounded-2xl mb-10' type={"datetime-local"} placeholder="List cookies you'd like to order."></textarea>
                      <button type='submit' className='p-4 rounded-full bg-pink-500 text-white font-bold w-auto'>Submit Request</button>
                    </form>
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