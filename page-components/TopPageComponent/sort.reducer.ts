import { ProductModel } from './../../interface/product.interface';
import { SortEnum } from './../../components/Sort/Sort.props';

export type SortActionType = {type: SortEnum.Price} | {type: SortEnum.Rating} | {type: 'reset', initialState: ProductModel[]};

export interface SortReducerType {
    sort: SortEnum,
    products: ProductModel[],
}

export const sortReducer = (state: SortReducerType, action: SortActionType): SortReducerType => {
    switch(action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            };
        case 'reset':
                return {
                    sort: SortEnum.Rating,
                    products: action.initialState
                };
            default: 
            throw new Error("Неверный тип сортировки");
    }
};