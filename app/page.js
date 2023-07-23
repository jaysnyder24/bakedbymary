"use client"

import Image from "next/image";
import Link from "next/link";
import { MinusIcon, PlusIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

export default function Homepage () {

    const cookies = 
        [
            {
                name: "Caramel, Coconut & Chocolate",
                price: 10,
                description: "This cookie has it all! Caramel? Check. Coconut? Check. Chocolate? double check! A name reciting the ingredients of the cookie because we're lazy?! Super check!!! For real though, caramel, coconut and chocolate on a shortbread cookie is a no brainer.",
                imageUnique: "caramelCoconut"
            },
            {
                name: "Frosted Lemon",
                price: 10,
                description: "When life gives you lemons, make lemonade. If you have any lemons leftover, make frosted lemon cookies! A refreshing balance between face-puckering tartness with a sweet finish and no fumbling with change at some kid's lemonade stand.",
                imageUnique: "lemonSugar"
                },
            {
                name: "French Silk",
                price: 12,
                description: "This cookie takes us back to those days of waiting in the Perkins waiting area, fogging up the glass of the pie display and just imagining how silky, rich and delicious that French Silk Pie would be. This is better... plus, no smudge marks!",
                imageUnique: "frenchSilk"
            },
            {
                name: "Assorted Cookies",
                price: 10,
                description: "Can't pick just one or two cookies? Do you have trouble making definitive decisions? Does the idea of clicking checkout without having tasted each cookie make you sweaty? This is the box of cookies for you my friend. Trust me.",
                imageUnique: "assort"
            }
        ];

    const items = cookies;
    const [cookie, setCookie] = useState(0);
    const [position, setPosition] = useState(0);
    const [image, setImage] = useState("Default");

    useEffect(() => {
      setPosition(cookie * 25);
      console.log(position);
    }, [cookie])

    return (
        <>
            <div className=" h-screen w-full flex flex-col justify-start items-center">
                <nav className="w-full px-20 overflow-visible relative z-0">
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-center py-7">
                            <Link href="/" className="h-12 w-12 rounded-full bg-pink-500 flex flex-row justify-center items-center mr-14 hover:bg-pink-600 relative transition-all">
                                <Image src="/images/logo.svg" height={20} width={26} alt="baked by mary cookies logo" priority/>
                            </Link>
                            <div className="flex flex-row justify-start items-center space-x-5">
                                <span className="font-semibold leading-none text-lg">cookies</span>
                                <span className="font-semibold leading-none text-lg">catering</span>
                                <span className="font-semibold leading-none text-lg">about</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end items-center z-10">
                            <div className="flex flex-row justify-center items-center h-12 w-12 group">
                                <ShoppingCartIcon className=" h-7 w-7 text-pink-500 group-hover:text-pink-600 transition-all" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 aspect-square w-1/4">
                        <Image src="/images/headingCookie.svg" fill priority />
                    </div>
                </nav>
                <main className="h-full w-full relative">
                    <div className="w-full h-full px-20 py-12 flex flex-col justify-start items-center space-y-10">
                        <div className="flex flex-row justify-start items-start w-full">
                            <div className="flex flex-col justify-start items-start shrink w-6/12">
                                <h1 className="text-7xl leading-none font-playfair mb-7 font-black">Welcome To Baked By Mary Cookies!</h1>
                                <p className=" text-lg leading-none font-sans">Click the cookies to check out this month’s lineup.</p>
                            </div>
                            <div className="flex flex-row justify-between items-center grow w-3/12 relative h-full px-10">
                                <div className={`absolute rounded-lg bottom-0 h-4/6 aspect-square bg-pink-500 z-0 transition-all ease-in-out duration-300 mr-10`} style={{'left': `${cookie * 23}%`}}></div>
                                    {items.map((item, index) =>
                                        <button key={index}  onMouseEnter={() => (setCookie(index), setImage("Default"))} className="flex flex-row justify-center items-center aspect-square h-3/4">
                                            <div className={"h-full aspect-square relative outline-none transition-all ease-in-out z-10 " + (cookie === index ? "h-full" : "h-4/6")}>
                                                <Image src={"/images/" + item.imageUnique + "Circle.png"} fill priority />
                                            </div>
                                        </button>
                                    )}
                            </div>
                        </div>
                        <div className="w-full h-full space-x-10 flex flex-row justify-between items-start">
                            <div className="w-10/12 h-full flex flex-row justify-between items-center space-x-5">
                                <div className="relative h-full w-9/12 rounded-xl overflow-hidden">
                                    <Image src={"/images/" + cookies[cookie].imageUnique + image + ".jpg"} className="object-cover object-center" fill priority />
                                </div>
                                <div className="flex flex-col justify-between items-end grow w-auto h-full space-y-5">
                                    <button onMouseEnter={() => setImage("Default")} className="relative w-full h-full rounded-xl overflow-hidden">
                                        <div className={"w-full h-full bg-pink-500 z-10 absolute transition-all duration-500 top-0 " + (image === "Default" ? "bg-opacity-0" : "bg-opacity-40")}></div>
                                        <Image src={"/images/" + cookies[cookie].imageUnique + "Default.jpg"} className="object-cover object-center z-0" fill priority />
                                    </button>
                                    <button onMouseEnter={() => setImage("One")} className="relative w-full h-full rounded-xl overflow-hidden">
                                        <div className={"w-full h-full bg-pink-500 z-10 absolute transition-all duration-500 top-0 " + (image === "One" ? "bg-opacity-0" : "bg-opacity-40")}></div>
                                        <Image src={"/images/" + cookies[cookie].imageUnique + "One.jpg"} className="object-cover object-center z-0" fill priority />
                                    </button>
                                    <button onMouseEnter={() => setImage("Two")} className="relative w-full h-full rounded-xl overflow-hidden">
                                        <div className={"w-full h-full bg-pink-500 z-10 absolute transition-all duration-500 top-0 " + (image === "Two" ? "bg-opacity-0" : "bg-opacity-40")}></div>
                                        <Image src={"/images/" + cookies[cookie].imageUnique + "Two.jpg"} className="object-cover object-center z-0" fill priority />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col justify-between items-start">
                                <div className="w-full flex flex-col justify-start items-start space-y-5">
                                    <h2 className="font-playfair font-black text-6xl">{cookies[cookie].name}</h2>
                                    <div className="w-full text-pink-500 flex flex-row justify-start items-center">
                                        <StarIcon className="mr-1 h-5 w-5" />
                                        <span className="font-semibold text-xl">5 reviews | ${cookies[cookie].price} / half dozen</span>
                                    </div>
                                </div>
                                <p className="text-lg">{cookies[cookie].description}</p>
                                <div className="w-full flex flex-row justify-start items-center space-x-10">
                                    <div className="flex flex-row justify-start items-center space-x-8 p-1">
                                        <button className="rounded-xl ring-4 ring-pink-500 p-3"><MinusIcon className="w-5 h-5 text-pink-500" /></button>
                                        <span className="font-semibold text-xl">1</span>
                                        <button className="rounded-xl ring-4 ring-pink-500 p-3"><PlusIcon className="w-5 h-5 text-pink-500" /></button>
                                    </div>
                                    <button className="bg-pink-500 px-8 h-full rounded-xl text-white font-semibold text-xl">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 aspect-square w-1/6 rotate-180 -z-10">
                        <Image src="/images/headingCookie.svg" fill priority />
                    </div>
                </main>
            </div>
        </>
    )
}