"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

export interface Props {
  products: object[];
}

export interface Product {
  name: string;
}

export default function InteractiveNavMenu(props: Props) {
  const [focus, setFocus] = useState(0);

  console.log(props.products);

  return (
    <div
      onMouseLeave={() => setFocus(0)}
      className="absolute overflow-hidden group-hover/nav-parent:overflow-visible flex h-0 group-hover/nav-parent:h-auto top-full pt-2 z-[100]"
    >
      <div className="bg-white rounded-lg p-5 ring-0 group-hover/nav-parent:ring-1 ring-stone-100 flex justify-start items-start space-x-5 shadow-none group-hover/nav-parent:shadow-lg opacity-0 -translate-y-4 group-hover/nav-parent:opacity-100 group-hover/nav-parent:translate-y-0 delay-200 transition-all duration-300 ease-in-out">
        <div className="flex flex-col justify-start items-start space-y-3">
          <Link
            href={`#`}
            onMouseOver={() => {
              setFocus(0);
            }}
            className={`bg-repeat ${
              focus == 0
                ? 'bg-[url("/images/tileDark.png")] text-white'
                : "bg-white text-stone-500"
            } hover:bg-[url('/images/tileDark.png')] p-5 rounded-lg space-y-3 flex flex-col justify-start items-start min-w-[260px] group/lineup-cookies`}
          >
            <span className="font-poppins font-bold text-sm group-hover/lineup-cookies:text-white flex justify-start items-center">
              Lineup Cookies
              <ArrowRightIcon className="h-3 w-3 ml-2" />
            </span>
            <span className="font-poppins text-xs group-hover/lineup-cookies:text-white">
              This month’s lineup of curated cookies.
            </span>
          </Link>
          <Link
            href={`#`}
            onMouseOver={() => {
              setFocus(1);
            }}
            className={`bg-repeat ${
              focus == 1
                ? 'bg-[url("/images/tileDark.png")] text-white'
                : "bg-white text-stone-500"
            } hover:bg-[url('/images/tileDark.png')] p-5 rounded-lg space-y-3 flex flex-col justify-start items-start min-w-[260px] group/lineup-cookies`}
          >
            <span className="font-poppins font-bold text-sm group-hover/lineup-cookies:text-white flex justify-start items-center">
              All Cookies
              <ArrowRightIcon className="h-3 w-3 ml-2" />
            </span>
            <span className="font-poppins text-xs group-hover/lineup-cookies:text-white">
              Luxurious list of all our delicious cookies.
            </span>
          </Link>
          <Link
            href={`#`}
            onMouseOver={() => {
              setFocus(2);
            }}
            className={`bg-repeat ${
              focus == 2
                ? 'bg-[url("/images/tileDark.png")] text-white'
                : "bg-white text-stone-500"
            } hover:bg-[url('/images/tileDark.png')] p-5 rounded-lg space-y-3 flex flex-col justify-start items-start min-w-[260px] group/lineup-cookies`}
          >
            <span className="font-poppins font-bold text-sm group-hover/lineup-cookies:text-white flex justify-start items-center">
              Cookie Categories
              <ArrowRightIcon className="h-3 w-3 ml-2" />
            </span>
            <span className="font-poppins text-xs group-hover/lineup-cookies:text-white">
              No what you like but not what you want? Check here!
            </span>
          </Link>
        </div>
        <ul className="grid grid-flow-row grid-cols-6 grid-rows-4 min-w-[600px] h-full flex-wrap gap-5">
          {focus == 0 ? (
            <>
              {props.products.map((product: Product, index) => {
                <li
                  key={index}
                  className="bg-pink-500 col-span-3 row-span-2"
                ></li>;
              })}
              <li className="bg-pink-500 col-span-3 row-span-2">Hello</li>
              <li className="bg-pink-500 col-span-3 row-span-2"></li>
              <li className="bg-pink-500 col-span-3 row-span-2"></li>
              <li className="bg-pink-500 col-span-3 row-span-2"></li>
            </>
          ) : focus == 1 ? (
            <>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
              <li className="bg-pink-500 col-span-2 row-span-1"></li>
            </>
          ) : (
            <>
              <li className="bg-pink-500 col-span-3 row-span-2"></li>
              <li className="bg-pink-500 col-span-3 row-span-2"></li>
              <li className="bg-pink-500 col-span-3 row-span-2"></li>
              <li className="bg-pink-500 col-span-3 row-span-2"></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
