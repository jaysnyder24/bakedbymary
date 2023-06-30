import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import CookieSelector from "./CookieSelector";

export default function Homepage () {

    const cookies = 
        [
            {
                name: "Caramel, Coconut & Chocolate",
                price: 10,
                description: "Dolor veniam cupidatat voluptate magna in elit qui do qui magna cupidatat. Ad laboris excepteur in sint quis pariatur consequat sint eu reprehenderit ad eu incididunt occaecat. Et esse Lorem enim commodo cillum elit dolore excepteur qui aliqua voluptate quis. Duis pariatur ut amet do mollit labore mollit proident irure mollit ipsum sit duis quis. Irure sit pariatur mollit sunt. Esse deserunt sit eu cillum ea anim consequat id occaecat esse reprehenderit et.",
                imageUnique: "caramelCoconut"
            },
            {
                name: "Caramel, Coconut & Chocolate",
                price: 10,
                description: "Dolor veniam cupidatat voluptate magna in elit qui do qui magna cupidatat. Ad laboris excepteur in sint quis pariatur consequat sint eu reprehenderit ad eu incididunt occaecat. Et esse Lorem enim commodo cillum elit dolore excepteur qui aliqua voluptate quis. Duis pariatur ut amet do mollit labore mollit proident irure mollit ipsum sit duis quis. Irure sit pariatur mollit sunt. Esse deserunt sit eu cillum ea anim consequat id occaecat esse reprehenderit et.",
                imageUnique: "caramelCoconut"
                },
            {
                name: "Caramel, Coconut & Chocolate",
                price: 10,
                description: "Dolor veniam cupidatat voluptate magna in elit qui do qui magna cupidatat. Ad laboris excepteur in sint quis pariatur consequat sint eu reprehenderit ad eu incididunt occaecat. Et esse Lorem enim commodo cillum elit dolore excepteur qui aliqua voluptate quis. Duis pariatur ut amet do mollit labore mollit proident irure mollit ipsum sit duis quis. Irure sit pariatur mollit sunt. Esse deserunt sit eu cillum ea anim consequat id occaecat esse reprehenderit et.",
                imageUnique: "caramelCoconut"
            },
            {
                name: "Caramel, Coconut & Chocolate",
                price: 10,
                description: "Dolor veniam cupidatat voluptate magna in elit qui do qui magna cupidatat. Ad laboris excepteur in sint quis pariatur consequat sint eu reprehenderit ad eu incididunt occaecat. Et esse Lorem enim commodo cillum elit dolore excepteur qui aliqua voluptate quis. Duis pariatur ut amet do mollit labore mollit proident irure mollit ipsum sit duis quis. Irure sit pariatur mollit sunt. Esse deserunt sit eu cillum ea anim consequat id occaecat esse reprehenderit et.",
                imageUnique: "caramelCoconut"
            }
        ];

    return (
        <>
            <div className=" h-screen w-full flex flex-col justify-start items-center">
                <nav className="w-full px-20 overflow-visible relative z-0">
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-center py-7">
                            <Link href="/" className="h-12 w-12 rounded-full bg-pink-500 flex flex-row justify-center items-center mr-14 hover:bg-pink-600 relative transition-all">
                                <Image src="/images/logo.svg" height={20} width={26} alt="baked by mary cookies logo" priority/>
                            </Link>
                            <div className="flex flex-row justify-start items-center space-x-5">
                                <span className="font-semibold leading-none text-lg">cookies</span>
                                <span className="font-semibold leading-none text-lg">catering</span>
                                <span className="font-semibold leading-none text-lg">about</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end items-center z-10">
                            <div className="flex flex-row justify-center items-center h-12 w-12 group">
                                <ShoppingCartIcon className=" h-7 w-7 text-pink-500 group-hover:text-pink-600 transition-all" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 aspect-square w-1/4">
                        <Image src="/images/headingCookie.svg" fill priority />
                    </div>
                </nav>
                <main className="h-full w-full relative">
                    <div className="w-full h-full px-20 py-12 flex flex-col justify-start items-center space-y-10">
                        <div className="flex flex-row justify-start items-start w-full">
                            <div className="flex flex-col justify-start items-start shrink w-6/12">
                                <h1 className="text-6xl leading-none font-serif mb-7 font-black">Welcome To Baked By Mary Cookies!</h1>
                                <p className=" text-lg leading-none font-sans">Click the cookies to check out this month’s lineup.</p>
                            </div>
                            <CookieSelector cookies={cookies} />
                        </div>
                        <div className="flex flex-row justify-between items-center w-full h-full space-x-5">
                            <div className="flex flex-row justify-start items-start h-full space-x-5 w-5/12 bg-green-100 shrink">
                                <div className="h-full w-full grow rounded-xl relative">
                                    <Image src="/images/caramelCoconutDefault.jpg" className="object-cover rounded-xl" fill priority />
                                </div>
                                <div className="flex flex-col justify-between items-start space-y-5 h-full w-auto relative">
                                    <div className="h-full aspect-square rounded-xl relative">
                                        <Image src="/images/caramelCoconutDefault.jpg" className="object-cover rounded-xl" fill priority />
                                    </div>
                                    <div className="h-full aspect-square rounded-xl relative">
                                        <Image src="/images/caramelCoconutOne.jpg" className="object-cover rounded-xl" fill priority />
                                    </div>
                                    <div className="h-full aspect-square rounded-xl relative">
                                        <Image src="/images/caramelCoconutTwo.jpg" className="object-cover rounded-xl" fill priority />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-start w-1/2 h-full bg-yellow-100">
                                <div className="w-full">
                                    <h2>Caramel, Coconut & Chocolate</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 aspect-square w-1/6 rotate-180 -z-10">
                        <Image src="/images/headingCookie.svg" fill priority />
                    </div>
                </main>
            </div>
        </>
    )
}