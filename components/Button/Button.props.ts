import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";


export interface ButtonPropsType extends 
Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
"onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"> {
    appearance: 'primary' | 'ghost',
    children: ReactNode,
    arrow?: 'right' | 'down' | 'none',
}