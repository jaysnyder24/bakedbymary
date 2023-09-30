'use client'

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function AdjustCart (props) {

    const product = props.item;

    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext);    

    return (
        <div className={"flex flex-col justify-start items-start space-y-4 transition-all duration-600 overflow-hidden " + (props.delay ? "opacity-0 h-0 -translate-y-10 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-0" : "")}>
            <div className="flex flex-row justify-between items-center space-x-2">
                <button onClick={() => (setQuantity(prevQuantity => prevQuantity - 1))} disabled={quantity === 0 ? true : false} className={"p-2 rounded-full " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100" : "bg-pink-700 hover:bg-pink-800")}><MinusIcon color={props.theme === "light" ? "#500724" : "white"} size={16} /></button>
                <span className={"font-bold w-10 h-full text-center font-poppins " + (props.theme === "light" ? "text-white" : "text-pink-950")}>{quantity}</span>
                <button onClick={() => (setQuantity(prevQuantity => prevQuantity + 1))} className={"p-2 rounded-full " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100" : "bg-pink-700 hover:bg-pink-800")}><PlusIcon color={props.theme === "light" ? "#500724" : "white"} size={16} /></button>
            </div>
            <button disabled={quantity === 0 ? true : false} onClick={() => (addToCart(product.name, product.default_price.id, product.default_price.unit_amount / 100, quantity, product.metadata.imageUnique))} className={"font-bold w-full text-sm p-2 rounded-full text-center " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100 text-pink-950" : "bg-pink-700 hover:bg-pink-800 text-white")}>add to cart</button>
        </div>
    )
}