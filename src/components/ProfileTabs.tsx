
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample data for calendar availability
const availabilityData = [
  { day: "Monday", slots: ["9:00 AM - 11:00 AM", "2:00 PM - 4:00 PM"] },
  { day: "Tuesday", slots: ["10:00 AM - 12:00 PM", "3:00 PM - 5:00 PM"] },
  { day: "Wednesday", slots: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"] },
  { day: "Thursday", slots: ["11:00 AM - 1:00 PM", "4:00 PM - 6:00 PM"] },
  { day: "Friday", slots: ["10:00 AM - 12:00 PM"] },
  { day: "Saturday", slots: ["11:00 AM - 1:00 PM"] },
  { day: "Sunday", slots: [] },
];

// Sample data for reviews
const reviewsData = [
  {
    id: "1",
    name: "Alex Martin",
    date: "March 15, 2023",
    rating: 5,
    comment:
      "Incredible mentor! Sarah provided clear guidance and practical advice that helped me improve my design skills significantly. Her feedback was always constructive and she was very patient with all my questions.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "2",
    name: "Emily Chen",
    date: "February 22, 2023",
    rating: 4,
    comment:
      "Very knowledgeable and helpful. Great at explaining complex concepts in simple terms. Would definitely recommend to anyone looking to improve their UX design skills.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "3",
    name: "Ryan Johnson",
    date: "January 5, 2023",
    rating: 5,
    comment:
      "Amazing experience! I learned so much in just a few sessions. The personalized feedback on my portfolio was invaluable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

// Sample data for experience
const experienceData = [
  {
    id: "1",
    title: "Senior UX Designer",
    company: "DesignCo",
    period: "2019 - Present",
    description:
      "Lead UX design for multiple flagship products, managing a team of 4 designers and collaborating with product and engineering teams.",
  },
  {
    id: "2",
    title: "UX Designer",
    company: "TechInnovate",
    period: "2017 - 2019",
    description:
      "Created user flows, wireframes, and prototypes for mobile and web applications, conducted user research and usability testing.",
  },
  {
    id: "3",
    title: "UI/UX Intern",
    company: "CreativeStudio",
    period: "2016 - 2017",
    description:
      "Assisted in the design process, created visual assets, and participated in user testing sessions.",
  },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("availability");

  return (
    <Tabs defaultValue="availability" onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-3 mb-8">
        <TabsTrigger value="availability">Availability</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
      </TabsList>

      <TabsContent value="availability" className="animate-fade-in">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-skillsync-primary" /> 
            Weekly Availability
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availabilityData.map((item) => (
              <div 
                key={item.day} 
                className={`border rounded-lg p-4 ${
                  item.slots.length === 0 ? "bg-gray-50 border-dashed" : ""
                }`}
              >
                <h3 className="font-medium mb-2">{item.day}</h3>
                
                {item.slots.length > 0 ? (
                  <ul className="space-y-2">
                    {item.slots.map((slot, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Clock className="h-3 w-3 mr-2 text-skillsync-secondary" />
                        {slot}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">Not available</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold mb-2">Booking Instructions</h3>
            <p className="text-muted-foreground">
              Sessions are typically 60 minutes long. Please book at least 24 hours in advance.
              If you need to reschedule, please do so at least 12 hours before our scheduled time.
            </p>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="reviews" className="animate-fade-in">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Star className="mr-2 h-5 w-5 text-amber-500" /> 
            Student Reviews
          </h2>
          
          <div className="space-y-6">
            {reviewsData.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                <div className="flex items-start">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="h-10 w-10 rounded-full mr-4 object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">{review.name}</h3>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating 
                              ? "text-amber-500 fill-amber-500" 
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="experience" className="animate-fade-in">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-skillsync-primary" /> 
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experienceData.map((item) => (
              <div key={item.id} className="relative pl-8 border-l-2 border-skillsync-lightGray pb-8 last:pb-0">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-skillsync-primary"></div>
                
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <Badge variant="outline" className="sm:ml-2 mt-1 sm:mt-0 w-fit">
                      {item.period}
                    </Badge>
                  </div>
                  
                  <p className="text-skillsync-primary font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;

// Import the missing Briefcase and Star icons at the top
import { Briefcase, Star } from "lucide-react";
