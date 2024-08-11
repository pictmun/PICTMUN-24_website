import TeamMember from "../../../components/Team/Card";


export default function Page() {
    return( 

      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-darkblue relative text-center" style={{
        backgroundImage: "url('/images/bg_teams.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
      }} >

      {/*The secretariat section */}
      <h1 className=" text-4xl font-bold text-white relative pt-24 ">Meet the Team</h1><br></br>
      <h2 className="  text-4xl text-white  relative  pb-12 " >The Secretariat</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 pb-11 align-baseline">
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-16">
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      </div>
      {/* Under Secretary section */}
      <h2 className=" text-4xl text-white  relative  py-20 ">Under Secretary General</h2>
  
      <div className="grid grid-cols-1  md:grid-cols-2 md:gap-x-36 md:gap-y-12 gap-10 pb-11 align-baseline">
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>  
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/Anshika_Singh.jpg"}/>  
 </div>     
</div>)
  } 
