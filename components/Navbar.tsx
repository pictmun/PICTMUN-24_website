'use client'
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { link } from "fs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks=[{
    name:"Home",
    link:"/"
  },
{
  name:"About",
  link:"/Aboutus"
},
{
  name:"Events",
  link:"/Events"
},
{
  name:"Inquisitor",
  link:"/Inquisitor"
},
{
  name:"Gallery",
  link:"/Gallery"
},
{
  name:'Teams',
  link:'/Teams'
}
]
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-darkblue fixed top-0 left-0 right-0 py-2 z-30">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"} className="relative w-14 h-14">
          <Image
            className="pl-[10px] pt-[10px]"
            src="/images/golden-logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
        {/* Website navbar */}
        <ul className="md:flex hidden space-x-7 text-base font-medium text-white">
          {navLinks.map((link)=>(
            <li className='hover:text-skin' key={link.name}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        
        </ul>
        {/* Mobile navbar */}
        <div
          className={`fixed top-0 right-0 w-[300px] h-screen bg-[#ac8846] z-60 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <RxCross1 fontSize={36} className="absolute top-4 right-4 cursor-pointer text-white rounded-full hover:opacity-80 font-bold" onClick={toggleMobileMenu}/>
          <ul className='flex flex-col gap-4 py-16 px-5 text-xl text-white font-medium'>
            {navLinks.map((link)=>(
              <li className='hover:text-midblue border-b-2 p-2 border-white' key={link.name}>
                <Link onClick={toggleMobileMenu} href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={toggleMobileMenu} className="inline-block md:hidden">
          <RiMenu3Fill className="text-3xl text-white pt-[5px] pr-[5px]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
