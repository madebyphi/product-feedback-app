import { Fragment } from "react";
import Button from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import Text from "@/components/Text";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";

import { Svg } from "@/components/Svg";

const options = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

export default function FeedbackBar() {
  return (
    <div className="flex items-center bg-dark-1 w-full md:rounded-[0.625rem] pl-[1.5rem] py-[0.875rem] pr-[1rem] justify-between">
      <div className="flex gap-[2.375rem] items-center">
        <div className="hidden md:flex gap-[1rem]">
          {/* <AwardIcon /> */}
          <Svg name="suggestions" />
          <Text as="H3" content={`6 Suggestions`} />
        </div>
        {/* <Dropdown items={options} placeholder="change this" /> */}
        <div className="flex items-center gap-[0.3rem]">
          <p
            id="sort-label"
            className="font-normal text-[0.875rem] leading-[1.25rem]"
          >
            Sort by :
          </p>
          <Select defaultValue={"Most Upvotes"}>
            <SelectTrigger
              aria-labelledby="sort-label"
              className="w-[7rem]  font-bold rounded-[0.3125rem] bg-transparent border-0 px-0 text-[0.875rem] leading-[1.25rem]"
            >
              <SelectValue placeholder={"Most Upvotes"} />
            </SelectTrigger>
            <SelectContent className="text-[1rem] leading-[1.4375rem] mt-[1.875rem]">
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {options.map((item: string, index: number, arr) => {
                  return (
                    <Fragment key={item}>
                      <SelectItem value={item}>{item}</SelectItem>
                      {arr.length > index + 1 && <SelectSeparator />}
                    </Fragment>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button text="+ Add Feedback" />
    </div>
  );
}
