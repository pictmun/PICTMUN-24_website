
import { GrInstagram, GrLinkedin } from "react-icons/gr";



export function Footer() {
  return (
    <footer className={`text-zinc-200 bg-darkblue p-[50px] lg:px-[100px] lg:py-[75px] flex flex-col`}>
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
    </footer>
  );
}