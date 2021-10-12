import { ReviewModel } from './../../interface/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: ReviewModel;
}