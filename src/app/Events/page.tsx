import Card from "../../../components/Events/Card";

export default function Page() {
  const conference=[
    '/images/Events/Conference/1.JPG',
    '/images/Events/Conference/2.JPG',
    '/images/Events/Conference/3.jpg',
  ];
  const intra=[
    '/images/Events/Intra/1.jpg',
    '/images/Events/Intra/2.jpg',
    '/images/Events/Intra/3.jpg',
  ];
  const adlib=[
    '/images/Events/Adlib/1.jpg',
    '/images/Events/Adlib/2.jpg',
    '/images/Events/Adlib/3.jpg',
  ];
  const FEinduction=[
    '/images/Events/Conference/1.JPG',
    '/images/Events/Conference/2.JPG',
    '/images/Events/Conference/3.jpg',
  ];

  return (
    <section className="py-6 px-4 bg-darkblue text-white min-h-screen overflow-x-hidden overflow-y-hidden">
      <h3 className="text-4xl font-semibold text-center">Events</h3>
      <div className="relative">
        {/* Background patterns */}
        {/* Top one */}
        
        {/* top two */}
        <img
          src="/images/bg-pattern.png"
          alt=""
          className="hidden md:block absolute top-[35%] left-[-50%] lg:top-[55%] w-[900px] overflow-hidden lg:left-[-20%] rotate-[-20deg]"
        />
        {/* Card components */}
        <Card
          right={false}
          title={"PICTMUN Conference"}
          description={
            "The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor from scratch. It consists of In-house articles that have been written by the club`s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published."
          }
          bgImages={conference}
        />
        <Card
          right={true}
          title={"PICT Intra-MUN"}
          description={
            "The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor from scratch. It consists of In-house articles that have been written by the club`s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published."
          }
          bgImages={intra}
        />
        <Card
          right={false}
          title={"AdLib"}
          description={
            "The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor from scratch. It consists of In-house articles that have been written by the club`s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published."
          }
          bgImages={adlib}
        />
        <Card
          right={true}
          title={"FE Induction"}
          description={
            "The PICT MUN team has developed Issue 14.0 of ‘The Inquisitor from scratch. It consists of In-house articles that have been written by the club`s members after carrying out extensive research in order to serve reports to the readers with the maximum possible factual accuracy. We plan on expanding the outreach of this esteemed newsletter with each edition and would love to accept articles from individuals who would be interested to get their work published."
          }
          bgImages={FEinduction}
        />
      </div>
    </section>
  );
}
