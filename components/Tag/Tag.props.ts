import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: 'small' | 'large'
    children: ReactNode
    color: 'gray' | 'green' | 'red' | 'ghost' | 'primary'
    href?: string
}