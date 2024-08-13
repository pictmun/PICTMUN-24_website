import React from 'react'
interface CardProps {
    image: string;
  }


const Gallery: React.FC<CardProps> = ({image}) => {
  return (
    <div className="w-[300px] h-[300px] ">
          <img title="gal" className="w-full h-full "src={image} />
    </div>
  )
}

export default Gallery
