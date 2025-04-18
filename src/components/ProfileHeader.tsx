
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Star, MessageSquare, Clock, Users, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProfileHeaderProps {
  name: string;
  title: string;
  location: string;
  bio: string;
  rating: number;
  reviewCount: number;
  responseTime: string;
  totalStudents: number;
  profileImageUrl: string;
  skills: string[];
  verified: boolean;
  joinDate: string;
  hourlyRate?: number;
}

const ProfileHeader = ({
  name,
  title,
  location,
  bio,
  rating,
  reviewCount,
  responseTime,
  totalStudents,
  profileImageUrl,
  skills,
  verified,
  joinDate,
  hourlyRate,
}: ProfileHeaderProps) => {
  const { toast } = useToast();

  const handleBookSession = () => {
    toast({
      title: "Session Request Sent",
      description: `You've requested a session with ${name}. They'll respond shortly.`,
    });
  };

  const handleSendMessage = () => {
    toast({
      title: "Message Sent",
      description: `Your message has been sent to ${name}.`,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-skillsync-primary to-skillsync-accent opacity-80"></div>
      
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image & Basic Info */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <div className="relative -mt-24 mb-4">
              <img
                src={profileImageUrl}
                alt={name}
                className="h-36 w-36 rounded-full border-4 border-white object-cover"
              />
              {verified && (
                <div className="absolute bottom-3 right-3 bg-skillsync-primary text-white p-1 rounded-full">
                  <Shield className="h-5 w-5" />
                </div>
              )}
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-1 text-center md:text-left">{name}</h1>
            <p className="text-muted-foreground mb-2 text-center md:text-left">{title}</p>
            
            <div className="flex items-center mb-4">
              <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-muted-foreground">{location}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-skillsync-lightGray hover:bg-skillsync-mediumGray text-skillsync-darkGray"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="w-full flex flex-col gap-4 mb-6">
              <Button 
                className="w-full bg-skillsync-primary hover:bg-skillsync-teal flex items-center gap-2"
                onClick={handleBookSession}
              >
                <Calendar className="h-4 w-4" /> Book a Session
              </Button>
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2"
                onClick={handleSendMessage}
              >
                <MessageSquare className="h-4 w-4" /> Send Message
              </Button>
            </div>
          </div>
          
          {/* About & Stats */}
          <div className="md:w-2/3 md:pl-8 md:border-l">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="text-muted-foreground">{bio}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center p-4 bg-skillsync-lightGray rounded-lg">
                <div className="flex items-center text-amber-500 mb-1">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-lg font-semibold ml-1">{rating.toFixed(1)}</span>
                </div>
                <span className="text-sm text-muted-foreground">{reviewCount} Reviews</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-skillsync-lightGray rounded-lg">
                <div className="flex items-center text-skillsync-teal mb-1">
                  <Clock className="h-5 w-5" />
                  <span className="text-lg font-semibold ml-1">{responseTime}</span>
                </div>
                <span className="text-sm text-muted-foreground">Response Time</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-skillsync-lightGray rounded-lg">
                <div className="flex items-center text-skillsync-secondary mb-1">
                  <Users className="h-5 w-5" />
                  <span className="text-lg font-semibold ml-1">{totalStudents}+</span>
                </div>
                <span className="text-sm text-muted-foreground">Students</span>
              </div>
            </div>
            
            {verified && (
              <div className="flex items-center mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                <Shield className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-800 text-sm">
                  Verified mentor since {joinDate}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
