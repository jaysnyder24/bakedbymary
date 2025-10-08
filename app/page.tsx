import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-20 py-2'>
      <h1 className='max-w-6xl'>
        This is a Hello World to review to see if the nav overlaps
      </h1>
      <div className='flex w-full'>
        <div className='bg-pink-light-sm bg-repeat w-1/3 h-screen'></div>
        <div className='bg-pink-light-md bg-repeat w-1/3 h-screen'></div>
        <div className='bg-pink-light-lg bg-repeat w-1/3 h-screen'></div>
      </div>
    </main>
  );
}
