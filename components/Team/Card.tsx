import React from 'react'


interface CardProps {
    name: string;
    designation: string;
    image: string;
  }

  const TeamMember: React.FC<CardProps> = ({ name, designation, image }) => {
    return (
      <div className="team-member">
        <div className=" max-w-[200px] max-h-[200px] md:max-w-[250px] md:max-h-[250px]">
          <img className="w-full h-full rounded-full" src={image} alt={name} />
        </div>
        <div className="info mx-auto text-center py-[15px] lg:text-3xl text-lg md:text-xl text-white">
          <h3 className=''>{name}</h3>
          <p className='pt-1'>{designation}</p>
        </div>
      </div>
    );
  };
  


export default TeamMember;
