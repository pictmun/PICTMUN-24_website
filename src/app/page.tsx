
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`snap-mandatory snap-y ${inconsolata.className}`}>
      <div className="h-screen bg-darkblue text-center content-center text-white">
        <h1 className="font-bold text-8xl">PICTMUN</h1>
        <div className="h-[10px]"></div>
        <h1 className="text-2xl text-zinc-400">Think, Discuss, Prosper</h1>
        <div className="h-[25px]"></div>
        <div>
          <button className="px-[55px] py-[12px] text-md text-yellow-300 rounded-md bg-zinc-950 bg-opacity-60 mr-[12.5px] border-[1.5px] border-solid border-zinc-950 border-opacity-100 shadow-lg">Register</button>
          <button className="px-[55px] py-[12px] text-md rounded-md bg-zinc-950 bg-opacity-60 ml-[12.5px] border-[1.5px] border-solid border-zinc-950 border-opacity-100 shadow-lg">Events</button>
        </div>
      </div>

      <div className="lg:h-screen text-zinc-900 bg-lightblue p-[50px] lg:py-[100px] lg:px-[250px] flex flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-[600]">About The Club</h1>
        </div>
        <div className="flex-none h-[50px]"></div>
        <div className="grid grid-cols-2 h-full gap-[50px]">
          <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
            <p className='leading-7 text-lg text-zinc-800'>
              The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.
              <br /><br />
              The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.
            </p>
          </div>
          <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-lg hidden lg:block" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
        </div>
      </div>

      <div className="h-screen text-zinc-200 bg-darkblue py-[100px] px-[250px] flex flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-[600]">Our Newsletter - The Inquisitor</h1>
        </div>
        <div className="flex-none h-[50px]"></div>
        <div className="grid grid-cols-2 h-full gap-[50px]">
          <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-lg" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className="col-span-1">
            <p className='leading-7 text-lg text-zinc-300'>The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.</p>
          </div>
        </div>
      </div>

      <div className="h-screen text-zinc-950 bg-lightblue py-[100px] px-[250px] flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-[600]">Highlights</h1>
        </div>
        <div className="flex-none h-[75px]"></div>
      </div>
    </div>
  );
}
