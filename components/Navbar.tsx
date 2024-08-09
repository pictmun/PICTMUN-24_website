// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-transparent bg-opacity-70 backdrop-blur-md py-2 fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="relative w-14 h-14">
          <Image
            src="/images/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <ul className="flex space-x-7 text-base font-medium text-white">
          <li>
            <Link href="/">Home
            </Link>
          </li>
          <li>
            <Link href="/Aboutus">About
            </Link>
          </li>
          <li>
            <Link href="/Events">Events
            </Link>
          </li>
          <li>
            <Link href="/Inquisitor">Inquisitor
            </Link>
          </li>
          <li>
            <Link href="/Team">Team
            </Link>
          </li>
          <li>
            <Link href="/Gallery">Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
