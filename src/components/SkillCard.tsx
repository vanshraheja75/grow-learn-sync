
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";

interface SkillCardProps {
  name: string;
  category: string;
  mentorCount: number;
  isTrending?: boolean;
  icon?: string;
}

const SkillCard = ({ name, category, mentorCount, isTrending = false, icon }: SkillCardProps) => {
  return (
    <Card className="hover-scale card-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center p-4 gap-4">
          <div className="h-12 w-12 rounded-lg bg-skillsync-lightGray flex items-center justify-center text-skillsync-primary">
            {icon ? (
              <img src={icon} alt={name} className="h-6 w-6" />
            ) : (
              <div className="text-xl font-bold">{name.charAt(0)}</div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{name}</h3>
              {isTrending && (
                <Badge variant="outline" className="bg-skillsync-accent/10 text-skillsync-teal border-skillsync-teal flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> Trending
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{category}</p>
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <Users className="h-3 w-3 mr-1" />
              <span>{mentorCount} mentors available</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
