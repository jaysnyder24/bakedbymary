import {
  HeartIcon,
  MailboxIcon,
  ShoppingBasketIcon,
  ArrowRightIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';
import NavMenu from './NavMenu';
import NavDropDownMenu from './NavDropDownMenu';
import NavDropDownItem from './NavDropDownItem';

export default function Nav() {
  return (
    <header className='w-full px-20 flex justify-center items-center'>
      <nav className='w-full flex justify-between items-center max-w-6xl py-4'>
        <div className='flex justify-start items-center gap-6'>
          <Link href={'/'} className='flex justify-start items-center gap-3'>
            <Image
              src={'/logo.svg'}
              alt='Baked By Mary Logo'
              width={40}
              height={40}
            />
            <span className='font-bebas text-3xl text-pink-950'>
              Baked By Mary
            </span>
          </Link>
          <NavMenu>
            <NavItem targetHref='/cookies' targetText='shop'>
              <div className='flex justify-start items-center gap-3 w-[500px] h-full'>
                <Link
                  href='/'
                  className='w-2/5 shrink-0 h-[240px] flex flex-col justify-end items-start overflow-hidden bg-pink-dark-md bg-repeat rounded-md relative'
                >
                  <div className='absolute w-full h-full rounded bg-pink-800/60 group-hover:bg-pink-800/80 transition-colors duration-300'></div>
                  <span className='font-medium z-10 text-white flex justify-start items-center p-3 transition-all duration-300'>
                    See all cookies{' '}
                    <ArrowRightIcon className='w-5 h-5 ml-1 group-hover:ml-2' />
                  </span>
                </Link>
                <div className='w-full shrink h-[240px] bg-blue-100 transition-all duration-300 rounded-md flex justify-center items-center text-black/50 font-medium'>
                  something else
                </div>
              </div>
            </NavItem>
            <NavItem targetHref='/catering' targetText='catering'>
              <NavDropDownMenu>
                <NavDropDownItem
                  targetHref='/catering/parties'
                  targetText='Parties'
                  hoverText='Parties are a great time for everyone involved in it!'
                />
                <NavDropDownItem
                  targetHref='/catering/corporate'
                  targetText='Corporate Events'
                  hoverText='Corporate events are a great way to bring your team together.'
                />
                <NavDropDownItem
                  targetHref='/catering/weddings'
                  targetText='Weddings'
                  hoverText='Weddings are a special day for everyone involved.'
                />
              </NavDropDownMenu>
            </NavItem>
            <NavItem targetHref='/about-us' targetText='about' />
          </NavMenu>
        </div>
        <NavMenu>
          <NavItem
            targetHref='/about-us'
            icon={
              <HeartIcon
                className='text-pink-950
                 group-hover:text-pink-700
                  fill-pink-700/0
                  group-hover:fill-pink-700/100
                  transition-colors
                  duration-300
                  h-6
                  w-6'
              />
            }
          />
          <NavItem
            targetHref='/about-us'
            icon={
              <MailboxIcon
                className='text-pink-950
                  group-hover:text-pink-700
                  transition-colors
                  duration-300
                  h-6
                  w-6'
              />
            }
          />
          <Link
            href={'/cart'}
            className='bg-pink-dark-sm ml-2 rounded-full group p-2 h-full aspect-square relative transition-colors duration-300 hover:bg-pink-800 flex justify-center items-center'
          >
            <div className='absolute w-full h-full rounded-full bg-pink-950/0 group-hover:bg-pink-950/20 transition-colors duration-300'></div>
            <ShoppingBasketIcon className='h-6 w-6 text-white z-10' />
            <span className='w-2 h-2 ring-white ring-4 bg-pink-400 absolute top-0 right-0 rounded-full'></span>
          </Link>
        </NavMenu>
      </nav>
    </header>
  );
}
