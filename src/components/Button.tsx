'use client'

import { ChevronLeftIcon } from "@radix-ui/react-icons"

type ButtonColor = "purple" | "blue" | "dark-1" | "red"
type As = "link" | "button"

interface ButtonProps {
    color?: ButtonColor
    text: string
    hasLeftIcon?: boolean
    as?: As
}

export default function Button(props: ButtonProps){
    let { color='purple', text, hasLeftIcon=false, as='button' } = props;

    let colors = {
        'purple': 'bg-purple',
        'blue': 'bg-blue',
        'dark-1': 'bg-dark-1',
        'red': 'bg-red',
    }

    let hoverColors = {
        'purple': 'hover:bg-[#C75AF6]',
        'blue': 'hover:bg-[#7C91F9]',
        'dark-1': 'hover:bg-[#656EA3]',
        'red': 'hover:bg-[#E98888]',
    }

    if (as === 'link') {
        return (
            <button
                className={`flex items-center justify-center gap-[0.9rem] p-0 cursor-pointer`}
            >
                { hasLeftIcon &&
                    <ChevronLeftIcon color="#4661E6"/>
                }
                <span className="color-gray-3 font-bold text-[0.875rem] leading-[1.25rem] capitalize hover:underline">
                    {props.text}
                </span>
            </button>
        )
    }
    
    return (
        <button 
            className={`flex items-center gap-[0.9rem] justify-center ${colors[color]} ${hoverColors[color]} color-[#FFFFFF] w-[158px] font-bold text-[0.875rem] leading-[1.25rem] rounded-[0.625rem] py-[12px] capitalize cursor-pointer`} 
            onClick={() => console.log('milk')}
        >
            { hasLeftIcon &&
                <ChevronLeftIcon/>
            }
            <span>
                {props.text}
            </span>
        </button>
    );
}