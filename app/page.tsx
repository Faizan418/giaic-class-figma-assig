import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Section1 from "@/components/Section1/Section1";
import Section2 from "@/components/Section2/Section2";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4/Section4";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
   </div>
  );
}
