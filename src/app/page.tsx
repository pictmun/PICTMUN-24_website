'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function Home() {
  const inquisitors = [
  {
    id: 1,
    title: "Inquisitor 16",
    description: "This is the 16 Inquisitor.",
    image: "images/inquisitor/Issue16.jpg", // Replace with actual image
  },
  {
    id: 2,
    title: "Inquisitor 15",
    description: "This is the 15 Inquisitor.",
    image: "images/inquisitor/Issue15.png", // Replace with actual image
  },
  {
    id: 3,
    title: "Inquisitor 14",
    description: "This is the 14 Inquisitor.",
    image: "images/inquisitor/Issue14.png", // Replace with actual image
  },
{
    id: 4,
    title: "Inquisitor 13",
    description: "This is the 13 Inquisitor.",
    image: "images/inquisitor/Issue13.png", // Replace with actual image
  },]
  const highlights = [
    {
      id: 1,
      title: "Highlight 1",
      description: "This is the Highlight 1.",
      image: "images/Home/IMG_1525.JPG", // Replace with actual image
    },
    {
      id: 2,
      title: "Highlight 2",
      description: "This is the Highlight 2.",
      image: "images/Home/IMG_1532.JPG", // Replace with actual image
    },
    {
      id: 3,
      title: "Highlight 3",
      description: "This is the Highlight 3.",
      image: "images/Home/IMG_1564.JPG", // Replace with actual image
    },
  {
      id: 4,
      title: "Highlight 4",
      description: "This is the Highlight 4.",
      image: "images/Home/IMG_1741.JPG", // Replace with actual image
    },
    {
      id: 5,
      title: "Highlight 5",
      description: "This is the Highlight 5.",
      image: "images/Home/IMG_1758.JPG", // Replace with actual image
    },
  {
      id: 6,
      title: "Highlight 6",
      description: "This is the Highlight 6.",
      image: "images/Home/IMG_4866.jpg", // Replace with actual image
    },
    {
      id: 7,
      title: "Highlight 7",
      description: "This is the Highlight 7.",
      image: "images/Home/IMG_5089.jpg", // Replace with actual image
    },
  {
      id: 8,
      title: "Highlight 8",
      description: "This is the Highlight 8.",
      image: "images/Home/IMG_7178.jpg", // Replace with actual image
    },
    {
      id: 9,
      title: "Highlight 9",
      description: "This is the Highlight 9.",
      image: "images/Home/IMG_9999.jpg", // Replace with actual image
    },
    {
      id: 10,
      title: "Highlight 10",
      description: "This is the Highlight 10.",
      image: "images/Home/ptk.jpg", // Replace with actual image
    },
  ]
  return (
    <div className={` overflow-x-hidden overflow-y-auto`}>
      <div className="h-screen bg-darkblue text-white relative">


        <img src="/images/home-bg.png" alt="hero-banner" className='opacity-40 absolute top-0 left-0 right-0 bottom-0 z-0 w-full h-full object-contain scale-75' />
        <div className='absolute left-0 right-0 top-0 bottom-0 text-center content-center'>
          <h1 className="font-bold text-5xl lg:text-8xl">PICTMUN</h1>
          <div className="h-[10px]"></div>
          <h1 className="text-2xl lg:text-2xl text-zinc-400">Think  Discuss  Prosper</h1>
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
      <div className="relative lg:h-screen text-zinc-200 bg-white bg-opacity-25 p-[50px] lg:py-[px] lg:px-[250px] flex flex-col">
       
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-[600]">About the Club</h1>
        </div>
        <div className="flex-none h-[30px] lg:h-[50px]"></div>
        <div className="grid grid-cols-2 h-full gap-[75px]">
          
          <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
            <div className='w-full h-full flex flex-col'>
              <div className="grow"></div>
              <p className='leading-7 text-base lg:text-base text-[#ADB8BB] text-justify'>
              PICTMUN is a prestigious club where students immerse themselves in the art of diplomacy, debate, and international relations. The club provides a dynamic environment for delegates to engage in discussions on global issues, develop critical thinking skills, and refine public speaking.
              <br />
              Our conferences attract a diverse group of passionate students, all eager to contribute and propose innovative solutions to pressing global challenges.
              We pride ourselves in fostering an intellectually stimulating atmosphere that incorporates learning, leadership, and the pursuit of excellence
              </p>
              <div className="grow"></div>
            </div>
          </div>
          <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-lg hidden lg:block">
            <img src="images/Home/IMG_1447.JPG" alt="about" className='h-full rounded-md'  />
          </div>
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
        <div className="col-span-1 bg-zinc-900 bg-opacity-30 h-full rounded-md shadow-md hidden lg:block my-auto">

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
    }
  }}
  centeredSlides={true}
  loop={true}
>
  {inquisitors.map((highlight) => (
    <SwiperSlide key={highlight.id}>
      <div className="flex justify-center items-center h-full">
        <img 
          src={highlight.image} 
          alt={highlight.title} 
          className="h-80 object-cover" 
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</div>

          <div className="col-span-2 lg:col-span-1 text-center lg:text-start">
            <div className='w-full h-full flex flex-col'>
              <div className="grow"></div>
              <p className='leading-7 text-base lg:text-base text-[#ADB8BB] text-justify'>
              The Inquisitor is the official, bimonthly magazine of PICTMUN offering perspicacious perspectives on global affairs, diplomacy, and geopolitics. It serves as a platform for our members to explore and analyze pressing concerns, providing readers with thought-provoking articles.
              Our magazine is crafted by a team of passionate students committed to delivering high-quality content. Each edition features a diverse range of articles that inspire critical thinking and intellectual curiosity
              
              </p>
              <div className="grow"></div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden bg-zinc-900 bg-opacity-30 rounded-md shadow-lg w-[220px] h-[300px] mt-[50px] mx-auto" style={{
          backgroundImage: `url(images/inquisitor/Issue16.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
      </div>
      {/* Highlights Section */}
<div className='bg-darkblue'>

      <div className="bg-white bg-opacity-25 py-[50px] lg:py-[100px] px-[50px] lg:px-[50px] text-white w-full">
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
              <div className="relative rounded-lg overflow-hidden shadow-lg mx-auto">
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
