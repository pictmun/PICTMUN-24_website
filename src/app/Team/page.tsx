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
      <TeamMember  name={'Rhea Shah'} designation={"Secretary General"} image={"/images/team/RHEA.jpeg"}/>
      <TeamMember  name={'Aman Upganlawar'} designation={"Director General"} image={"/images/team/Aman_img.jpg"}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-16">
      <TeamMember  name={'Sarthak Chaudhari'} designation={"Charge d'Affaires"} image={"/images/team/Sarthak_Chaudhari.jpg"}/>
      <TeamMember  name={'Bismah Shaikh'} designation={"Executive General"} image={"/images/team/Bismah_Shaikh.jpg"}/>
      <TeamMember  name={'Yashveer Tiwari'} designation={"Deputy-Secretary General"} image={"/images/team/Yashveer.jpg"}/>
      </div>
      {/* Under Secretary section */}
      <h2 className=" text-4xl text-white  relative  py-20 ">Under Secretary General</h2>
  
      <div className="grid grid-cols-1  md:grid-cols-2 md:gap-x-36 md:gap-y-12 gap-10 pb-11 align-baseline">
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/team/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Design"} image={"/images/team/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Content"} image={"/images/team/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Content"} image={"/images/team/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Technical"} image={"/images/team/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Technical"} image={"/images/team/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Outreach"} image={"/images/team/Anshika_Singh.jpg"}/>  
      <TeamMember  name={'Anshika Singh'} designation={"USG Outreach"} image={"/images/team/Anshika_Singh.jpg"}/>
      <TeamMember  name={'Anshika Singh'} designation={"USG Operations"} image={"/images/team/Anshika_Singh.jpg"}/>  
      <TeamMember  name={'Anshika Singh'} designation={"USG Operations"} image={"/images/team/Anshika_Singh.jpg"}/>  
      <TeamMember  name={'Anshika Singh'} designation={"USG Marketing"} image={"/images/team/Anshika_Singh.jpg"}/>  
      <TeamMember  name={'Anshika Singh'} designation={"USG Marketing"} image={"/images/team/Anshika_Singh.jpg"}/>  
      <TeamMember  name={'Anshika Singh'} designation={"USG Delegate Affairs"} image={"/images/team/Anshika_Singh.jpg"}/>  
      <TeamMember  name={'Anshika Singh'} designation={"USG Delegate Affairs"} image={"/images/team/Anshika_Singh.jpg"}/>  
 </div>     
</div>)
  } 
