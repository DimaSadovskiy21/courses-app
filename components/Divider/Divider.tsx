import { DividerPropsType } from "./Divider.props";
import styles from "./Divider.module.css";
import cn from "classnames";

export const Divider = ({className, ...props}:DividerPropsType):JSX.Element => {
    return <hr className={cn(styles.hr, className)} {...props}/>;
};