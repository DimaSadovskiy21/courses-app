import styles from "./Up.module.css";
import { motion, useAnimation } from "framer-motion";
import { useScrollY } from "../../hooks/useScrollY";
import { useEffect, KeyboardEvent } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = ():JSX.Element => {

   const controls = useAnimation();
   const y = useScrollY();

   useEffect(()=>{
    controls.start({ opacity: y / document.body.scrollHeight});
   },[y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const scrollToTopEnter = (key:KeyboardEvent) => {
        if(key.code == 'Enter') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } 
    };


    return <motion.div 
    className={styles.up} 
    animate={controls}
    initial={{opacity: 0}}
    tabIndex={0}
    onKeyDown={(key:KeyboardEvent) => scrollToTopEnter(key)}
    >
        <ButtonIcon appearance='primary' icon='up' aria-label={"Наверх"} onClick={scrollToTop}/>
    </motion.div>;
};