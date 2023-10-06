import Image from 'next/image';
import ImageSelector from './ImageSelector';
import { StarIcon } from 'lucide-react';
import AdjustCart from '../../adjustCart';

async function getCookie(slug) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const products = await stripe.products.search({
        query: `metadata[\'slug\']:\'${slug}\'`,
        expand: ['data.default_price'],
    });

    return products.data[0];
}

export default async function Cookie ({params}) {

    const cookie = await getCookie(params.slug);

    console.log(cookie);

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            <main className="flex flex-row justify-center items-start w-full p-14 h-[90vh] space-x-14 relative">
                <ImageSelector image={cookie.metadata.imageUnique} />
                <div className=" w-2/3 h-auto flex flex-col space-y-8">
                    <div className="w-full flex flex-col justify-start items-start space-y-5">
                        <h1 className="font-bold font-playfair text-6xl text-pink-950">{cookie.name} Cookie</h1>
                        <span className="w-full font-poppins font-medium text-lg text-pink-600 flex flex-row justify-start items-center"><StarIcon className='mr-1 fill-pink-600' height={20} color='rgb(219 39 119)' /> 5 reviews | ${cookie.default_price.unit_amount / 100} / half dozen</span>
                    </div>
                    <p className='w-full font-poppins text-lg'>{cookie.description}</p>
                    {cookie.metadata.available === "lineup" ? <AdjustCart item={cookie} delay={false} theme={"dark"} orientation={"row"} /> : ""}
                    <div className="w-full flex flex-col justify-start items-start space-y-5">
                        <h2 className="font-semibold font-playfair text-2xl text-black">Pairs Well With...</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}