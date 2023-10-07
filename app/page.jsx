import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AdjustCart from "./adjustCart.jsx";
import Nav from "./nav";
import CookieSlider from "./CookieSlider.jsx";

async function getProducts() {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const products = await stripe.products.list({
        active: true,
        expand: ['data.default_price'],
        limit: 100,
    });

    return products.data;

}

export default async function Homepage () {

    const products = await getProducts();
    const lineupProducts = products.filter((item) => {
        return item.metadata.available === "lineup";
    });

    const assortedProduct = lineupProducts.pop();

    const specialProducts = products.filter((item) => {
        return item.metadata.available === "special";
    });

    async function specialOrderForm(formData) {
        'use server'

        const sendgrid = require('@sendgrid/mail');
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

        const email = formData.get("email");

        const message = {
            to: email,
            from: 'mary@bakedbymary.com',
            subject: 'Special Order Request',
            text: 'Thank you so much for the order request! Let\'s get a few of the details out of the way: what cookies would you like, how many of each kind and when would you like to pick them up?',
            html: '<p>Thank you so much for the order request! Let\'s get a few of the details out of the way: what cookies would you like, how many of each kind and when would you like to pick them up?</p>',
        }

        sendgrid.send(message).then((response) => {
            console.log(response[0].statusCode);
            console.log(response[0].headers)
        }).catch((error) => {
            console.error(error);
        })
    }

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            <main className="flex flex-row justify-center items-start w-full px-14 pt-14 h-[80vh]">
                <div className="flex flex-row justify-between items-start w-full h-full space-x-10">
                    <div className="flex flex-col justify-center items-start w-4/12 h-full space-y-6 pr-5">
                        <h1 className="font-playfair font-bold text-8xl text-pink-950 space-y-0">Falling Into Fall Cookies</h1>
                        <span className="font-poppins font-semibold text-base text-pink-500"><span className="font-extrabold">Next Pickup Day:</span> Monday September 11th</span>
                        <p className="font-poppins font-normal text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure officiis minus quasi veniam quod aliquid quos ab incidunt unde, obcaecati ratione? Nesciunt voluptate ab iure ullam voluptatibus culpa! At, nisi.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-4/12 h-full px-5 relative">
                        <div className="rounded-full bg-pink-100 h-full w-full hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-pink-200 shadow-pink-200 bg-repeat flex flex-col justify-center space-y-8 items-center px-10 py-20 group transition-transform duration-300" style={{backgroundImage: "url('/images/tileDark.png')"}}>
                            <div className="flex flex-row justify-center items-start -space-x-8 w-full h-auto">
                                <div className="relative h-[100px] aspect-square w-auto mt-6 z-10 group-hover:scale-105 transition-transform duration-300">
                                    <Image src={"/images/" + lineupProducts[0].metadata.imageUnique + "Circle.png"} className="object-fill object-center" fill />
                                </div>
                                <div className="relative h-[100px] aspect-square w-auto z-20 group-hover:scale-125 transition-transform duration-300">
                                    <Image src={"/images/" + lineupProducts[1].metadata.imageUnique + "Circle.png"} className="object-fill object-center" fill />
                                </div>
                                <div className="relative h-[100px] aspect-square w-auto mt-6 z-10 group-hover:scale-105 transition-transform duration-300">
                                    <Image src={"/images/" + lineupProducts[2].metadata.imageUnique + "Circle.png"} className="object-fill object-center" fill />
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-center space-y-5">
                                <h2 className="font-playfair w-full font-bold text-3xl text-white text-center">Can't decide? Get assorted boxes instead!</h2>
                                <p className="text-white font-poppins text-lg">${assortedProduct.default_price.unit_amount / 100} / half dozen</p>
                                <AdjustCart item={assortedProduct} delay={false} theme={"light"} orientation={"col"} />
                            </div>  
                        </div>
                        <Link href={"/cookies"} className="absolute font-poppins font-bold flex flex-row justify-center items-center bottom-0 right-0 bg-pink-200 hover:bg-pink-300 hover:scale-110 text-pink-950 aspect-square h-1/5 w-auto rounded-full p-5 transition-all duration-300">
                            see all
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between items-start py-4 w-4/12 h-full pl-5">
                        {lineupProducts.map((product) => {
                            return (
                                <div key={product.id} className="group relative flex flex-row justify-between items-center w-full bg-repeat p-6 rounded-2xl shadow-md ring-1 ring-pink-200 shadow-pink-200 transition-all duration-300" style={{backgroundImage: "url('/images/tileLight.png')"}}>
                                    <div className="flex flex-col justify-start items-start w-[50%] space-y-2 transition-all duration-300">
                                        <span className="text-pink-950 font-playfair font-extrabold text-xl">{product.name}</span>
                                        <span className="text-pink-950 font-poppins text-lg">${product.default_price.unit_amount / 100} / half dozen</span>
                                        <AdjustCart item={product} delay={true} theme={"dark"} orientation={"col"} />
                                    </div>
                                    <div className="w-[40%] group-hover:delay-100 aspect-square absolute -right-[20%] group-hover:right-6 flex flex-row justify-center items-center my-auto inset-y-0 transition-all duration-300">
                                        <div className="h-full w-full relative">
                                            <Image src={"/images/" + product.metadata.imageUnique + "Circle.png"} className="object-fill object-center" fill />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
            <div className="flex flex-row justify-center items-center mt-20 px-14">
                <div className="flex flex-row justify-between items-center w-full bg-repeat rounded-3xl py-10 ring-1 ring-pink-200 shadow-2xl shadow-pink-200" style={{backgroundImage: "url('/images/tileLight.png')"}}>
                    <div className="w-4/12 px-10 h-full">
                        <h2 className="font-playfair font-extrabold text-5xl text-pink-950">How Monthly Cookie Orders Work</h2>
                    </div>
                    <div className="w-4/12 h-full px-10 flex flex-col justify-start items-start border-pink-600 border-r border-l space-y-4">
                        <div className="flex flex-row justify-start items-center space-x-4 w-full">
                            <Image src="/images/cookieIcon.svg" className="overflow-visible rotate-90 fill-pink-300 text-pink-300" width={32} height={32} alt="cookie icon" />
                            <h3 className="font-poppins text-xl font-semibold text-pink-950">Place Your Order</h3>
                        </div>
                        <p className="font-poppins text-lg">First, things first: check out the pickup date and order cookies from the monthly lineup. Yay! Shortly after, you'll receive an email receipt.</p>
                    </div>
                    <div className="w-4/12 h-full px-10 flex flex-col justify-start items-start space-y-4">
                        <div className="flex flex-row justify-start items-center space-x-4 w-full">
                            <Image src="/images/cookieIcon.svg" className="overflow-visible rotate-90 fill-pink-300 text-pink-300" width={32} height={32} alt="cookie icon" />
                            <h3 className="font-poppins text-xl font-semibold text-pink-950">Cookie Pickup Day</h3>
                        </div>
                        <p className="font-poppins text-lg">Next... we wait. About a week out from pickup day, you'll receive an email with all the details on getting your cookies. Then, just pickup and enjoy!</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full py-[120px] px-14 h-[100vh]">
                <div className="w-6/12 h-full bg-repeat rounded-3xl relative shadow-xl shadow-pink-200 group" style={{backgroundImage: "url('/images/tileDark.png')"}}>
                    <div className="absolute -bottom-10 -right-10 group-hover:-bottom-8 group-hover:-right-8 h-full w-full rounded-3xl overflow-hidden transition-all duration-300 ease-in-out">
                        <div className="relative h-full w-full">
                            <Image src="/images/pecanTwo.jpg" fill className="object-fill object-center" />
                        </div>
                    </div>
                </div>
                <div className="w-5/12 flex flex-col justify-center items-start space-y-6">
                    <h2 className="font-playfair font-extrabold text-5xl text-pink-950">Don't Want To Wait For The Delivery Date?</h2>
                    <p className="font-poppins text-black">Every month we have several specials for all sorts of events, activities or strange justifications for needing a large number of cookies ordered on a certain date. You just need to muster up enough dough to order <strong>at least</strong> two dozen cookies, pick a date when we're available to make them and we're in business!</p>
                    <p className="font-poppins text-black">Fill out the form below and we'll be in touch to get more details or your event!</p>
                    <form action={specialOrderForm} className="flex flex-row justify-start items-center space-x-5 overflow-visible w-full">
                        <input className="overflow-visible outline-none underline underline-offset-[6px] decoration-pink-600 focus:decoration-pink-700 font-poppins text-xl py-2" type="email" placeholder="jondoe@gmail.com" aria-label="email" name="email" />
                        <button className="bg-pink-700 hover:bg-pink-800 font-poppins text-lg font-bold px-6 py-2 text-white rounded-full" type="submit">submit</button>
                    </form>
                </div>
            </div>
            <CookieSlider cookies={specialProducts} />
        </div>
    )
}