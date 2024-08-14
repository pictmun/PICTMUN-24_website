'use client';
import React, { useState, useEffect } from 'react';

const Page: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Function to check if the element is in view
  const handleScroll = () => {
    const element = document.getElementById('slideInRightDiv');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.8) { // Trigger animation when 80% of the element is visible
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-darkblue  min-h-screen overflow-x-hidden'>
      <h1 className="text-center pb-10 pt-20 text-white text-5xl relative font-bold">
        About the Club
      </h1>
     
      <div>
        <div className="md:w-5/6 w-[90%] relative mx-auto h-[450px] md:mx-0">
          <img
            src='/images/About/1.JPG'
            className="w-full h-full object-cover bg-[#232A2F] opacity-50"
            alt="Image"
          />
          <div
            className="absolute top-0 bottom-0 lg:w-3/5 flex items-center justify-center overflow-hidden left-0 bg-[#F9F8F7] opacity-70 animate-slideInLeft"
          >
            <span className="lg:pl-20 p-10 lg:pr-20 text-justify text-darkblue text-lg leading-5">
            Welcome to PICT Model United Nations (MUN), where the power of dialogue and the art of diplomacy come together to address the most pressing global issues. Guided by our motto, <b>Think. Discuss. Prosper.</b>, we are committed to fostering an environment where thoughtful discussion and open-minded debate pave the way for innovative solutions. At PICT MUN, we believe that every conversation has the potential to inspire change and that by engaging in meaningful dialogue, our members can contribute to a more peaceful and prosperous world.
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-20">
        <div className="md:w-5/6 w-[90%] relative h-[450px] mx-auto lg:mx-0">
          <img
            src='/images/About/2.JPG'
            className="w-full h-full object-cover bg-[#232A2F] opacity-50"
            alt="Image"
          />
          <div
            id="slideInRightDiv"
            className={`absolute top-0 bottom-0 right-0 lg:w-3/5 flex items-center justify-center overflow-hidden bg-[#F9F8F7] opacity-70 transition-transform duration-1000 delay-125 ${
              isVisible ? 'transform-none' : 'translate-x-full'
            }`}
          >
            <span className="pl-20 pr-20 text-darkblue text-justify text-lg leading-5">
            Our organization is built on the universal principle of tolerance, emphasizing the importance of understanding and respecting diverse perspectives. Through our events, conferences, and workshops, we encourage our members to think critically, discuss passionately, and work collaboratively towards common goals. Whether you are a seasoned delegate or new to the world of MUN, PICT MUN is a platform where you can hone your skills, broaden your horizons, and become a part of a global community dedicated to making a difference. Join us as we explore the power of dialogue and work towards a brighter future for all.
            
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
