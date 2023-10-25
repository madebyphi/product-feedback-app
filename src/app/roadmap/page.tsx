"use client";

import useSWR from "swr";
import CategoryCard from "@/components/composed/CategoryCard";
import FeedbackBar from "@/components/composed/FeedbackBar";
import RoadmapCard from "@/components/composed/RoadmapCard";
import SuggestionCard from "@/components/composed/SuggestionCard";
import TitleCard from "@/components/composed/TitleCard";
import { DragEventHandler, RefObject, useRef, useState } from "react";
import { ProductRequest } from "@/types";
import { Svg } from "@/components/Svg";
import Button from "@/components/Button";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import Spacer from "@/components/Spacer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Card: React.FC<{ boundary: RefObject<Element> }> = ({ boundary }) => {
  return (
    <div
      className="active:animate-pulse  flex flex-col rounded-[0.3125rem] border-t-orange border-t-[0.375rem] pt-[1.25rem] pb-[1.5rem] px-[1.25rem] bg-white"
      draggable
      // drag
      // dragConstraints={boundary}
    >
      {/* status */}
      <div className="flex gap-[1rem] items-center">
        <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-orange"></div>
        <p className="font-normal text-gray-3 text-[0.8125rem] leading-[1.1875rem] lg:text-[1rem] lg:leading-[1.4375rem] tracking-[0rem]">
          Planned
        </p>
      </div>
      <Spacer axis="vertical" size={14} />
      {/* title and description */}
      <div className="flex flex-col gap-[0.5625rem]">
        <p className="font-bold text-dark-1 text-[0.8125rem] leading-[1.1875rem] tracking-[-0.01125rem] lg:text-[1.125rem] lg:leading-[1.4375rem] lg:tracking-[-0.015625rem]">
          More comprehensive reports
        </p>
        <p className="font-normal text-gray-3 text-[0.8125rem] leading-[1.1875rem] lg:text-[1rem] lg:leading-[1.4375rem] tracking-[0rem]">
          It would be great to see a more detailed breakdown of solutions.
        </p>
      </div>
      <Spacer axis="vertical" size={24} />
      {/* category */}
      <p className="font-semibold text-[0.8125rem] leading-[1.1875rem] tracking-[0px] bg-gray-2 text-blue hover:bg-[#CFD7FF] hover:text-blue data-[state=on]:bg-blue data-[state=on]:text-white rounded-[0.625rem] px-[1rem] py-[0.375rem] self-start capitalize">
        Feature
      </p>
      <Spacer axis="vertical" size={16} />
      {/* upvote and comments */}
      <div className="flex justify-between">
        <Toggle className="flex h-auto self-start gap-[0.5rem] bg-gray-2 [&>p]:text-dark-1 [&>svg]:stroke-blue hover:bg-[#CFD7FF] data-[state=on]:bg-blue [&>p]:data-[state=on]:text-white [&>svg]:data-[state=on]:stroke-white font-semibold rounded-[0.625rem] pl-[16px] pr-[13px] py-[7px]">
          {/* <ChevronUp /> */}
          <Svg name="up-arrow" className="shrink-0" />
          <p className="font-bold text-[0.8125rem] leading-[1.1875rem] tracking-[-0.01125rem]">
            123
          </p>
        </Toggle>
        <div className="flex gap-[0.5rem] text-dark-1 items-center">
          <Svg name="comments" />
          <p className="font-bold text-[1rem] leading-[1.4375rem] tracking-[0.01375rem]">
            2
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Roadmap() {
  const router = useRouter();
  const handleDragOver: DragEventHandler = (e) => {
    // console.log(e);
  };
  const lanesRef = useRef(null);
  return (
    <div className="flex justify-center bg-gray-1 pb-[55px] md:pt-[5.875rem] md:pb-[8rem] h-full  ">
      <div className="px-0 lg:w-[1110px] md:w-[689px] w-full flex gap-[1.875rem] lg:flex-row lg:px-[3rem] flex-col">
        <div className="flex flex-col gap-[3rem] w-full mt-[4.5rem] md:mt-0">
          {/* Topbar Section */}
          <section className="flex items-center bg-dark-1 w-full md:rounded-[0.625rem] px-[2rem] py-[1.6875rem] justify-between">
            <div className="flex flex-col gap-[0.25rem]">
              <Link
                onClick={() => router.back()}
                href={""}
                className="flex items-center gap-[16px]"
              >
                <Svg name="left-arrow" className="stroke-white" />
                <p className="font-bold text-[0.8125rem] leading-[1.1875rem] text-white">
                  Go Back
                </p>
              </Link>
              <h1 className="font-bold text-white text-[1.5rem] tracking-[-0.020625rem] leading-[2.1875rem]">
                Roadmap
              </h1>
            </div>
            <Button text="+ Add Feedback" />
          </section>
          {/* Lanes */}
          <section className="flex gap-[0.625rem]" ref={lanesRef}>
            {/* full lane */}
            <div className="flex flex-col gap-[1.5rem] w-full">
              {/* title and subtitle */}
              <div className="flex flex-col gap-[0.25rem]">
                <p className="font-bold text-dark-1 text-[0.875rem] leading-[1.25rem] tracking-[-0.011875rem] lg:text-[1.125rem] lg:leading-[1.4375rem] lg:tracking-[-0.015625rem]">
                  Planned (2)
                </p>
                <p className="font-normal text-gray-3 text-[0.875rem] leading-[1.25rem] lg:text-[1rem] lg:leading-[1.4375rem] tracking-[0rem]">
                  Ideas prioritized for research
                </p>
              </div>
              {/* Card lane */}
              <div className="flex flex-col" onDragOver={handleDragOver}>
                <Card boundary={lanesRef} />
              </div>
            </div>
            {/* full lane */}
            <div className="flex flex-col gap-[1.5rem] w-full">
              {/* title and subtitle */}
              <div className="flex flex-col gap-[0.25rem]">
                <p className="font-bold text-dark-1 text-[0.875rem] leading-[1.25rem] tracking-[-0.011875rem] lg:text-[1.125rem] lg:leading-[1.4375rem] lg:tracking-[-0.015625rem]">
                  In-Progress (3)
                </p>
                <p className="font-normal text-gray-3 text-[0.875rem] leading-[1.25rem] lg:text-[1rem] lg:leading-[1.4375rem] tracking-[0rem]">
                  Currently being developed
                </p>
              </div>
              {/* Card lane */}
              <div className="flex flex-col" onDragOver={handleDragOver}>
                <Card boundary={lanesRef} />
              </div>
            </div>
            {/* full lane */}
            <div className="flex flex-col gap-[1.5rem] w-full">
              {/* title and subtitle */}
              <div className="flex flex-col gap-[0.25rem]">
                <p className="font-bold text-dark-1 text-[0.875rem] leading-[1.25rem] tracking-[-0.011875rem] lg:text-[1.125rem] lg:leading-[1.4375rem] lg:tracking-[-0.015625rem]">
                  Live (1)
                </p>
                <p className="font-normal text-gray-3 text-[0.875rem] leading-[1.25rem] lg:text-[1rem] lg:leading-[1.4375rem] tracking-[0rem]">
                  Released features
                </p>
              </div>
              {/* Card lane */}
              <div className="flex flex-col" onDragOver={handleDragOver}>
                <Card boundary={lanesRef} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
