import Image from "next/image";
import { Inter } from "next/font/google";
import { TopBar } from "@/Components/Home/TopBar";
import { Header } from "@/Components/Home/Header";
import { Hero } from "@/Components/Home/Hero";
import { HeroCards } from "@/Components/Home/HeroCards";
import { FeatureCard } from "@/Components/Home/FeatureCard";
import { ServiceCards } from "@/Components/Home/ServiceCards";
import { IndustriesCard } from "@/Components/Home/IndustriesCard";
import { IndustrySection } from "@/Components/Home/IndustrySection";
import { Pricing } from "@/Components/Home/Pricing";
import { CustomerSection } from "@/Components/Home/CustomerSection";
import { AboutUs } from "@/Components/Home/AboutUs";
import { Footer } from "@/Components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <TopBar />
      <Header />
      <Hero />
      <HeroCards />
      <FeatureCard />
      <ServiceCards />
      <IndustriesCard />
      <IndustrySection />
      <Pricing />
      <CustomerSection />
      <AboutUs />
      <Footer />
    </main>
  );
}
