
interface CardProps {
  right?: boolean;
  title: string;
  description: string;
  bgImage: string;
}

const Card: React.FC<CardProps> = ({ right, title, description, bgImage }) => {
  return (
    <div className="mt-7">
      <div
        className={`relative  w-[90%] md:w-[55%] mx-auto ${
          right ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
        } h-[450px]`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center p-5 md:p-12 text-midblue bg-white bg-opacity-60">
          <h2 className="text-center text-3xl font-bold my-5">{title}</h2>
          <p className="text-left text-lg leading-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
