
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import TrendingSkills from "@/components/TrendingSkills";
import PopularMentors from "@/components/PopularMentors";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <TrendingSkills />
        <PopularMentors />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
