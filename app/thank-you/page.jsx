import { FacebookIcon, InstagramIcon, MailIcon } from 'lucide-react';
import ImageSelector from '../cookies/[slug]/ImageSelector';
import Link from 'next/link';

export const metadata = {
  title: 'Special Order Confirmation | Baked By Mary',
  description: "Thank you for your order request! We'll be in touch shortly.",
  metadataBase: new URL('https://www.bakedbymary.com'),
  alternates: {
    canonical: '/thank-you',
  },
};

export default async function ThankYouPage() {
  return (
    <div className='mx-auto w-full max-w-[1400px]'>
      <main className='flex flex-row justify-center items-start w-full p-14 h-[90vh] space-x-14 relative'>
        <ImageSelector
          image={'mary'}
          name={'cookie.name'}
          slug={'cookie.metadata.slug'}
          breadcrumb={false}
        />
        <div className=' w-2/3 h-auto flex flex-col space-y-8'>
          <div className='w-full flex flex-col justify-start items-start space-y-5'>
            <h1 className='font-bold font-playfair text-6xl text-pink-950'>
              Thank You For Your Order Request
            </h1>
            <div className='w-full font-medium flex flex-row justify-start items-center space-x-5'>
              <Link href='https://www.instagram.com/bakedbymarycookies'>
                <InstagramIcon
                  className='stroke-pink-600 hover:stroke-pink-700 transition-colors duration-300'
                  size={28}
                />
              </Link>
              <Link href='https://www.facebook.com/bakedbymarycookies'>
                <FacebookIcon
                  className='stroke-none fill-pink-600 hover:fill-pink-700 transition-colors duration-300'
                  size={28}
                />
              </Link>
              <Link href='mailto:mary@bakedbymary.com'>
                <MailIcon
                  className='stroke-pink-600 hover:stroke-pink-700 transition-colors duration-300'
                  size={28}
                />
              </Link>
            </div>
          </div>
          <p className='w-full font-poppins text-lg'>
            We'll be in touch shortly!
          </p>
        </div>
      </main>
    </div>
  );
}
