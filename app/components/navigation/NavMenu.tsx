import Link from 'next/link';
import Image from 'next/image';

export default function NavMenu({ children }: { children?: React.ReactNode }) {
  return <ul className='flex justify-start items-center'>{children}</ul>;
}
