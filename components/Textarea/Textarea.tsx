import { TextareaPropsType } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef(({className, error, ...props}:TextareaPropsType, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
    return <div className={cn(styles.textareaWrapper, className)}>
        <textarea className={cn(styles.textarea, {
            [styles.error]: error
        })} {...props} ref={ref}/>
        {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>;   
});