"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CookieSelector (props) {

    const items = props.cookies;
    const [cookie, setCookie] = useState(0);
    const [position, setPosition] = useState(0)

    useEffect(() => {
      setPosition(cookie * 25);
      console.log(position);
    }, [cookie])
    

    return (
        
        <div className="flex flex-row justify-between items-center grow w-3/12 relative h-full px-10">
            <div className={`absolute rounded-lg bottom-0 h-4/6 aspect-square bg-pink-500 z-0 transition-all ease-in-out duration-300 mr-10`} style={{'left': `${cookie * 23}%`}}></div>
                {items.map((item, index) =>
                    <button key={index}  onMouseEnter={() => setCookie(index)} className="flex flex-row justify-center items-center aspect-square h-3/4">
                        <div className={"h-full aspect-square relative outline-none transition-all ease-in-out z-10 " + (cookie === index ? "h-full" : "h-4/6")}>
                            <Image src={"/images/" + item.imageUnique + "Circle.png"} fill priority />
                        </div>
                    </button>
                )}
        </div>
    )
}