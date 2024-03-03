import {
  ShoppingBagIcon,
  FacebookIcon,
  InstagramIcon,
  HomeIcon,
  CookieIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartNotice from "../../CartNotice";
import InteractiveNavMenu from "./InteractiveNavMenu";

async function getProducts() {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const products = await stripe.products.list({
    active: true,
    expand: ["data.default_price"],
    limit: 100,
  });

  return products.data;
}

export default async function Nav() {
  const products = await getProducts();

  const lineupProducts = products.filter((item) => {
    return item.metadata.available === "lineup";
  });

  console.log(lineupProducts);

  const assortedProduct = lineupProducts.pop();

  const specialProducts = products.filter((item) => {
    return item.metadata.available === "special";
  });

  const limitedProducts = products.filter((item) => {
    return item.metadata.available === "limited";
  });

  const saleProducts = products.filter((item) => {
    return item.metadata.available !== "other";
  });

  return (
    <nav className="w-full px-10 md:px-16 flex justify-center items-center">
      <section className="w-full max-w-7xl flex justify-between items-center py-7">
        <ul className="flex justify-start items-center">
          <li className="mr-14">
            <Link
              href={`/`}
              className="rounded-full bg-pink-500 hover:bg-pink-700 h-12 w-12 flex justify-center items-center transition-colors duration-300 ease-in-out"
            >
              <Image
                src={`/images/logo.svg`}
                className="fill-white stroke-white text-white"
                width={26}
                alt="baked by mary cookies logo"
                height={20}
              ></Image>
            </Link>
          </li>
          <li className="mr-7 relative group/nav-parent">
            <Link
              href={`/cookies`}
              className="font-poppins font-semibold text-black flex justify-start items-center px-2 py-2"
            >
              cookies
              <ChevronDownIcon className="text-pink-500 h-4 w-4 ml-1 group-hover/nav-parent:-rotate-180 transition-all duration-300 ease-in-out" />
            </Link>
            <InteractiveNavMenu products={lineupProducts} />
          </li>
          <li className="mr-7 relative group/nav-parent">
            <Link
              href={`/catering`}
              className="font-poppins font-semibold text-black flex justify-start items-center px-2 py-2"
            >
              catering
              <ChevronDownIcon className="text-pink-500 h-4 w-4 ml-1 group-hover/nav-parent:-rotate-180 transition-all duration-300 ease-in-out" />
            </Link>
            <div className="absolute overflow-hidden group-hover/nav-parent:overflow-visible flex h-0 group-hover/nav-parent:h-auto top-full pt-2 z-[100]">
              <div className="bg-white rounded-lg p-5 ring-0 group-hover/nav-parent:ring-1 ring-stone-100 flex justify-start items-start space-x-5 shadow-none group-hover/nav-parent:shadow-lg opacity-0 -translate-y-4 group-hover/nav-parent:opacity-100 group-hover/nav-parent:translate-y-0 delay-200 transition-all duration-300 ease-in-out">
                <div className="flex flex-col justify-start items-start space-y-3">
                  <Link
                    href={`#`}
                    className="bg-repeat bg-white hover:bg-[url('/images/tileDark.png')] p-5 rounded-lg space-y-3 flex flex-col justify-start items-start min-w-[260px] group/lineup-cookies transition-all duration-300 ease-in-out"
                  >
                    <span className="font-poppins font-bold text-stone-500 text-sm group-hover/lineup-cookies:text-white flex justify-start items-center">
                      Special Orders
                      <ArrowRightIcon className="h-3 w-3 ml-2" />
                    </span>
                    <span className="font-poppins text-stone-500 text-xs group-hover/lineup-cookies:text-white">
                      Not interested in this month’s cookies? No problem!
                    </span>
                  </Link>
                  <Link
                    href={`#`}
                    className="bg-repeat bg-white hover:bg-[url('/images/tileDark.png')] p-5 rounded-lg space-y-3 flex flex-col justify-start items-start min-w-[260px] group/lineup-cookies transition-all duration-300 ease-in-out"
                  >
                    <span className="font-poppins font-bold text-stone-500 text-sm group-hover/lineup-cookies:text-white flex justify-start items-center">
                      Weddings & Receptions
                      <ArrowRightIcon className="h-3 w-3 ml-2" />
                    </span>
                    <span className="font-poppins text-stone-500 text-xs group-hover/lineup-cookies:text-white">
                      We’d love to put sprinkles on top of your special day.
                    </span>
                  </Link>
                  <Link
                    href={`#`}
                    className="bg-repeat bg-white hover:bg-[url('/images/tileDark.png')] p-5 rounded-lg space-y-3 flex flex-col justify-start items-start min-w-[260px] group/lineup-cookies transition-all duration-300 ease-in-out"
                  >
                    <span className="font-poppins font-bold text-stone-500 text-sm group-hover/lineup-cookies:text-white flex justify-start items-center">
                      Corporate Events
                      <ArrowRightIcon className="h-3 w-3 ml-2" />
                    </span>
                    <span className="font-poppins text-stone-500 text-xs group-hover/lineup-cookies:text-white">
                      What’s more fun than charts & graphs? Cookies.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="mr-7">
            <Link
              href={`/about-us`}
              className="font-poppins font-semibold text-black flex justify-start items-center"
            >
              about
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
