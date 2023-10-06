"use client";

import useSWR from "swr";
import CategoryCard from "@/components/composed/CategoryCard";
import FeedbackBar from "@/components/composed/FeedbackBar";
import RoadmapCard from "@/components/composed/RoadmapCard";
import SuggestionCard from "@/components/composed/SuggestionCard";
import TitleCard from "@/components/composed/TitleCard";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductRequest } from "@/types";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Suggestions() {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuClick = (e: React.SyntheticEvent, isOpened: boolean) => {
    setOpen(isOpened ? false : true);
  };

  const [count, setCount] = useState(99);
  const { data, error } = useSWR("/api/staticdata", fetcher);
  //Handle the error state
  if (error) {
    return <div>Failed to load</div>;
  }
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  const db = JSON.parse(data);
  console.log(db);
  return (
    <div className="flex justify-center bg-gray-1 md:pt-[5.875rem] md:pb-[8rem]  ">
      <div className="px-0 lg:w-[1110px] md:w-[700px] w-full flex gap-[1.875rem] lg:flex-row lg:px-[3rem] md:flex-col flex-col">
        {/*Left Column*/}
        <aside className="lg:w-[15.9375rem] flex lg:flex-col lg:gap-[2rem] md:gap-[0.675rem] w-full md:flex-row flex-col absolute md:relative h-full">
          <span className="md:w-[33%] lg:w-full">
            <TitleCard open={open} handleClick={handleMenuClick} />
          </span>
          <span
            className={`${
              open ? "flex" : "hidden"
            } md:flex flex-row h-full md:w-[66%] lg:w-full`}
          >
            <span className="bg-[#000]/[.30] w-full md:hidden"></span>
            <span className="bg-gray-1 pt-[1.5rem] px-[1.5rem] max-w-[70%] min-w-[271px] md:pt-0 md:px-0 md:max-w-none md:min-w-0">
              <span className="flex flex-col self-start gap-[1.5rem] md:flex-row md:gap-[0.675rem] lg:flex-col">
                <CategoryCard />
                <RoadmapCard />
              </span>
            </span>
          </span>
        </aside>
        {/* Right Column */}
        <div className="lg:w-[51.5625rem] flex flex-col gap-[1.5rem] w-full mt-[4.5rem] md:mt-0">
          <FeedbackBar />
          <div className="flex flex-col gap-[1.25rem]">
            {db.productRequests.map((suggestion: ProductRequest) => (
              <SuggestionCard key={suggestion.id} suggestion={suggestion} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
