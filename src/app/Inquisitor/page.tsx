import BookCard from "../../../components/Inquisitor/BookCard";

export default function Page() {
    return (
        <section className="pt-24 bg-darkblue min-h-screen">
            <h1 className="text-5xl mb-20 text-center font-bold text-white">Our Newsletter - Inquisitor</h1>
            <div className="bg-white/30 w-[90%] lg:w-[75%] rounded-xl p-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                    <img src="images/inquisitor-14.png" className="w-full h-[400px] object-contain" alt="" />
                </div>
                <div>
                    <p className="text-sm lg:text-lg m-5 text-darkblue">
                        The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of in-house articles that have been written by the club’s members after carrying out extensive research to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested in getting their work published.
                    </p>
                    <div className="flex flex-col lg:flex-row mt-3 items-center justify-center gap-4">
                        <button className="px-12 text-skin py-2 text-md rounded-md bg-zinc-950 bg-opacity-80 border-[1.5px] border-zinc-950 shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:shadow-xl hover:scale-105">
                            Download
                        </button>
                        <button className="px-12 text-white py-2 text-md rounded-md bg-zinc-950 bg-opacity-80 border-[1.5px] border-zinc-950 shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:shadow-xl hover:scale-105">
                            Read Online
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-20 grid w-[90%] lg:w-[75%] gap-6 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
                <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022" />
                <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022" />
                <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022" />
                <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022" />
                <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022" />
                <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022" />
            </div>
        </section>
    );
}
