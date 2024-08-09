
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${inconsolata.className} overflow-x-hidden overflow-y-auto`}>
      <div className="h-screen bg-darkblue text-center content-center text-white">
        <h1 className="font-bold text-5xl lg:text-8xl">PICTMUN</h1>
        <div className="h-[10px]"></div>
        <h1 className="text-xl lg:text-2xl text-zinc-400">Think, Discuss, Prosper</h1>
        <div className="h-[25px]"></div>
        <div>
          <button className="px-[55px] py-[12px] text-md text-yellow-300 rounded-md bg-zinc-950 bg-opacity-60 md:mr-[12.5px] border-[1.5px] border-solid border-zinc-950 border-opacity-100 shadow-lg">Register</button>
          <div className='md:hidden h-[15px]' />
          <button className="px-[55px] py-[12px] text-md rounded-md bg-zinc-950 bg-opacity-60 md:ml-[12.5px] border-[1.5px] border-solid border-zinc-950 border-opacity-100 shadow-lg">Events</button>
        </div>
      </div>

      <div className="lg:h-screen text-zinc-900 bg-lightblue p-[50px] lg:py-[100px] lg:px-[250px] flex flex-col">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-[600]">About The Club</h1>
        </div>
        <div className="flex-none h-[30px] lg:h-[50px]"></div>
        <div className="grid grid-cols-2 h-full gap-[50px]">
          <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
            <p className='leading-7 text-md lg:text-lg text-zinc-800'>
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

      <div className="lg:h-screen text-zinc-200 bg-darkblue p-[50px] lg:py-[100px] lg:px-[250px] flex flex-col">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-[600]">Our Newsletter - The Inquisitor</h1>
        </div>
        <div className="flex-none h-[30px] lg:h-[50px]"></div>
        <div className="grid grid-cols-2 h-full gap-[50px]">
          <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-lg hidden lg:block" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
            <p className='leading-7 text-md lg:text-lg text-zinc-300'>
              The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy.
              <br /><br />
              We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.
            </p>
          </div>
        </div>

        <div className="block lg:hidden bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] md:h-[400px] mt-[50px]" style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
      </div>

      <div className="relative lg:h-screen text-zinc-900 bg-lightblue p-[50px] lg:py-[100px] lg:px-[250px] flex flex-col">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-[600]">Highlights</h1>
        </div>
        <div className="flex-none h-[30px] lg:h-[50px]"></div>
        <div className='block lg:hidden'>
          <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] md:h-[400px] my-[10px]" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] md:h-[400px] my-[10px]" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] md:h-[400px] my-[10px]" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
        </div>
        <div className='hidden lg:block'>
          <div className='flex'>
            <div className='grow'></div>
            <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-[600px] h-[400px]" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div>
            <div className='w-[20px]'></div>
            <div className="bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-[600px] h-[400px]" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div>
            <div className='grow'></div>
          </div>
          <div className='absolute top-[450px] left-0 right-0 z-50 flex'>
            <div className="grow"></div>
            <div className="bg-zinc-900 bg-opacity-30 w-[600px] h-[400px] rounded-md shadow-lg" style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div>
            <div className="grow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
