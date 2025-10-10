import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function NavItem({
  targetText,
  targetHref,
  children,
  icon,
}: {
  targetText?: string;
  targetHref: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <li className='text-black font-poppins font-medium group relative overflow-visible cursor-pointer'>
      <Link
        href={targetHref}
        className='gap-1 w-full h-full flex justify-center items-center p-3 decoration-0 hover:decoration-1 hover:underline underline-offset-4 decoration-pink-700 transition-all duration-300'
      >
        {targetText} {icon}
        {children && (
          <ChevronDown className='text-pink-700 group-hover:-rotate-90 transition-transform duration-300 h-4 w-4' />
        )}
      </Link>
      {children && (
        <div className='absolute h-auto w-auto max-h-0 group-hover:max-h-[300px] z-0 group-hover:z-10 opacity-0 group-hover:opacity-100 top-full -left-5'>
          <div className='w-auto h-auto overflow-hidden px-5 pb-5 pt-2'>
            <div className='opacity-0 flex flex-col h-auto max-h-0 group-hover:max-h-[300px] w-auto p-5 justify-start items-start rounded-lg overflow-hidden text-black/0 group-hover:text-black/100 group-hover:opacity-100 -translate-y-full group-hover:translate-y-0 transition-all duration-300 delay-100 bg-white shadow '>
              {children}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
