"use client"

import { cookies } from "next/headers";
import Nav from "../nav";

import { deleteCart } from "../../actions/deleteCart";

export default async function Cart () {

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            <Nav />
            <main className="flex flex-row justify-center items-start w-full px-14 pt-14 h-full">
                <div className="flex flex-col justify-center items-center w-auto h-auto space-y-10 p-10 ring-1 ring-pink-200 shadow-md shadow-pink-200 rounded-xl">
                    <p>This will say whether you have things in your cart or not.</p> {/* This will be a conditional based on the cart context */}
                    <form action={deleteCart}>
                        <button type="submit">delete</button>
                    </form>

                </div>
            </main>
        </div>
    )
}