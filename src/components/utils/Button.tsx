'use client'

type ButtonColor = "purple" | "blue" | "dark-1" | "red"

interface ButtonProps {
    color?: ButtonColor
    text: string
}

export default function Button(props: ButtonProps){
    let { color='purple', text } = props;

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
    return (
        <button 
            className={`${colors[color]} ${hoverColors[color]} color-[#FFFFFF] w-[158px] font-bold text-[0.875rem] leading-[1.25rem] rounded-[0.625rem] py-[12px]`} 
            onClick={() => console.log('milk')}
        >
            {props.text}
        </button>
    );
}