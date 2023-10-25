"use client";

import Button from "@/components/Button";
import Spacer from "@/components/Spacer";
import { Svg } from "@/components/Svg";
import { categories } from "@/components/composed/CategoryCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function NewFeedback() {
  const router = useRouter();
  return (
    <div className="flex justify-center bg-gray-1 pb-[55px] pt-[2.125rem] md:pt-[5.875rem] md:pb-[8rem] h-full">
      <div className="flex flex-col items-center px-[1.5rem] md:px-0 md:w-[540px] w-full gap-[55px]">
        <div className="flex w-full">
          <Link
            href={""}
            onClick={() => router.back()}
            className="flex items-center gap-[16px]"
          >
            <Svg name="left-arrow" className="stroke-blue" />
            <p className="font-bold text-[0.8125rem] leading-[1.1875rem] text-gray-3">
              Go Back
            </p>
          </Link>
        </div>
        {/* Card */}
        <div className="relative w-full px-[24px] pb-[24px] md:pb-[40px] pt-[52px] md:pt-[52px] rounded-[10px] bg-white">
          <Svg name="new-feedback" className="absolute top-[-28px]" />
          <h1 className="font-bold text-[1.125rem] md:text-[1.5rem] leading-[1.625rem] md:leading-[2.1875rem] tracking-[-0.25px] md:tracking-[-0.33px] text-dark-1">
            Create New Feedback
          </h1>
          <Spacer axis="vertical" size={40} />
          {/* form */}
          <div className="flex flex-col gap-[1.5rem]">
            {/* Form Input */}
            <div className="flex flex-col gap-[1rem]">
              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[2px]">
                <p className="text-dark-1 font-bold text-[0.8125rem] leading-[1.1875rem] tracking-[0.01125rem] md:text-[0.875rem] md:leading-[1.25rem] md:tracking-[-0.011875rem]">
                  Feedback Title
                </p>
                <p className="text-gray-3 font-normal text-[0.8125rem] leading-[1.1875rem] tracking-[0rem] md:text-[0.875rem] md:leading-[1.25rem]">
                  Add a short, descriptive headline
                </p>
              </div>
              {/* Input */}
              <Input className="bg-gray-1 text-dark-1 text-[0.9375rem] leading-[1.375rem] tracking-[0px] rounded-[5px] py-[0.8125rem] px-[1.5rem]" />
            </div>
            {/* Form Input */}
            <div className="flex flex-col gap-[1rem]">
              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[2px]">
                <p className="text-dark-1 font-bold text-[0.8125rem] leading-[1.1875rem] tracking-[0.01125rem] md:text-[0.875rem] md:leading-[1.25rem] md:tracking-[-0.011875rem]">
                  Category
                </p>
                <p className="text-gray-3 font-normal text-[0.8125rem] leading-[1.1875rem] tracking-[0rem] md:text-[0.875rem] md:leading-[1.25rem]">
                  Choose a category for your feedback
                </p>
              </div>
              {/* Input */}
              <Select defaultValue={"feature"}>
                <SelectTrigger
                  aria-labelledby="sort-label"
                  className="rounded-[0.3125rem] px-[1.5rem] bg-gray-1 text-dark-1 text-[0.875rem] leading-[1.25rem] capitalize [&>svg]:stroke-blue"
                >
                  <SelectValue placeholder={"feature"} />
                </SelectTrigger>
                <SelectContent className="text-[1rem] leading-[1.4375rem] mt-[1rem] capitalize">
                  <SelectGroup>
                    {categories.map((item: string, index: number, arr) => {
                      return (
                        <Fragment key={item}>
                          <SelectItem className="px-[1.5rem]" value={item}>
                            {item}
                          </SelectItem>
                          {arr.length > index + 1 && <SelectSeparator />}
                        </Fragment>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Form Input */}
            <div className="flex flex-col gap-[1rem]">
              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[2px]">
                <p className="text-dark-1 font-bold text-[0.8125rem] leading-[1.1875rem] tracking-[0.01125rem] md:text-[0.875rem] md:leading-[1.25rem] md:tracking-[-0.011875rem]">
                  Feedback Detail
                </p>
                <p className="text-gray-3 font-normal text-[0.8125rem] leading-[1.1875rem] tracking-[0rem] md:text-[0.875rem] md:leading-[1.25rem]">
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
              </div>
              {/* Input */}
              <Textarea className="bg-gray-1 text-dark-1 text-[0.9375rem] leading-[1.375rem] tracking-[0px] rounded-[5px] py-[0.8125rem] px-[1.5rem]" />
            </div>
            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row w-full justify-end gap-[1rem] pt-[1rem] sm:pt-[0.5rem]">
              <Button color="dark-1" text="Cancel" />
              <Button color="purple" text="Add Feedback" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
