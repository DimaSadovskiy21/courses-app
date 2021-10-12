import { ProductModel } from './../../interface/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel;
  
}