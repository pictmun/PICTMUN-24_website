'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function Home() {
  const highlights = [
  {
    id: 1,
    title: "Highlight 1",
    description: "This is the first highlight.",
    image: "https://via.placeholder.com/600x300", // Replace with actual image
  },
  {
    id: 2,
    title: "Highlight 2",
    description: "This is the second highlight.",
    image: "https://via.placeholder.com/600x300", // Replace with actual image
  },
  {
    id: 3,
    title: "Highlight 3",
    description: "This is the third highlight.",
    image: "https://via.placeholder.com/600x300", // Replace with actual image
  },
{
    id: 3,
    title: "Highlight 3",
    description: "This is the third highlight.",
    image: "https://via.placeholder.com/600x300", // Replace with actual image
  },]
  return (
    <div className={` overflow-x-hidden overflow-y-auto`}>
      <div className="h-screen bg-darkblue text-white relative">
        <img src="/images/home-bg.png" alt="hero-banner" className='opacity-40 absolute top-0 left-0 right-0 bottom-0 z-0 w-full h-full object-contain scale-75' />
        <div className='absolute left-0 right-0 top-0 bottom-0 text-center content-center'>
          <h1 className="font-bold text-5xl lg:text-8xl">PICTMUN</h1>
          <div className="h-[10px]"></div>
          <h1 className="text-2xl lg:text-2xl text-zinc-400">Think, Discuss, Prosper</h1>
          <div className="h-[25px]"></div>
          <div>
            <Link href="/">
            <button className="px-[55px] py-[12px] text-md text-yellow-300 rounded-md hover:scale-105 transition-all duration-300 bg-zinc-950 bg-opacity-60 md:mr-[12.5px] border-[1.5px] border-solid border-zinc-950 border-opacity-100 shadow-lg">Register</button>
            </Link>
            <div className='md:hidden h-[15px]' />
            <Link href="/Events">
            <button className="px-[55px] py-[12px] text-md rounded-md bg-zinc-950 bg-opacity-60 hover:scale-105 transition-all duration-300 md:ml-[12.5px] border-[1.5px] border-solid border-zinc-950 border-opacity-100 shadow-lg">Events</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-darkblue'>
      <div className="relative lg:h-screen text-zinc-200 bg-white bg-opacity-25 p-[50px] lg:py-[100px] lg:px-[250px] flex flex-col">
       
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-[600]">About the Club</h1>
        </div>
        <div className="flex-none h-[30px] lg:h-[50px]"></div>
        <div className="grid grid-cols-2 h-full gap-[75px]">
          
          <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
            <div className='w-full h-full flex flex-col'>
              <div className="grow"></div>
              <p className='leading-7 text-base lg:text-base text-[#ADB8BB]'>
                The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.
              </p>
              <div className="grow"></div>
            </div>
          </div>
          <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-lg hidden lg:block" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
        </div>
<div className='hidden lg:block'>
        <div className="block lg:hidden bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] md:h-[400px] mt-[50px]" style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
</div>
      </div>
      </div>

      <div className="relative lg:h-screen text-zinc-200 bg-darkblue p-[50px] lg:py-[100px] lg:px-[250px] flex flex-col">
        <img src="/images/bg-pattern.png"  alt="" className="z-[0] hidden lg:block absolute w-[900px] opacity-80 overflow-hidden top-[-5%] left-[-20%] rotate-[5deg]"/>

        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-[600]">Our Newsletter - The Inquisitor</h1>
        </div>
        <div className="flex-none h-[30px] lg:h-[50px]"></div>
        <div className="grid grid-cols-2 h-full gap-[75px]">
          <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-lg hidden lg:block" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
            <div className='w-full h-full flex flex-col'>
              <div className="grow"></div>
              <p className='leading-7 text-base lg:text-base text-[#ADB8BB]'>
                The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.
              </p>
              <div className="grow"></div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-full h-[200px] md:h-[400px] mt-[50px]" style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1723117509226-9191b2c0f703?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
      </div>
      {/* Highlights Section */}
<div className='bg-darkblue'>

      <div className="bg-white bg-opacity-25 py-[50px] lg:py-[100px] px-[50px] lg:px-[250px] text-white">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-8">Highlights</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          loop={true}
        >
          {highlights.map((highlight) => (
            <SwiperSlide key={highlight.id}>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img src={highlight.image} alt={highlight.title} className="w-full h-64 object-cover" />
                
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}
          <div className="swiper-button-next hidden lg:block"></div>
          <div className="swiper-button-prev hidden lg:block"></div>
        </Swiper>
      </div>
</div>


  

      
    </div>
  );
}
