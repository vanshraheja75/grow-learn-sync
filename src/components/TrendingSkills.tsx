
import { Button } from "@/components/ui/button";
import SkillCard from "./SkillCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for trending skills
const trendingSkills = [
  {
    id: "1",
    name: "React Development",
    category: "Web Development",
    mentorCount: 48,
    isTrending: true,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "2",
    name: "UX Research",
    category: "Design",
    mentorCount: 32,
    isTrending: true,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    id: "3",
    name: "Data Science",
    category: "Analytics",
    mentorCount: 67,
    isTrending: true,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: "4",
    name: "Digital Marketing",
    category: "Marketing",
    mentorCount: 29,
    isTrending: false,
  },
  {
    id: "5",
    name: "Product Management",
    category: "Business",
    mentorCount: 41,
    isTrending: true,
  },
  {
    id: "6",
    name: "Machine Learning",
    category: "AI & Data",
    mentorCount: 35,
    isTrending: true,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
];

const TrendingSkills = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Trending Skills</h2>
            <p className="text-muted-foreground">
              Popular skills with active mentors ready to help you grow
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-skillsync-primary hover:text-skillsync-teal hover:bg-skillsync-lightGray mt-4 md:mt-0 flex items-center"
            asChild
          >
            <Link to="/search">
              View all skills <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              category={skill.category}
              mentorCount={skill.mentorCount}
              isTrending={skill.isTrending}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSkills;
