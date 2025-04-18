
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/SearchFilters";
import MentorCard from "@/components/MentorCard";

// Sample mentors data for search results
const mentorsData = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior UX Designer at DesignCo",
    skills: ["UX Research", "UI Design", "Figma"],
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 75,
    location: "San Francisco, US",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
    verified: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Full Stack Developer & Coding Mentor",
    skills: ["React", "Node.js", "TypeScript"],
    rating: 4.8,
    reviewCount: 94,
    hourlyRate: 65,
    location: "Toronto, Canada",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
    verified: true,
  },
  {
    id: "3",
    name: "Priya Sharma",
    title: "Data Scientist & AI Researcher",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    rating: 4.7,
    reviewCount: 83,
    hourlyRate: 80,
    location: "London, UK",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3",
    verified: true,
  },
  {
    id: "4",
    name: "David Rodriguez",
    title: "Marketing Strategist & Growth Expert",
    skills: ["Digital Marketing", "SEO", "Social Media"],
    rating: 4.6,
    reviewCount: 71,
    hourlyRate: 60,
    location: "Madrid, Spain",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
    verified: false,
  },
  {
    id: "5",
    name: "Emma Wilson",
    title: "Product Manager & Agile Coach",
    skills: ["Product Strategy", "Agile", "Leadership"],
    rating: 4.9,
    reviewCount: 112,
    hourlyRate: 90,
    location: "Stockholm, Sweden",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
    verified: true,
  },
  {
    id: "6",
    name: "Alex Kim",
    title: "Game Developer & Unity Specialist",
    skills: ["Unity", "C#", "Game Design"],
    rating: 4.7,
    reviewCount: 68,
    hourlyRate: 70,
    location: "Seoul, South Korea",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
    verified: false,
  },
];

const Search = () => {
  const [searchResults, setSearchResults] = useState(mentorsData);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-skillsync-lightGray py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find Your Mentor</h1>
            <p className="text-muted-foreground">
              Discover experts in your area of interest and connect with them for personalized guidance.
            </p>
          </div>
          
          <SearchFilters />
          
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{searchResults.length}</span> mentors
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <select className="text-sm border rounded-md px-2 py-1">
                <option>Relevance</option>
                <option>Rating: High to Low</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 animate-fade-in">
            {searchResults.map((mentor) => (
              <MentorCard key={mentor.id} {...mentor} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
