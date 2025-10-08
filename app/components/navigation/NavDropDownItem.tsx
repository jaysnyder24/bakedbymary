import Link from 'next/link';

export default function NavDropDownItem({
  targetText,
  targetHref,
  hoverText,
}: {
  targetText: string;
  targetHref: string;
  hoverText?: string;
}) {
  return (
    <Link
      href={targetHref}
      className='w-full flex flex-col justify-start items-start flex-wrap group/party font-medium p-3 text-black hover:text-white bg-pink-700/0 hover:bg-pink-700/100 gap-0 transition-all duration-300 rounded'
    >
      {targetText}
      {hoverText && (
        <span className='group-hover/party:max-h-20 w-full flex-wrap font-light text-xs py-0 group-hover/party:py-2 max-h-0 overflow-hidden text-white/0 group-hover/party:text-white/100 -translate-y-4 group-hover/party:translate-y-0 transition-all duration-300'>
          {hoverText}
        </span>
      )}
    </Link>
  );
}
