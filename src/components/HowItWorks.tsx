
import { CalendarCheck, Search, UserPlus, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Find a Mentor",
    description:
      "Search our diverse community of experts across various skills and industries.",
    color: "bg-skillsync-primary",
  },
  {
    icon: <CalendarCheck className="h-8 w-8" />,
    title: "Book a Session",
    description:
      "Schedule a time that works for both of you using our simple booking system.",
    color: "bg-skillsync-secondary",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Learn & Grow",
    description:
      "Connect through video calls or chat to get personalized guidance and feedback.",
    color: "bg-skillsync-teal",
  },
  {
    icon: <UserPlus className="h-8 w-8" />,
    title: "Become a Mentor",
    description:
      "Share your own expertise and help others while earning extra income.",
    color: "bg-skillsync-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How SkillSync Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy to connect with mentors and learners, 
            schedule sessions, and grow your skills through personalized guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${step.color} text-white p-4 rounded-full mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
