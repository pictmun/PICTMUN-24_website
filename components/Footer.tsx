import { FaMedium } from "react-icons/fa";
import Link from "next/link";
import { GrInstagram, GrLinkedin } from "react-icons/gr";



export function Footer() {
  return (
    <footer className={`text-zinc-200 bg-darkblue p-[50px] lg:px-[100px] lg:py-[35px] flex flex-col`}>
      <h1 className="text-2xl lg:text-2xl font-bold">Connect With Us!</h1>
      <div className="h-[15px] md:h-[25px]"></div>
      <div className="md:flex text-zinc-300">
        <div className="md:grow">
          <div className="flex items-center">
            <GrInstagram />
            <div className="w-[10px]"></div>
            <Link target="_blank" href="https://www.instagram.com/pictmun/" className='text-lg hover:text-skin'>@pictmun</Link>
          </div>
          <div className="flex items-center">
            <GrLinkedin />
            <div className="w-[10px]"></div>
            <Link target="_blank" href="https://www.linkedin.com/company/pict-model-united-nations/mycompany/" className='text-lg hover:text-skin'>@PICT Model United Nations</Link>
          </div>
            <div className="flex items-center">
            <FaMedium />
            <div className="w-[10px]"></div>
            <Link target="_blank" href="https://medium.com/@pictmun" className='text-lg hover:text-skin'>@pictmun</Link>
          </div>
        </div>
        <div className="md:flex-none md:text-right mt-[10px] md:mt-0">
          <h1 className='text-lg'>Nirbhay Shah - <Link target="_blank" href="tel:+917020899506" className='text-lg  hover:text-skin hover:underline'>+917020899506</Link></h1>
          <h1 className='text-lg'>Sholka Shetty - <Link target="_blank" href="tel:+917020899506" className='text-lg hover:text-skin hover:underline'>+918591605958</Link></h1>
        </div>
      </div>
    </footer>
  );
}