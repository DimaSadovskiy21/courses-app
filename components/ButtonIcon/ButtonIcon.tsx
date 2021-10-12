import styles from "./ButtonIcon.module.css";
import cn from "classnames";
import { ButtonIconPropsType, icons } from "./ButtonIcon.props";


export const ButtonIcon = ({appearance, icon, className, ...props}: ButtonIconPropsType):JSX.Element => {
    const IconComponents = icons[icon];
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.white]: appearance === 'white',
        })} {...props}>
            <IconComponents/>
        </button>
    );
};