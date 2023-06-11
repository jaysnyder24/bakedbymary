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
        
        <div className="flex flex-row justify-between items-start grow w-5/12 relative h-full">
            <div className={`absolute rounded-lg bottom-0 h-[120px] w-[120px] bg-pink-500 z-0 transition-all ease-in-out duration-300 mr-10 delay-100`} style={{'left': `${cookie * 25}%`}}></div>
                {items.map((item, index) =>
                    <button key={index}  onMouseEnter={() => setCookie(index)} className="flex flex-col justify-start items-end group transition-all ease-in-out duration-300 relative h-full pl-5">
                        <div className="h-[160px] w-[160px] relative outline-none transition-all ease-in-out z-10">
                            <Image src={"/images/" + item.imageUnique + "Circle.png"} fill priority />
                        </div>
                    </button>
                )}
        </div>
    )
}