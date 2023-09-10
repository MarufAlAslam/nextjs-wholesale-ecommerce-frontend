import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import logo from "../../src/assets/img/logo.webp";
import Image from "next/image";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";

const Header = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Best Sellers",
      href: "/best-sellers",
    },
    {
      name: "All New Sales",
      href: "/new-sales",
    },
    {
      name: "Buying Guide",
      href: "/buying-guide",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];
  const pathname = usePathname();
  return (
    <>
      <header className="bg-black py-4 text-white">
        <Container maxWidth="xl">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm">Your first order ships FREE</p>
            <p className="text-sm">
              Select Currency{" "}
              <select className="bg-black text-yellow-500 font-bold outline-none shadow-none">
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </p>
          </div>

          <div className="pt-4">
            <div className="flex gap-5 justify-between items-center">
              <div className="md:w-1/2 w-full gap-5 flex md:justify-start justify-between items-center">
                <Link href="/">
                  <Image src={logo} alt="logo" className="w-40" />
                </Link>
                <form action="" className="w-full flex">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="w-full bg-white text-black placeholder:text-gray-400 px-4 font-[300] rounded-0 py-2 outline-none"
                  />
                  <button className="bg-gray-600 px-4 py-2">
                    <FaSearch/>
                  </button>
                </form>
              </div>
              <div className="md:w-1/2 w-full gap-5 flex md:justify-end justify-between items-center">
                <p>
                  Hotline:
                  <Link href="tel:1234567890">1234567890</Link>
                </p>
                <span className="text-white">|</span>
                <Link href="/login" className="text-white">
                  SIGN IN
                </Link>
                <span className="text-white">|</span>
                <Link href="/register" className="text-white">
                  REGISTER
                </Link>
                <span className="text-white">|</span>
                <Link href="/cart" className="text-white">
                  <FaShoppingBasket className="text-3xl mb-2" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <nav className="bg-white py-4">
        <Container maxWidth="xl">
          <div className="flex justify-start items-center gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  className={isActive ? "text-[#D3313D] font-bold" : "text-black"}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
