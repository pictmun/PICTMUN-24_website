import React from 'react'
interface CardProps {
    image: string;
  }


const Gallery: React.FC<CardProps> = ({image}) => {
  return (
    <div className="min-w-[300px] min-h-[300px] ">
          <img title="gal" className="w-full h-full "src={image} />
    </div>
  )
}

export default Gallery
