import { ProductModel } from './../../interface/product.interface';
import { TopPageModel } from './../../interface/page.interface';
import { TopLevelCategory } from "../../interface/page.interface";

export interface TopPageComponentPropsType {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}