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
            src='./images/mathias-reding-yfXhqAW5X0c-unsplash1.jpg'
            className="w-full h-full object-cover bg-[#232A2F] opacity-50"
            alt="Image"
          />
          <div
            className="absolute top-0 bottom-0 lg:w-3/5 flex items-center justify-center overflow-hidden left-0 bg-[#F9F8F7] opacity-70 animate-slideInLeft"
          >
            <span className="lg:pl-20 p-10 lg:pr-20 text-center text-darkblue text-lg leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus sed est tincidunt, quis scelerisque leo viverra.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed, amet necessitatibus, sapiente, ducimus doloremque quasi iusto nihil tempora accusamus hic aliquam fugit accusantium quisquam!
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-20">
        <div className="md:w-5/6 w-[90%] relative h-[450px] mx-auto lg:mx-0">
          <img
            src='./images/mathias-reding-yfXhqAW5X0c-unsplash1.jpg'
            className="w-full h-full object-cover bg-[#232A2F] opacity-50"
            alt="Image"
          />
          <div
            id="slideInRightDiv"
            className={`absolute top-0 bottom-0 right-0 lg:w-3/5 flex items-center justify-center overflow-hidden bg-[#F9F8F7] opacity-70 transition-transform duration-1000 delay-125 ${
              isVisible ? 'transform-none' : 'translate-x-full'
            }`}
          >
            <span className="lg:pl-20 p-10 lg:pr-20 text-center text-darkblue text-lg leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus sed est tincidunt, quis scelerisque leo viverra.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed, amet necessitatibus, sapiente, ducimus doloremque quasi iusto nihil tempora accusamus hic aliquam fugit accusantium quisquam!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
