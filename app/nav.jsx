import { ShoppingBagIcon, FacebookIcon, InstagramIcon, HomeIcon, CookieIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartNotice from "./CartNotice";

export default function Nav () {

    return (
        <nav className="z-50 font-poppins text-lg text-black flex flex-row justify-center items-start w-full h-auto max-w-[1400px] mx-auto px-5 md:px-14 pt-0 md:pt-5 fixed bottom-5 md:mt-5 md:relative">
            <div className="flex flex-row justify-between items-center ring-1 bg-repeat md:bg-no-repeat bg-[url('/images/tileDark.png')] md:bg-none ring-pink-700 md:ring-pink-300 md:bg-white md:shadow-2xl md:shadow-pink-100 py-5 px-8 md:py-4 md:px-5 w-full rounded-full relative">
                <Link href={"/"} className="flex md:hidden flex-col justify-start items-center space-y-2"><HomeIcon className="text-white" size={24} /><span className="font-poppins text-white text-sm font-bold">home</span></Link>
                <Link href={"/cookies"} className="flex md:hidden flex-col justify-start items-center space-y-2"><CookieIcon className="text-white md:hidden" size={24} /><span className="font-poppins text-white text-sm font-bold">cookies</span></Link>
                <div className="hidden md:flex flex-row justify-start items-center space-x-5">
                    <Link href={"/cookies"} className="px-2 py-1 hover:text-pink-400 transition-color duration-300">cookies</Link>
                    <Link href={"/about-us"} className="px-2 py-1 hover:text-pink-400 transition-color duration-300">about us</Link>
                </div>
                <Link href={"/"} className="bg-pink-600 hover:bg-pink-700 w-14 h-14 rounded-full hidden md:flex flex-row justify-center items-center transition-colors duration-300 absolute top-auto bottom-auto mx-auto inset-x-0"><Image src="/images/logo.svg" className="fill-white stroke-white text-white" width={32} height={32} alt="baked by mary cookies logo" /></Link>
                <div className="flex flex-row justify-end items-center space-x-5">
                    <Link href={"https://www.facebook.com/bakedbymarycookies"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4 hidden md:flex"><FacebookIcon className="fill-black hover:fill-pink-400 stroke-none transition-colors duration-300" size={24} /></Link>
                    <Link href={"https://www.instagram.com/bakedbymarycookies"} className="px-2 py-1 no-underline hover:underline decoration-pink-400 underline-offset-8 decoration-4 hidden md:flex"><InstagramIcon className="stroke-black hover:stroke-pink-400 transition-colors duration-300" size={24} /></Link>

                    <Link href={"/cart"} className="relative group flex flex-col justify-start items-center space-y-2"><ShoppingBagIcon className="md:hover:text-pink-400 md:text-black text-white transition-color duration-300" size={24} />
                        <span className="flex md:hidden font-poppins text-white text-sm font-bold">cart</span>
                        <CartNotice />
                    </Link>
                </div>
            </div>
        </nav>
    )
}