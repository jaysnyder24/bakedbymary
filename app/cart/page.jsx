import { cookies } from "next/headers";
import Nav from "../nav";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export default async function Cart () {

    async function deleteCart(formData) {

        "use server"

        cookies().set('cart', '');

    }

    console.log(cookies().has('cart'));

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            <Nav />
            <main className="flex flex-row justify-center items-start w-full px-14 pt-14 h-full">
                <div className="flex flex-col justify-center items-center w-auto h-auto space-y-10 p-10 ring-1 ring-pink-200 shadow-md shadow-pink-200 rounded-xl">
                    {cookies().has('cart') ? <p>Things in your cart.</p> : <p>No items in your cart.</p>}
                    <form action={deleteCart}>
                        <button type="submit">delete</button>
                    </form>

                </div>
            </main>
        </div>
    )
}