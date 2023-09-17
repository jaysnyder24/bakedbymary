import { Heart, Search, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cookies } from "next/headers";

export default function Nav () {

    return (
        <nav className="font-poppins text-lg text-black flex flex-row justify-center items-start w-full h-auto max-w-[1400px] mx-auto px-14 pt-5">
            <div className="flex flex-row justify-between items-center ring-1 ring-pink-300 bg-white shadow-2xl shadow-pink-100 py-2 px-5 w-full rounded-full">
                <div className="flex flex-row justify-start items-center space-x-5">
                    <Link href={"#"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4">Shop</Link>
                    <Link href={"#"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4">About Us</Link>
                    <Link href={"#"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4">Flavors</Link>
                    <Link href={"#"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4">Learn</Link>
                </div>
                <Link href={"/"} className="bg-pink-600 hover:bg-pink-700 w-14 h-14 rounded-full flex flex-row justify-center items-center transition-colors duration-300"><Image src="/images/logo.svg" className="fill-white stroke-white text-white" width={32} height={32} alt="baked by mary cookies logo" /></Link>
                <div className="flex flex-row justify-end items-center space-x-5">
                    <Link href={"#"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4">Our Story</Link>
                    <Link href={"#"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4">Contact</Link>
                    <Link href={"#"} className="px-2 py-1"><Search className="hover:text-pink-400 transition-color duration-300" size={24} /></Link>
                    <Link href={"#"} className="px-2 py-1"><Heart className="hover:text-pink-400 transition-color duration-300" size={24} /></Link>
                    <Link href={"/cart"} className="px-2 py-1 relative group"><ShoppingBagIcon className="hover:text-pink-400 transition-color duration-300" size={24} />
                        <div className={"absolute top-1 right-1 ring-4 ring-white bg-pink-400 rounded-full h-2 w-2 group-hover:bg-pink-700 transition-colors duration-300 " + cookies().has('cart') ? "opacity-100" : "opacity-0"}></div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}