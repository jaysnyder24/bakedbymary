'use server'

import { cookies } from "next/headers";
 
export async function getCart() {

    "use server";

    const cart = cookies().has('cart') ? cookies().get('cart') : "";

    console.log(cart);


}