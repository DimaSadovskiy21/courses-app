import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";


export interface ButtonPropsType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'ghost',
    children: ReactNode,
}