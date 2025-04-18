
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-skillsync-primary flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-skillsync-primary">SkillSync</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-skillsync-darkGray hover:text-skillsync-primary transition-colors font-medium">Home</Link>
            <Link to="/search" className="text-skillsync-darkGray hover:text-skillsync-primary transition-colors font-medium">Find Mentors</Link>
            <Link to="/reviews" className="text-skillsync-darkGray hover:text-skillsync-primary transition-colors font-medium">Reviews</Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                <Link to="/auth">
                  <LogIn className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
              </Button>
              <Button size="sm" className="bg-skillsync-primary hover:bg-skillsync-teal text-white flex items-center gap-1" asChild>
                <Link to="/auth?mode=signup">
                  <User className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-skillsync-darkGray"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-skillsync-darkGray hover:text-skillsync-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/search" 
                className="text-skillsync-darkGray hover:text-skillsync-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Mentors
              </Link>
              <Link 
                to="/reviews" 
                className="text-skillsync-darkGray hover:text-skillsync-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="outline" className="w-full justify-center" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button className="w-full justify-center bg-skillsync-primary hover:bg-skillsync-teal" asChild>
                  <Link to="/auth?mode=signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
