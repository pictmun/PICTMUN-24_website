import BookCard from "../../../components/Inquisitor/BookCard";

export default function Page() {
    const books = [
        { imgSrc: 'images/inquisitor/Issue15.png', title: 'Issue 15.0 November 2023',dlink:'/inquisitor/Newsletter_Issue15.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue14.png', title: 'Issue 14.0 May 2022',dlink:'/inquisitor/Newsletter_Issue14.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue13.png', title: 'Issue 13.0 January 2022',dlink:'/inquisitor/Newsletter_Issue13.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue12.png', title: 'Issue 12.0 December 2021',dlink:'/inquisitor/Newsletter_Issue12.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue11.png', title: 'Issue 11.0 November 2021',dlink:'/inquisitor/Newsletter_Issue11.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue10.jpg', title: 'Issue 10.0 April 2021',dlink:'/inquisitor/Newsletter_Issue10.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue9.png', title: 'Issue 9.0 February 2021',dlink:'/inquisitor/Newsletter_Issue9.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue8.png', title: 'Issue 8.0 January 2021',dlink:'/inquisitor/Newsletter_Issue8.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue7.jpeg', title: 'Issue 7.0 December 2020',dlink:'/inquisitor/Newsletter_Issue7.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue6.png', title: 'Issue 6.0 November 2020',dlink:'/inquisitor/Newsletter_Issue6.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue5.png', title: 'Issue 5.0 October 2020',dlink:'/inquisitor/Newsletter_Issue6.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue4.png', title: 'Issue 4.0 September 2020',dlink:'/inquisitor/Newsletter_Issue4.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue3.jpg', title: 'Issue 3.0 August 2020',dlink:'/inquisitor/Newsletter_Issue3.0.pdf' },
        { imgSrc: 'images/inquisitor/Issue2.jpg', title: 'Issue 2.0 July 2020',dlink:'/inquisitor/Newsletter_Issue2.0.pdf' },
        { imgSrc: 'images/inquisitor/issue1.jpg', title: 'Issue 1.0 June 2020',dlink:'/inquisitor/Newsletter_Issue1.0.pdf' },
    ];
    return (
        <section className="pt-24 bg-darkblue min-h-screen">
            <h1 className="text-5xl mb-20 text-center font-bold text-white">Our Newsletter - Inquisitor</h1>
            <div className="bg-white/30 w-[90%] lg:w-[75%] rounded-xl p-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                    <img src="images/inquisitor/Issue16.jpg" className="w-full h-[400px] object-contain" alt="" />
                </div>
                <div>
                    <p className="text-base lg:text-base m-5 text-darkblue text-justify">
                    The 16th edition of PICT MUN&#39;s newsletter “The Inquisitor” was published digitally, featuring 6 articles with topics brewing from the recently conducted Lok Sabha elections, the comparison of the Belt and Road Initiative of China (BRI) and the newly established India Middle East Economic Corridor (IMEC) and the how modernization has helped improve the infrastructure in the Indian Army owing to the expansion of army into creating specialist in technological fields. It also features a special section featuring a deeper look into the range of MP&#39;s elected, evaluating them based on parameters such as economic and linguistic standpoints.
                    
                    </p>
                    <div className="flex flex-col lg:flex-row mt-3 items-center justify-center gap-4">
                        <a
                        href='/inquisitor/Newsletter_Issue16.0.pdf'
                        download
                        >

                        <button className="px-12 text-skin py-2 text-md rounded-md bg-zinc-950 bg-opacity-80 border-[1.5px] border-zinc-950 shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:shadow-xl hover:scale-105">
                            Download
                        </button>
                        </a>
                        <a
                        href='/inquisitor/Newsletter_Issue16.0.pdf'
                        >
                        <button className="px-12 text-white py-2 text-md rounded-md bg-zinc-950 bg-opacity-80 border-[1.5px] border-zinc-950 shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:shadow-xl hover:scale-105">
                            Read Online
                        </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-20 grid w-[90%] lg:w-[75%] gap-6 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
            {books.map((book, index) => (
                <BookCard key={index} imgSrc={book.imgSrc} title={book.title} dlink={book.dlink}/>
            ))}
            </div>
        </section>
    );
}
