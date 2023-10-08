import { FacebookIcon, InstagramIcon, MailIcon } from 'lucide-react';
import ImageSelector from '../cookies/[slug]/ImageSelector';
import Link from 'next/link';

export default async function AboutUs () {

    return (
        <div className="mx-auto w-full max-w-[1400px]">
            <main className="flex flex-row justify-center items-start w-full p-14 h-[90vh] space-x-14 relative">
                <ImageSelector image={"mary"} name={"cookie.name"} slug={"cookie.metadata.slug"} breadcrumb={false} />
                <div className=" w-2/3 h-auto flex flex-col space-y-8">
                    <div className="w-full flex flex-col justify-start items-start space-y-5">
                        <h1 className="font-bold font-playfair text-6xl text-pink-950">About Mary & The Snyders</h1>
                        <div className="w-full font-medium flex flex-row justify-start items-center space-x-5">
                            <Link href="https://www.instagram.com/bakedbymarycookies"><InstagramIcon className='stroke-pink-600 hover:stroke-pink-700 transition-colors duration-300' size={28} /></Link>
                            <Link href="https://www.facebook.com/bakedbymarycookies"><FacebookIcon className='stroke-none fill-pink-600 hover:fill-pink-700 transition-colors duration-300' size={28} /></Link>
                            <Link href="mailto:mary@bakedbymary.com"><MailIcon className='stroke-pink-600 hover:stroke-pink-700 transition-colors duration-300' size={28} /></Link>
                        </div>
                    </div>
                    <p className='w-full font-poppins text-lg'>Mary's mother instilled a love for desserts and an even bigger heart for seeing others take joy in her passions. Whether it was providing sweets for Thanksgiving dinner or baked goods for a school fundraiser, Mary's mom showed her that gift that's shared is a gift well-used. <br /><br />

                    Another key inspiration for Mary was her grandmother, Ruth, who she remembers watching work her magic in the kitchen for hours making treats for everyone at the family gathering. Ruth, like Colette, showed Mary that baking can bring people together like few things can. <br /><br />

                    When she isn't baking, Mary loves spending time at her full-time job as a stay-at-home mom for her three kids and her husband, Jay. The kids love "helping" make Mary's creative confections and Jay enjoys his role in the company as Quality Control Specialist.</p>
                </div>
            </main>
        </div>
    )
}