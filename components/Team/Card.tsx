import React from 'react'


interface CardProps {
    name: string;
    designation: string;
    image: string;
  }

  const TeamMember: React.FC<CardProps> = ({ name, designation, image }) => {
    return (
      <div className="team-member">
        <div className="max-w-[250px] max-h-[250px] ">
          <img className="w-full h-full rounded-full" src={image} alt={name} />
        </div>
        <div className="info mx-auto text-center py-[15px] text-3xl text-white">
          <h3 className=''>{name}</h3>
          <p className='pt-1'>{designation}</p>
        </div>
      </div>
    );
  };
  


export default TeamMember;
