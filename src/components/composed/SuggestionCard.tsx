import { Toggle } from "@/components/ui/toggle";
import { ChevronUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import Text from "@/components/Text";
// {
//   id: 0,
//   count: 112,
//   title: "Add tags for solutions",
//   description: "Easier to search for solutions based on a specific task",
//   category: "Enhancement",
//   comments: 2,
// },

export default function SuggestionCard(props: any) {
  const { suggestion } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="flex bg-white px-[2rem] py-[1.75rem] rounded-[0.625rem] justify-between">
      <div className="flex gap-[2.5rem]">
        <Toggle className="flex flex-col gap-[0.5rem] h-[53px] bg-gray-2 first:text-blue [&>p]:text-dark-1 hover:bg-[#CFD7FF] hover:text-blue data-[state=on]:bg-blue data-[state=on]:text-white  [&>p]:data-[state=on]:text-white font-semibold rounded-[0.625rem] px-[0.6875rem] pb-[0.5rem] pt-[0.875rem]">
          <ChevronUp />
          <p className="font-bold text-[0.8125rem] leading-[1.1875rem] tracking-[-0.01125rem]">
            {count | suggestion.count}
          </p>
        </Toggle>
        <div className="flex flex-col gap-[0.75rem] ">
          <div className="flex flex-col gap-[0.25rem] ">
            <h3 className="font-bold text-[1.125rem] tracking-[-0.01375em] leading-[1.625rem] text-dark-1">
              {suggestion.title}
            </h3>
            <p className="font-normal text-[1rem] leading-[1.4375rem] text-gray-3">
              {suggestion.description}
            </p>
          </div>
          <Toggle className="bg-gray-2 text-blue hover:bg-[#CFD7FF] hover:text-blue data-[state=on]:bg-blue data-[state=on]:text-white font-semibold rounded-[0.625rem] px-[1rem] py-[0.375rem] self-start">
            <Text as="Body 3" content={suggestion.category} />
          </Toggle>
        </div>
      </div>
      <div className="flex gap-[0.5rem] text-dark-1 self-center">
        <MessageCircle className="text-[#CDD2EE]" />
        <p className="font-bold text-[1rem] leading-[1.4375rem] tracking-[0.01375rem]">
          {suggestion.comments}
        </p>
      </div>
    </div>
  );
}
