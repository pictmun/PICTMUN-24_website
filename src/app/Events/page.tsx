import Card from "../../../components/Events/Card";

export default function Page() {
  return (
    <>
    <section className=" py-6 px-4 bg-darkblue text-white min-h-screen overflow-x-hidden">
      <h3 className="text-4xl font-semibold text-center">Events</h3>
      <div className="relative">
        {/* Background patterns */}
        {/* Top one */}
      <img src="/images/bg-pattern.png"  alt="" className="hidden md:block absolute top-[30%] lg:top-[20%] w-[900px] overflow-hidden right-[-20%] rotate-[-20deg]"/>
      {/* top two */}
      <img src="/images/bg-pattern.png"  alt="" className="hidden md:block absolute top-[35%] left-[-50%]  lg:top-[38%] w-[900px]  overflow-hidden lg:left-[-35%] rotate-[-20deg]"/>
{/* Card component -> /components/Events/Card */}
      <Card right={false} title={'title'} description={"The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor from scratch. It consists of In-house articles that have been written by the club`s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published."} bgImage={'/images/un-image.png'}/>
      <Card right={true} title={'title'} description={"The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor from scratch. It consists of In-house articles that have been written by the club`s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published."} bgImage={'/images/un-image.png'}/>
      </div>
    </section>
    </>
  );
}
