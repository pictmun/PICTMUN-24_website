'use client'
import { useState, useEffect } from "react";

interface CardProps {
  right?: boolean;
  title: string;
  description: string;
  bgImages: string[];
}

const Card: React.FC<CardProps> = ({ right, title, description, bgImages }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [bgImages.length]);

  return (
    <div className="mt-7">
      <div
        className={`relative w-[90%] md:w-[55%] mx-auto ${
          right ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
        } h-[450px]`}
      >
        {bgImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center p-5 md:p-12 text-midblue bg-white bg-opacity-60 z-10">
          <h2 className="text-center text-3xl font-bold my-5">{title}</h2>
          <p className="text-justify text-lg leading-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
