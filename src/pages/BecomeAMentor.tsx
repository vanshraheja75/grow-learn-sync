
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BecomeAMentor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Become a Mentor</h1>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-4">Share Your Knowledge</h2>
              <p className="mb-6 text-muted-foreground">
                Join our community of mentors and help others learn and grow. Share your expertise,
                build your professional network, and make a difference in someone's career journey.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium mb-1">
                    What skills would you like to mentor in?
                  </label>
                  <input
                    type="text"
                    id="skills"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., UX Design, React, Data Science"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    id="experience"
                    className="w-full p-2 border rounded-md"
                    min="1"
                    placeholder="Enter years of experience"
                  />
                </div>
                
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows={4}
                    className="w-full p-2 border rounded-md"
                    placeholder="Tell us about your professional background and mentoring style"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-skillsync-primary hover:bg-skillsync-teal">
                  Apply to Become a Mentor
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeAMentor;
