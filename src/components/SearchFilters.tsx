
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X, Filter, Search as SearchIcon } from "lucide-react";
import { useState } from "react";

// Sample data for filter options
const languages = ["English", "Spanish", "French", "German", "Mandarin", "Japanese", "Portuguese"];
const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
const timeZones = [
  "GMT-12", "GMT-11", "GMT-10", "GMT-9", "GMT-8", "GMT-7", "GMT-6", 
  "GMT-5", "GMT-4", "GMT-3", "GMT-2", "GMT-1", "GMT", 
  "GMT+1", "GMT+2", "GMT+3", "GMT+4", "GMT+5", "GMT+6", 
  "GMT+7", "GMT+8", "GMT+9", "GMT+10", "GMT+11", "GMT+12"
];

const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([25, 100]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Handle adding a language filter
  const addLanguage = (language: string) => {
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };
  
  // Handle removing a language filter
  const removeLanguage = (language: string) => {
    setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            type="search" 
            placeholder="Search for skills, topics, or mentors..." 
            className="pl-10"
          />
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="h-4 w-4" /> 
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>
      
      {/* Selected Filters */}
      {selectedLanguages.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {selectedLanguages.map(language => (
            <Badge 
              key={language} 
              variant="secondary"
              className="flex items-center gap-1 bg-skillsync-lightGray"
            >
              {language}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => removeLanguage(language)} 
              />
            </Badge>
          ))}
          
          {selectedLanguages.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedLanguages([])}
              className="text-xs h-6 py-0 px-2 text-skillsync-primary hover:text-skillsync-teal"
            >
              Clear all filters
            </Button>
          )}
        </div>
      )}
      
      {/* Expanded Filters */}
      {isFilterOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t mt-4">
          {/* Price Range */}
          <div>
            <Label htmlFor="price-range" className="text-sm font-medium">
              Price Range ($/hour)
            </Label>
            <div className="mt-2">
              <Slider
                defaultValue={priceRange}
                min={0}
                max={200}
                step={5}
                onValueChange={(values) => setPriceRange(values)}
                className="mt-2"
              />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
          
          {/* Language Select */}
          <div>
            <Label htmlFor="language" className="text-sm font-medium">
              Language
            </Label>
            <Select 
              onValueChange={(value) => addLanguage(value)}
            >
              <SelectTrigger id="language" className="mt-2">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map(language => (
                  <SelectItem 
                    key={language} 
                    value={language}
                    disabled={selectedLanguages.includes(language)}
                  >
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Experience Level */}
          <div>
            <Label htmlFor="experience" className="text-sm font-medium">
              Experience Level
            </Label>
            <Select>
              <SelectTrigger id="experience" className="mt-2">
                <SelectValue placeholder="Any level" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map(level => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Time Zone */}
          <div>
            <Label htmlFor="timezone" className="text-sm font-medium">
              Time Zone
            </Label>
            <Select>
              <SelectTrigger id="timezone" className="mt-2">
                <SelectValue placeholder="Any time zone" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {timeZones.map(zone => (
                  <SelectItem key={zone} value={zone}>
                    {zone}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
