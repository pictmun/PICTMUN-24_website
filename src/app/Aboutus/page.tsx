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
    <div style={{ backgroundColor: '#232A2F' }}>
      <div>
        <h1 className="text-center pb-10 pt-20 text-white text-5xl relative font-bold">About the Club</h1>
      </div>
      <div>
        <div className="w-5/6 h-100 pt-10 pb-20 relative">
          <img
            src='./images/mathias-reding-yfXhqAW5X0c-unsplash1.jpg'
            style={{ backgroundColor: '#232A2F', opacity: 0.5 }}
            className="w-full h-full object-fill"
            alt="Image"
          />
          <div
            style={{ backgroundColor: '#F9F8F7', opacity: 0.7 }}
            className="absolute top-10 bottom-20 w-3/5 flex items-center justify-center overflow-hidden -left-[0px] animate-slideInLeft"
          >
            <span className="pl-20 pr-20 text-center text-darkblue text-lg leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus sed est tincidunt, quis scelerisque leo viverra. Suspendisse scelerisque ipsum sit amet ligula sagittis interdum. Fusce turpis nisl, accumsan quis dolor in, laoreet convallis quam. Donec a malesuada est. Pellentesque eleifend, tortor aliquet imperdiet pellentesque, ligula odio faucibus eros, at bibendum felis felis vel tortor. Vivamus in suscipit nunc. Donec vitae pulvinar tellus, sit amet tristique nulla. Etiam tempus turpis at porttitor tempus. Nullam in finibus urna. Phasellus tortor purus, tincidunt a facilisis quis, fermentum in erat. Mauris tincidunt eleifend lacus, in rhoncus dui varius ut. Maecenas sed tortor est. Integer sollicitudin auctor nulla, sit amet bibendum magna luctus ac. Aenean non dolor sapien.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-5/6 h-100 pt-10 pb-20 relative">
          <img
            src='./images/davi-mendes-c7ir2Go9qXc-unsplash.jpg'
            style={{ backgroundColor: '#232A2F', opacity: 0.5 }}
            className="w-full h-full object-fill"
            alt="Image"
          />
          <div
            id="slideInRightDiv"
            style={{ backgroundColor: '#F9F8F7', opacity: 0.7 }}
            className={`absolute top-10 bottom-20 right-0 w-3/5 flex items-center justify-center transition-transform duration-1000 delay-125 ${isVisible ? 'animate-slideInRight' : 'translate-x-full'}`}
          >
            <span className="pl-20 pr-20 text-darkblue text-left text-lg leading-5 ">
              Donec id vulputate nunc. Donec et placerat nulla. Nunc tempor, est eu cursus finibus, lectus magna venenatis ante, quis sodales mauris sapien nec sem. Vivamus quis diam vel dui hendrerit hendrerit. Vestibulum nec dui sed velit vulputate maximus. Pellentesque imperdiet felis eros, vel laoreet ipsum blandit facilisis. Morbi vel aliquet neque.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
