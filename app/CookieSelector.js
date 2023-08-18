"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CookieSelector (props) {

    const items = props.cookies;
    const [cookie, setCookie] = useState(0);
    

    return (
        
        <div className="flex flex-row justify-between items-center grow w-4/12 relative h-5/6 px-10">
                {items.map((item, index) =>
                    <button key={index}  onMouseEnter={() => setCookie(index)} className="flex flex-row justify-center items-center aspect-square h-full relative group">
                        <div className={"aspect-square relative outline-none transition-all ease-in-out z-10 " + (cookie === index ? "h-full" : "h-5/6")}>
                            <Image src={"/images/" + item.imageUnique + "Circle.png"} fill priority />
                        </div>
                        <div className={"absolute aspect-square rounded bg-pink-500 group-hover:h-3/4 group-hover:-bottom-5 group-hover:-left-5 group-hover:opacity-100 ease-in-out transition-all duration-300 " + (index === cookie ? "h-3/4 opacity-100 -bottom-5 -left-5" : "h-0 opacity-0 bottom-1/2 left-1/2")}></div>
                    </button>
                )}
        </div>
    )
}