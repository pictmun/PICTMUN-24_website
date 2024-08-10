import BookCard from "../../../components/Inquisitor/BookCard";

export default function Page() {
    return <section className="pt-24 bg-darkblue min-h-screen">

        <h1 className="text-5xl mb-20 text-center font-bold text-white">Our Newsletter-Inquisitor</h1>
         <div className="bg-white w-[90%]  lg:w-[75%] rounded-md p-10 border-white border-2 mx-auto opacity-50 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
           <img src="images/inquisitor-14.png" className="w-full h-[400px] object-contain" alt="" />
          </div>
          <div>
            <p className="text-sm lg:text-lg text-darkblue">
              The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor’ from scratch. It consists of In-house articles that have been written by the club’s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published.
            </p>
            <div className="flex flex-col lg:flex-row mt-3 items-center justify-center gap-2">
            <button className="px-12 text-skin py-2 text-md rounded-md bg-zinc-950 bg-opacity-60  border-[1.5px]  border-zinc-950  shadow-lg">Download</button>
            <button className="px-12 text-white py-2 text-md rounded-md bg-zinc-950 bg-opacity-60  border-[1.5px]  border-zinc-950  shadow-lg">Read Online</button>
            </div>
             
          </div>

         </div>

         <div className="mt-10 grid w-[90%] lg:w-[75%] gap-6 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
          <BookCard  imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022"/>
          <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022"/>
          <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022"/>
          <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022"/>
          <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022"/>
          <BookCard imgSrc="/images/inquisitor-14.png" title="Issue 14.0 May 2022"/>
         </div>
    </section>
  }
  