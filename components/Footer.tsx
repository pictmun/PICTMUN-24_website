
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
});

export function Footer() {
  return (
    <div className={`text-zinc-200 bg-darkblue p-[50px] lg:p-[100px] flex flex-col ${inconsolata.className}`}>
      <h1 className="text-2xl lg:text-3xl font-bold">Connect With Us!</h1>
      <div className="h-[15px] md:h-[25px]"></div>
      <div className="md:flex text-zinc-300">
        <div className="md:grow">
          <div className="flex items-center">
            <GrInstagram />
            <div className="w-[10px]"></div>
            <h1 className='text-lg'>@pictmun</h1>
          </div>
          <div className="flex items-center">
            <GrLinkedin />
            <div className="w-[10px]"></div>
            <h1 className='text-lg'>@PICT Model United Nations</h1>
          </div>
        </div>
        <div className="md:flex-none md:text-right mt-[10px] md:mt-0">
          <h1 className='text-lg'>Ph: +123456789</h1>
          <h1 className='text-lg'>+123456789</h1>
        </div>
      </div>
    </div>
  );
}