"use client";

import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button as Btn } from "@/components/ui/button";
import { LucideIcon, ChevronDown } from "lucide-react";

type ButtonColor = "purple" | "blue" | "dark-1" | "red";
type As = "link" | "button";

type IconType = LucideIcon;
interface CommonButtonProps {
  color?: ButtonColor;
  text: string;
  as?: As;
}

type HasIconProps = CommonButtonProps & {
  hasLeftIcon: true;
  Icon: IconType;
};
type NoIconProps = CommonButtonProps & { hasLeftIcon?: false };

export default function Button(props: NoIconProps): JSX.Element;
export default function Button(props: HasIconProps): JSX.Element;
export default function Button(
  props: CommonButtonProps & { hasLeftIcon?: boolean; Icon?: IconType }
) {
  let {
    color = "purple",
    text,
    hasLeftIcon = false,
    as = "button",
    Icon = ChevronDown,
  } = props;

  let colors = {
    purple: "bg-purple",
    blue: "bg-blue",
    "dark-1": "bg-dark-1",
    red: "bg-red",
  };

  let hoverColors = {
    purple: "hover:bg-[#C75AF6]",
    blue: "hover:bg-[#7C91F9]",
    "dark-1": "hover:bg-[#656EA3]",
    red: "hover:bg-[#E98888]",
  };

  if (true) {
    return (
      <Btn
        className={`${colors[color]} ${hoverColors[color]} color-[#FFFFFF] font-bold text-[0.875rem] leading-[1.25rem] rounded-[0.625rem] px-[1rem] py-[10.5px] md:px-[1.5rem] md:py-[12px] capitalize cursor-pointer`}
      >
        {hasLeftIcon && <Icon />}
        {text}
      </Btn>
    );
  }

  if (as === "link") {
    return (
      <button
        className={`flex items-center justify-center gap-[0.9rem] p-0 cursor-pointer`}
      >
        {hasLeftIcon && <ChevronLeftIcon color="#4661E6" />}
        <span className="color-gray-3 font-bold text-[0.875rem] leading-[1.25rem] capitalize hover:underline">
          {props.text}
        </span>
      </button>
    );
  }

  return (
    <button
      className={`flex items-center gap-[0.9rem] justify-center ${colors[color]} ${hoverColors[color]} color-[#FFFFFF] w-[158px] font-bold text-[0.875rem] leading-[1.25rem] rounded-[0.625rem] py-[12px] capitalize cursor-pointer`}
      onClick={() => console.log("milk")}
    >
      {hasLeftIcon && <ChevronLeftIcon />}
      <span>{props.text}</span>
    </button>
  );
}
