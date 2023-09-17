"use client"

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { addToCart } from "../actions/addToCart";

export default function AddToCart (props) {

    const product = props.item;

    const [quantity, setQuantity] = useState(1);

    return (
        <form className={"flex flex-col justify-start items-start space-y-4 transition-all duration-600 overflow-hidden " + (props.delay ? "opacity-0 h-0 -translate-y-10 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-0" : "")} action={addToCart}>
            <div className="flex flex-row justify-between items-center space-x-2">
                <input type="hidden" value={JSON.stringify(product)} name="product" />
                <button type="button" onClick={() => setQuantity(prevQuantity => prevQuantity - 1)} disabled={quantity === 0 ? true : false} className={"p-2 rounded-full " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100" : "bg-pink-700 hover:bg-pink-800")}><MinusIcon color={props.theme === "light" ? "#500724" : "white"} size={16} /></button>
                <input name="quantity" type="number" className={"w-10 bg-transparent text-center " + (props.theme === "light" ? "text-white placeholder-white" : "text-pink-950 placeholder-pink-950")} defaultValue={quantity}></input>
                <button type="button" onClick={() => setQuantity(prevQuantity => prevQuantity + 1)} className={"p-2 rounded-full " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100" : "bg-pink-700 hover:bg-pink-800")}><PlusIcon color={props.theme === "light" ? "#500724" : "white"} size={16} /></button>
            </div>
            <button type="submit" disabled={quantity === 0 ? true : false} className={"font-bold w-full text-sm p-2 rounded-full " + (props.theme === "light" ? "bg-white opacity-90 hover:opacity-100 text-pink-950" : "bg-pink-700 hover:bg-pink-800 text-white")}>add to cart</button>
        </form>
    )
}