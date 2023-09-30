'use client'

import { useContext, useState, useEffect } from "react"
import { CartContext } from "../contexts/CartContext"

export default function CartNotice () {

    const { items } = useContext(CartContext);

    const [visible, setVisible] = useState(false)

    console.log(items.length + " items made it")

    useEffect(() => {
      
      if (items.length > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      console.log(visible);
    
    }, [items])

    console.log("Cart: " + items.length);
    

    return (

        <div className={"absolute top-1 right-1 ring-4 ring-white bg-pink-400 rounded-full h-2 w-2 group-hover:bg-pink-700 transition-colors duration-300 flex " + (visible ? "opacity-100" : "opacity-0")}></div>
                    
    )
}