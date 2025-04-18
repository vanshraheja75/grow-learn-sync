
import { Button } from "@/components/ui/button";
import { ChevronRight, UserPlus, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-skillsync-lightGray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-skillsync-darkGray leading-tight">
              <span className="text-skillsync-primary">Learn.</span>{" "}
              <span className="text-skillsync-secondary">Teach.</span>{" "}
              <span className="text-skillsync-teal">Grow.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Connect with mentors and learners worldwide. Share knowledge, build skills,
              and grow together on our collaborative learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-skillsync-primary hover:bg-skillsync-teal flex items-center gap-2"
                asChild
              >
                <Link to="/search">
                  <UserCheck className="h-5 w-5" />
                  Find a Mentor
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-skillsync-primary text-skillsync-primary hover:bg-skillsync-primary hover:text-white flex items-center gap-2"
                asChild
              >
                <Link to="/become-mentor">
                  <UserPlus className="h-5 w-5" />
                  Become a Mentor
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="md:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-skillsync-accent rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-skillsync-primary rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="People collaborating" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-96 z-10 relative"
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-skillsync-secondary flex items-center justify-center text-white text-xs ring-2 ring-white">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="font-medium text-sm">500+ mentors available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
