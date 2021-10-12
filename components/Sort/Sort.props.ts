import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SortPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum
    setSort: (sort: SortEnum) => void
}

export enum SortEnum {
    Rating,
    Price
}