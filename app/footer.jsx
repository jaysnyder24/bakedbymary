import { FacebookIcon, Heart, InstagramIcon, Search, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer () {

    return (
        <footer className="font-poppins text-lg text-black hidden md:flex flex-row justify-center items-start w-full h-auto mx-auto px-14 py-5 pt-5 bg-repeat" style={{backgroundImage: "url('/images/tileLight.png')"}}>
            <div className="flex flex-row justify-between items-center py-2 px-5 w-full max-w-[1400px] mx-auto rounded-full">
                <div className="flex flex-row justify-start items-center space-x-5">
                    <Link href={"/"} className="bg-pink-600 hover:bg-pink-700 w-14 h-14 rounded-full flex flex-row justify-center items-center transition-colors duration-300"><Image src="/images/logo.svg" className="fill-white stroke-white text-white" width={32} height={32} alt="baked by mary cookies logo" /></Link>
                    <Link href={"/cookies"} className="px-2 py-1 text-pink-600 hover:text-pink-700 font-poppins font-semibold underline-offset-8 decoration-4 transition-all duration-300">cookies</Link>
                    <Link href={"/about-us"} className="px-2 py-1 text-pink-600 hover:text-pink-700 font-poppins font-semibold underline-offset-8 decoration-4 transition-all duration-300">about us</Link>

                </div>
                <div className="flex flex-row justify-end items-center space-x-5">
                    <Link href={"https://www.facebook.com/bakedbymarycookies"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4"><FacebookIcon className="fill-pink-600 hover:fill-pink-700 stroke-none" size={28} /></Link>
                    <Link href={"https://www.instagram.com/bakedbymarycookies"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4"><InstagramIcon className="stroke-pink-600 hover:stroke-pink-700" size={28} color="rgb(219, 39, 119, 0)" /></Link>
                </div>
            </div>
        </footer>
    )
}