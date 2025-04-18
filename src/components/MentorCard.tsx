
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarDays, MapPin, MessageSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface MentorCardProps {
  id: string;
  name: string;
  title: string;
  skills: string[];
  rating: number;
  reviewCount: number;
  hourlyRate?: number;
  location: string;
  imageUrl: string;
  verified?: boolean;
}

const MentorCard = ({
  id,
  name,
  title,
  skills,
  rating,
  reviewCount,
  hourlyRate,
  location,
  imageUrl,
  verified = false,
}: MentorCardProps) => {
  const { toast } = useToast();
  
  const handleMessageClick = () => {
    toast({
      title: "Message sent",
      description: `Your introduction message has been sent to ${name}.`,
    });
  };

  return (
    <Card className="overflow-hidden hover-scale card-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={imageUrl}
                alt={name}
                className="h-20 w-20 object-cover rounded-full"
              />
              {verified && (
                <div className="absolute -bottom-1 -right-1 bg-skillsync-primary text-white p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          
          {/* Mentor Info */}
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-muted-foreground text-sm">{title}</p>
              </div>
              
              <div className="flex items-center mt-2 sm:mt-0 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium ml-1">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground ml-1">({reviewCount})</span>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{location}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
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
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-skillsync-lightGray p-4 flex flex-col sm:flex-row justify-between gap-3">
        {hourlyRate && (
          <div>
            <span className="font-semibold text-skillsync-primary">${hourlyRate}</span>
            <span className="text-sm text-muted-foreground">/hour</span>
          </div>
        )}
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 sm:flex-initial"
            onClick={handleMessageClick}
          >
            <MessageSquare className="h-4 w-4 mr-2" /> Message
          </Button>
          <Button
            size="sm"
            className="bg-skillsync-primary hover:bg-skillsync-teal flex-1 sm:flex-initial"
            asChild
          >
            <Link to={`/profile/${id}`}>
              <CalendarDays className="h-4 w-4 mr-2" /> Book Session
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MentorCard;
