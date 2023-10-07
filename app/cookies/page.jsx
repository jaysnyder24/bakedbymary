import Link from 'next/link';
import Image from 'next/image';
import { MoveRightIcon } from 'lucide-react';

async function getProducts() {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const products = await stripe.products.list({
        active: true,
        expand: ['data.default_price'],
        limit: 100,
    });

    return products.data;

}

export default async function Cookie ({params}) {

    const products = await getProducts();

    const lineupProducts = products.filter((item) => {
        return item.metadata.available === "lineup";
    });

    const specialProducts = products.filter((item) => {
        return item.metadata.available === "special";
    });

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            <main className="flex flex-col justify-start items-start w-full p-14 space-y-10 h-auto min-h-[90vh]">
                <div className="flex flex-col justify-start w-full space-y-5">
                    <h1 className="font-bold font-playfair text-6xl text-pink-950">Specialty, Handmade Cookies</h1>
                    <p className='font-poppins text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores itaque molestiae id eligendi, labore quae ex magnam culpa animi fuga soluta autem illum, cumque fugiat? Praesentium tempore harum quasi fugit.</p>
                </div>
                <div className="flex flex-col justify-start w-full space-y-5">
                    <h2 className="font-bold font-playfair text-4xl text-pink-950">Current Pickup Cookies</h2>
                    <p className='font-poppins text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores itaque molestiae id eligendi, labore quae ex magnam culpa animi fuga soluta autem illum, cumque fugiat? Praesentium tempore harum quasi fugit.</p>
                    <div className="flex flex-row justify-start items-center w-full flex-wrap">
                        {lineupProducts.map((cookie) => {
                            
                            const decimalPrice = cookie.default_price.unit_amount / 100;
                            const splitPrice = decimalPrice.toString().split("");
                            
                            return (
                                <Link key={cookie.name} href={`/cookies/${cookie.metadata.slug}`} className="flex flex-col justify-start items-center p-10 space-y-5 flex-shrink-0 w-1/4 h-full group hover:scale-105 transition-all duration-300">
                                    <div className="relative aspect-square w-full p-4 flex flex-row justify-center items-center">
                                        <div className="relative h-full w-full z-10">
                                            <Image src={"/images/" + cookie.metadata.imageUnique + "Circle.png"} className="object-fill object-center" fill />
                                        </div>
                                        <div className="bg-repeat absolute w-full h-[60%] group-hover:h-[80%] bottom-0 z-0 rounded-3xl transition-all duration-300" style={{backgroundImage: "url('/images/tileLight.png')"}}></div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center w-full px-3 space-x-7">
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="font-poppins font-bold text-xl text-pink-950">{cookie.name}</p>
                                            <p className="font-poppins text-lg text-pink-700">${decimalPrice}{splitPrice[splitPrice.length - 1] !== "0" ? "0" : ".00"} / half dozen</p>
                                        </div>
                                        <div className="h-10 w-10 aspect-square flex flex-row justify-center items-center bg-pink-700 hover:bg-pink-800 rounded-full hover:scale-110 shadow-none hover:shadow-md hover:shadow-pink-200 transition-all duration-300"><MoveRightIcon className="stroke-white" size={20} /></div>
                                    </div>
                                </Link>
                            )}
                        )}
                    </div>
                </div>
                <div className="flex flex-col justify-start w-full space-y-5">
                    <h2 className="font-bold font-playfair text-4xl text-pink-950">Special Order Cookies</h2>
                    <p className='font-poppins text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores itaque molestiae id eligendi, labore quae ex magnam culpa animi fuga soluta autem illum, cumque fugiat? Praesentium tempore harum quasi fugit.</p>
                    <div className="flex flex-row justify-start items-center w-full flex-wrap">
                        {specialProducts.map((cookie) => {
                            
                            const decimalPrice = cookie.default_price.unit_amount / 100;
                            const splitPrice = decimalPrice.toString().split("");
                            
                            return (
                                <Link key={cookie.name} href={`/cookies/${cookie.metadata.slug}`} className="flex flex-col justify-start items-center p-10 space-y-5 flex-shrink-0 w-1/4 h-full group hover:scale-105 transition-all duration-300">
                                    <div className="relative aspect-square w-full p-4 flex flex-row justify-center items-center">
                                        <div className="relative h-full w-full z-10">
                                            <Image src={"/images/" + cookie.metadata.imageUnique + "Circle.png"} className="object-fill object-center" fill />
                                        </div>
                                        <div className="bg-repeat absolute w-full h-[60%] group-hover:h-[80%] bottom-0 z-0 rounded-3xl transition-all duration-300" style={{backgroundImage: "url('/images/tileLight.png')"}}></div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center w-full px-3 space-x-7">
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="font-poppins font-bold text-xl text-pink-950">{cookie.name}</p>
                                            <p className="font-poppins text-lg text-pink-700">${decimalPrice}{splitPrice.length > 2 ? "0" : ".00"} / half dozen</p>
                                        </div>
                                        <div className="h-10 w-10 aspect-square flex flex-row justify-center items-center bg-pink-700 hover:bg-pink-800 rounded-full hover:scale-110 shadow-none hover:shadow-md hover:shadow-pink-200 transition-all duration-300"><MoveRightIcon className="stroke-white" size={20} /></div>
                                    </div>
                                </Link>
                            )}
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}