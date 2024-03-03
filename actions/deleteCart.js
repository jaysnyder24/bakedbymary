'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
 
export async function deleteCart() {

    "use server";

    cookies().delete('cart');


}