"use client"; // Place this at the top

import Gallery from '../../../components/Gallery/Card';
import { useState } from 'react';

export default function Page() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const images =[
        '/images/Gallery/7.jpg',
        '/images/Gallery/8.jpg',
        '/images/Gallery/9.jpg',
        '/images/Gallery/4.JPG',
        '/images/Gallery/5.jpg',
        '/images/Gallery/6.jpg',
        '/images/Gallery/1.jpg',
        '/images/Gallery/2.JPG',
        '/images/Gallery/3.JPG',
    ];


    return (
        <div className="w-full mx-auto bg-darkblue">
            
            <h2 className="text-4xl text-white font-bold relative text-center pt-24 py-12">Gallery</h2>
            <div className="w-[80%] mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 gap-y-20 pb-11 place-content-center justify-items-center mx-auto">
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            className={`relative transition-all duration-300 ease-in-out ${
                                hoveredIndex === index ? 'scale-150 z-10' : (hoveredIndex !== null ? 'blur-sm' : '')
                            }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Gallery image={image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
