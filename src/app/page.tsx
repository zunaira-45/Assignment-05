import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
      <Footer/>
    </div>
  );
}
