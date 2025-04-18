
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileTabs from "@/components/ProfileTabs";

// Sample mentor profile data
const mentorProfile = {
  id: "1",
  name: "Sarah Johnson",
  title: "Senior UX Designer at DesignCo",
  location: "San Francisco, US",
  bio: "I'm a passionate UX designer with over 8 years of experience creating intuitive and beautiful digital experiences. I specialize in user-centered design methodologies, design systems, and helping aspiring designers build strong portfolios. I've worked with startups and Fortune 500 companies across fintech, healthcare, and e-commerce sectors.",
  rating: 4.9,
  reviewCount: 127,
  responseTime: "< 2 hrs",
  totalStudents: 85,
  profileImageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
  skills: ["UX Research", "UI Design", "Figma", "User Testing", "Design Systems", "Wireframing", "Prototyping"],
  verified: true,
  joinDate: "Jan 2022",
  hourlyRate: 75,
};

const Profile = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-skillsync-lightGray py-8">
        <div className="container mx-auto px-4">
          <ProfileHeader {...mentorProfile} />
          <ProfileTabs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
