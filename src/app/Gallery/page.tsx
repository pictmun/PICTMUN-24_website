import Gallery from "../../../components/Gallery/card";


export default function Page() {
    return (
      <div className="w-full mx-auto bg-midblue ">
      <h1 className=" text-4xl font-bold text-white pt-5 relative ">Gallery</h1>
      <h2 className="  text-4xl text-white font-bold relative text-center py-12 " >Gallery</h2>
      <div className="w-[80%] mx-auto pl-11">

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 gap-y-20 pb-11 place-content-center px-10" >
      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>
      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>
      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>
     
      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>
      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>
      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>

      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>
      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>
      <Gallery image="/images/Anshika_Singh.jpg"></Gallery>
      </div>
      </div>
      </div>
      
    );
  }