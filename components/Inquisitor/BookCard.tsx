import React from "react";

interface BookCardProps {
    imgSrc: string;
    title: string;
}

const BookCard: React.FC<BookCardProps> = ({ imgSrc, title }) => {
    return (
        <div className="flex flex-col items-center gap-2.5 justify-center py-5">
            <div>
                <img
                    src={imgSrc}
                    alt="inquistor"
                    className="h-[250px] w-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>
            <div className="flex items-center justify-center gap-2 px-3">
                <p className="w-1/2 text-white">{title}</p>
                <button className="px-2 text-skin py-2 text-md rounded-md bg-zinc-950 bg-opacity-60 border-[1.5px] border-zinc-950 shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-xl hover:scale-105">
                    Download
                </button>
            </div>
        </div>
    );
};

export default BookCard;
