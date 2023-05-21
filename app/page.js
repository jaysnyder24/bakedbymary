import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/solid";

export default function Homepage () {
    return (
        <>
            <nav className="w-full px-14">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center py-7">
                        <div className="h-12 w-12 rounded-full bg-pink-500 flex flex-row justify-center items-center mr-14 hover:bg-pink-600 transition-all">
                            <Image src="/images/logo.svg" height={20} width={26} alt="baked by mary cookies logo" priority/>
                        </div>
                        <div className="flex flex-row justify-start items-center space-x-5">
                            <span className="font-semibold leading-none text-lg">cookies</span>
                            <span className="font-semibold leading-none text-lg">catering</span>
                            <span className="font-semibold leading-none text-lg">about</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end items-center">
                        <div className="flex flex-row justify-center items-center h-12 w-12 group">
                            <ShoppingCartIcon className=" h-7 w-7 text-pink-500 group-hover:text-pink-600 transition-all" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}