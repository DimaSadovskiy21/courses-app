import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface ReviewFormPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: string;
    isOpened: boolean;
}