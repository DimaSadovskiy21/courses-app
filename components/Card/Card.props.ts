import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: 'white' | 'blue';
    children: ReactNode;
}