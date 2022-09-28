import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ShoppingCartIcon, XIcon } from '@heroicons/react/solid'
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import CartItem from '../components/CartItem'
import { loadStripe } from '@stripe/stripe-js'

export default function Cart() {

  const { items } = useContext(CartContext);

  let [isOpen, setIsOpen] = useState(false)
  
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [enoughItems, setEnoughItems] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [total, setTotal] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    
    setTotal(0)
    setCheckoutItems([])
    setCartQuantity(0)
    items.forEach((item) => {
      setTotal((prevTotal) => prevTotal + (item.value * item.quantity))
      setCheckoutItems((prevItems) => [...prevItems, {price: item.price, quantity: item.quantity}])
      setCartQuantity((prevQuantity) => prevQuantity + item.quantity)
    })

    

  }, [items])

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <>
      <div className="flex items-center justify-center">
        <button onClick={() => openModal()} className={'h-10 w-10 bg-pink-600 rounded-full flex flex-row justify-center items-center pr-[1px] pt-[1px] hover:bg-pink-600 active:bg-pink-700 transition-all group relative ' + (isOpen ? "opacity-0" : "")}>
            <ShoppingCartIcon className='h-5 w-5 text-white group-hover:text-white transition-all' />
            <div className='h-5 w-5 flex flex-row justify-center items-center absolute -top-2 -right-2 bg-pink-50 text-pink-700  group-hover:bg-white group-hover:text-pink-600 text-xs rounded-full aspect-square transition-all'>{cartQuantity}</div>
        </button>
      </div>

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
                    Your Cookie Cart
                    </Dialog.Title>
                    <div className='flex flex-col justify-start items-start space-y-5 mb-5 sm:mb-10'>
                        {items.length > 0 ? items.map((item, index) => <CartItem key={index} index={index} name={item.name} price={item.price} quantity={item.quantity} image={item.image} />) : <span className='text-gray-400'>You have no items in your cart.</span>}
                        <span className='text-gray-400 text-lg'>Total ${total}</span>
                    </div>
                    <form action="/api/checkout_sessions" method="POST">
                      <input type="hidden" name="items" value={JSON.stringify(checkoutItems)} />
                      <button type='submit' role='link' className='flex flex-row justify-center items-center rounded-lg disabled:bg-gray-50 disabled:ring-gray-200 disabled:text-gray-500 bg-pink-50 ring-1 ring-pink-200 text-pink-500 w-full px-6 py-4 text-lg sm:text-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all active:bg-pink-200 hover:bg-pink-100 active:translate-y-1 active:shadow-sm' disabled={items.length > 0 ? false : true} >Checkout</button>
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
