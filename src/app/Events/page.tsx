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
            "PICT MUN conference is one of the most anticipated MUN conferences in the Pune circuit. At PICT MUN, we strive to create an environment that fosters thoughtful dialogue, mutual respect, and intellectual growth. Delegates from all over the country and even abroad, convene on the hottest of agendas; all driven by a shared passion for diplomacy, debate, and global cooperation. Whether you are a seasoned MUN-er; or a newbie, the PICT MUN promises to be an experience that will leave you forever enthralled!"
          
          }
          bgImages={conference}
        />
        <Card
          right={true}
          title={"PICT Intra-MUN"}
          description={
            "PICT Intra MUN is an exclusive event for the students of PICT. Its underlying intent is to deepen the understanding of the United Nations and foster leadership, public speaking and diplomacy skills of the students. The event is an invigorating embodiment of the motto which we hold very dear to our hearts - think, discuss, prosper."

          }
          bgImages={intra}
        />
        <Card
          right={false}
          title={"AdLib"}
          description={
            "ADLIB is an annual convivial competition organised by the PICT MUN, exclusively for PICTians. It consists of multiple stages crafted to simulate events like press conferences, UN committees, roles of journalists and diplomats. After managing to succeed the initial rounds, the participants head towards exhilarating stages that challenge their mettle, to test journalistic skills and strategic communication techniques in them."
          }
          bgImages={adlib}
        />
        <Card
          right={true}
          title={"FE Induction"}
          description={
            "FE Induction lays the foundation for welcoming newly admitted first year students into PICT MUN. It provides a platform for existing team members to share their experiences and journey of diplomacy, through the various club activities. The team impressive track record is unveiled through achievements and accolades. This serves as both a testament to the team past successes and an inspiring beacon for the future."
          }
          bgImages={FEinduction}
        />
      </div>
    </section>
  );
}
