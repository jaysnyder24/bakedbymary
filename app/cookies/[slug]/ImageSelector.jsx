"use client"

import Image from "next/image";
import { useState } from "react";

export default function ImageSelector (props) {

    const image = props.image;

    const [selected, setSelected] = useState("Default");

    return (
        
        <div className="flex flex-col justify-start items-center w-1/3 h-full space-y-5">
            <div className="w-full h-auto aspect-square flex-shrink-0 relative rounded-xl overflow-hidden">
                <Image src={`/images/${image}Default.jpg`} fill className={`object-cover object-center transition-all duration-500 ${selected === "Default" ? 'opacity-100' : 'opacity-0'}`} />
                <Image src={`/images/${image}One.jpg`} fill className={`object-cover object-center transition-all duration-500 ${selected === "One" ? 'opacity-100' : 'opacity-0'}`} />
                <Image src={`/images/${image}Two.jpg`} fill className={`object-cover object-center transition-all duration-500 ${selected === "Two" ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <div className="flex flex-row h-full w-full space-x-5 justify-start items-center">
                <div onMouseEnter={() => (setSelected("Default"))} className="w-full h-full relative rounded-xl overflow-hidden hover:scale-110 group transition-all duration-300">
                    <Image src={`/images/${image}Default.jpg`} fill className='object-cover object-center' />
                    <div className={"w-full h-full absolute bg-repeat group-hover:opacity-0 transition-opacity duration-500 " + (selected === "Default" ? "opacity-0" : "opacity-70")} style={{backgroundImage: "url('/images/tileDark.png')"}}></div>
                </div>
                <div onMouseEnter={() => (setSelected("One"))} className="w-full h-full relative rounded-xl overflow-hidden hover:scale-110 group transition-all duration-300">
                    <Image src={`/images/${image}One.jpg`} fill className='object-cover object-center' />
                    <div className={"w-full h-full absolute bg-repeat group-hover:opacity-0 transition-opacity duration-500 " + (selected === "One" ? "opacity-0" : "opacity-70")} style={{backgroundImage: "url('/images/tileDark.png')"}}></div>
                </div>
                <div onMouseEnter={() => (setSelected("Two"))} className="w-full h-full relative rounded-xl overflow-hidden hover:scale-110 group transition-all duration-300">
                    <Image src={`/images/${image}Two.jpg`} fill className='object-cover object-center' />
                    <div className={"w-full h-full absolute bg-repeat group-hover:opacity-0 transition-opacity duration-500 " + (selected === "Two" ? "opacity-0" : "opacity-70")} style={{backgroundImage: "url('/images/tileDark.png')"}}></div>
                </div>
            </div>
        </div>
    )
}