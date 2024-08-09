
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
});

export function Footer() {
  return (
    <div className={`text-zinc-200 bg-darkblue p-[100px] ${inconsolata.className}`}>
      <h1 className="text-3xl font-bold">Connect With Us!</h1>
      <div className="h-[25px]"></div>
      <div className="flex">
        <div className="grow">
          <h1 className='text-lg'>@pictmun</h1>
          <h1 className='text-lg'>@PICT Model United Nations</h1>
        </div>
        <div className="flex-none text-right">
          <h1 className='text-lg'>Ph: +123456789</h1>
          <h1 className='text-lg'>+123456789</h1>
        </div>
      </div>
    </div>
  );
}