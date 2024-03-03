'use client'

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function AdjustCart (props) {

    const product = props.item;

    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext);    

    return (
        <div className={"flex justify-start transition-all duration-600 overflow-hidden " + (props.delay ? "md:opacity-0 md:h-0 h-auto opacity-100 md:-translate-y-10 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-0 " : "") + (props.orientation === "row" ? "flex-row space-x-5 items-center" : "flex-col space-y-2 items-start")}>
            <div className="flex flex-row justify-between items-center">
                <button onClick={() => (setQuantity(prevQuantity => prevQuantity - 1))} disabled={quantity === 0 ? true : false} className={"p-2 rounded-full " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100" : "bg-pink-700 hover:bg-pink-800")}><MinusIcon color={props.theme === "light" ? "#500724" : "white"} size={16} /></button>
                <span className={"font-bold w-10 h-full text-center font-poppins " + (props.theme === "light" ? "text-white" : "text-pink-950")}>{quantity}</span>
                <button onClick={() => (setQuantity(prevQuantity => prevQuantity + 1))} className={"p-2 rounded-full " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100" : "bg-pink-700 hover:bg-pink-800")}><PlusIcon color={props.theme === "light" ? "#500724" : "white"} size={16} /></button>
            </div>
            <button disabled={quantity === 0 ? true : false} onClick={() => (addToCart(product.name, product.default_price.id, product.default_price.unit_amount / 100, quantity, product.metadata.imageUnique))} className={"font-bold text-sm py-2 px-4 rounded-full text-center " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100 text-pink-950 " : "bg-pink-700 hover:bg-pink-800 text-white ") + (props.orientation === "row" ? "w-auto" : "w-full")}>add to cart</button>
        </div>
    )
}