'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
 
export async function addToCart(formData) {

    "use server";

    const cart = cookies().has('cart') ? JSON.parse(cookies().get('cart').value) : 0;
    const path = cookies().has('cart') ? cookies().get('cart').path : "";

    const product = JSON.parse(formData.get('product'));
    const quantity = Number(formData.get('quantity'));
    product.quantity = quantity;

    const matchedProduct = cookies().has('cart') ? cart.filter(item => item.id === product.id) : 0;

    if (matchedProduct.length > 0) {

        const matchIndex = cart.findIndex(item => item.id === product.id);
        cart[matchIndex] = product;
        cookies().set('cart', JSON.stringify(cart));
        revalidatePath(path);

    } else if (matchedProduct.length === 0 && cookies().has('cart')) {

        cart.push(product);
        cookies().set('cart', JSON.stringify(cart));
        revalidatePath(path);

    } else {

        cookies().set('cart', JSON.stringify([product]));
        revalidatePath(path);

    }

    console.log(cart);
}