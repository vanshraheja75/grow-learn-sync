
import { Button } from "@/components/ui/button";
import MentorCard from "./MentorCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for popular mentors
const popularMentors = [
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
];

const PopularMentors = () => {
  return (
    <section className="py-12 md:py-16 bg-skillsync-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Popular Mentors</h2>
            <p className="text-muted-foreground">
              Top-rated mentors with exceptional feedback from learners
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-skillsync-primary hover:text-skillsync-teal hover:bg-white mt-4 md:mt-0 flex items-center"
            asChild
          >
            <Link to="/search">
              Find more mentors <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {popularMentors.map((mentor) => (
            <MentorCard key={mentor.id} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMentors;
