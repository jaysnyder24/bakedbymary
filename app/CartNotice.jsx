"use client"

import CartContext from "../contexts/CartContext"
import { Provider, useContext } from "react"

export default function CartNotice () {

    const {items} = useContext(CartContext);

    console.log(items);

    return (

        <CartContext.Provider value={items}>
            <div className={"absolute top-1 right-1 ring-4 ring-white bg-pink-400 rounded-full h-2 w-2 group-hover:bg-pink-700 transition-colors duration-300 "}>{items.length}</div>
        </CartContext.Provider>
        
        
                    
    )
}