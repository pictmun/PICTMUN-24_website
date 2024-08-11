import React from 'react'


interface CardProps {
    name: string;
    designation: string;
    image: string;
  }

  const TeamMember: React.FC<CardProps> = ({ name, designation, image }) => {
    return (
      <div className="">
        <div className=" max-w-[200px] hover:scale-110 transition-all duration-300 max-h-[200px] md:max-w-[250px] md:max-h-[250px]">
          <img className="w-full h-full rounded-full" src={image} alt={name} />
        </div>
        <div className="info mx-auto text-center hover:text-skin py-[15px] lg:text-3xl text-lg md:text-xl text-white">
          <h3 className=''>{name}</h3>
          <p className='mt-2 hover:text-skin'>{designation}</p>
        </div>
      </div>
    );
  };
  


export default TeamMember;
