import { SortEnum, SortPropsType } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "./sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: SortPropsType): JSX.Element => {
    return <div className={cn(styles.sort, className)} {...props}>
        <div className={styles.sortName} id="sort">Сортировка</div>
        <button id="Rating" tabIndex={0} onClick={() => setSort(SortEnum.Rating)}
            className={cn({
                [styles.active]: sort == SortEnum.Rating
            })}
            aria-selected={sort == SortEnum.Rating}
            aria-labelledby="sort Rating"
        >
            <SortIcon className={styles.sortIcon} />
            По рейтингу
        </button>
        <button id="Price" tabIndex={0} onClick={() => setSort(SortEnum.Price)}
            className={cn({
                [styles.active]: sort == SortEnum.Price
            })}
            aria-selected={sort == SortEnum.Price}
            aria-labelledby="sort Price"
        >
            <SortIcon className={styles.sortIcon} />
            По цене
        </button>
    </div>;
};