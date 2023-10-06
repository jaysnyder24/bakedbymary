"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function CookieSlider (props) {

    const cookies = props.cookies;
    
    const [position, setPosition] = useState(0);
    
    useEffect(() => {
      
       console.log(cookies);
    
    }, [position])
    

    return (
        
        <div className="flex flex-col justify-start items-center w-full py-[80px] px-14 h-auto space-y-14">
            <div className="flex flex-row justify-between items-center w-full">
                <h2 className="font-playfair w-full font-bold text-7xl text-pink-950">Popular Cookie Flavors</h2>
                <div className="flex flex-row justify-end items-center space-x-4">
                    <button onClick={() => (position < 0 ? setPosition(prevPosition => prevPosition + 100) : setPosition(0))} className="h-14 w-14 flex flex-row justify-center items-center bg-white rounded-full hover:scale-110 shadow-none hover:shadow-md transition-all duration-300"><MoveLeftIcon className="stroke-pink-700 hover:stroke-pink-800" size={28} /></button>
                    <button onClick={() => ((position / 100 * -1) < (cookies.length / 4) - 1 ? setPosition(position - 100) : setPosition(0))} className="h-14 w-14 flex flex-row justify-center items-center bg-pink-700 hover:bg-pink-800 rounded-full hover:scale-110 shadow-none hover:shadow-md hover:shadow-pink-200 transition-all duration-300"><MoveRightIcon className="stroke-white" size={28} /></button>
                </div>
            </div>
            <div className={`flex flex-row w-full h-full overflow-visible transition-transform duration-500 ease-in-out`} style={{transform: `translate(${position}%, 0%)`}}>
                {cookies.map((cookie) => {
                    return (
                        <Link key={cookie.name} href={`/cookies/${cookie.metadata.slug}`} className="flex flex-col justify-start items-center px-5 space-y-5 flex-shrink-0 w-1/4 h-full group hover:scale-105 transition-all duration-300">
                            <div className="relative aspect-square w-full p-4 flex flex-row justify-center items-center">
                                <div className="relative h-full w-full z-10">
                                    <Image src={"/images/" + cookie.metadata.imageUnique + "Circle.png"} className="object-fill object-center" fill />
                                </div>
                                <div className="bg-repeat absolute w-full h-[60%] group-hover:h-[80%] bottom-0 z-0 rounded-3xl transition-all duration-300" style={{backgroundImage: "url('/images/tileLight.png')"}}></div>
                            </div>
                            <div className="flex flex-row justify-center items-center w-full px-3 space-x-7">
                                <div className="flex flex-col justify-start items-center">
                                    <p className="font-poppins font-bold text-2xl text-pink-950">{cookie.name}</p>
                                    <p className="font-poppins text-lg text-pink-700">${cookie.default_price.unit_amount / 100} / half dozen</p>
                                </div>
                                <div className="h-10 w-10 aspect-square flex flex-row justify-center items-center bg-pink-700 hover:bg-pink-800 rounded-full hover:scale-110 shadow-none hover:shadow-md hover:shadow-pink-200 transition-all duration-300"><MoveRightIcon className="stroke-white" size={20} /></div>
                            </div>
                        </Link>
                    )}
                )}
            </div>
        </div>
    )
}