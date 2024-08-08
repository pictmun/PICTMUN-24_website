// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-70 backdrop-blur-md py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="relative w-14 h-14">
          <Image
            src="/images/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <ul className="flex space-x-7 text-base font-medium text-gray-700">
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
