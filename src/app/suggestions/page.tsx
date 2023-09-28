"use client";

import CategoryCard from "@/components/composed/CategoryCard";
import FeedbackBar from "@/components/composed/FeedbackBar";
import RoadmapCard from "@/components/composed/RoadmapCard";
import SuggestionCard from "@/components/composed/SuggestionCard";
import TitleCard from "@/components/composed/TitleCard";
import { Toggle } from "@/components/ui/toggle";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const suggestions = [
  {
    id: 0,
    count: 112,
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific task",
    category: "Enhancement",
    comments: 2,
  },
  {
    id: 1,
    count: 99,
    title: "Add a dark theme option",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    category: "Enhancement",
    comments: 4,
  },
  {
    id: 2,
    count: 65,
    title: "Q&A within the challenge hubs",
    description: "Challenge-specific Q&A would make for easy reference.",
    category: "Enhancement",
    comments: 1,
  },
];

export default function Suggestions() {
  const [count, setCount] = useState(99);
  return (
    <div className="flex justify-center bg-gray-1 pt-[5.875rem] pb-[8rem]">
      <div className="lg:w-[1110px] md:w-[700px] flex gap-[1.875rem] lg:flex-row lg:px-[3rem] md:flex-col">
        {/*Left Column*/}
        <div className="lg:w-[15.9375rem] flex lg:flex-col lg:gap-[2rem] md:gap-[0.675rem] w-full md:flex-row lg:justify-start md:justify-start">
          {/* <div className="w-[200px]"> */}
          <TitleCard />
          {/* </div> */}
          {/* <div className="w-[300px]"> */}
          <CategoryCard />
          {/* </div> */}
          {/* <div className="w-[200px]"> */}
          <RoadmapCard />
          {/* </div> */}
        </div>
        {/* Right Column */}
        <div className="lg:w-[51.5625rem] flex flex-col gap-[1.5rem] md:w-full">
          <FeedbackBar />
          <div className="flex flex-col gap-[1.25rem]">
            {suggestions.map((suggestion) => (
              <SuggestionCard key={suggestion.id} suggestion={suggestion} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
