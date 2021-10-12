import { TagPropsType } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({size, color, children, href, className, ...props}: TagPropsType): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.small]: size === 'small',
            [styles.large]: size === 'large',
            [styles.gray]: color === 'gray',
            [styles.ghost]: color === 'ghost',
            [styles.green]: color === 'green',
            [styles.red]: color === 'red',
            [styles.primary]: color === 'primary', 
        })} {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};