import cn from "classnames";
import { HeaderPropsType } from "./Header.props";
import styles from "./Header.module.css";
import LogoIcon from "./../logo.svg";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { motion, useReducedMotion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";



export const Header = ({className, ...props}:HeaderPropsType): JSX.Element => {

    const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

    const router = useRouter();

    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        setIsOpenedMenu(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: shouldReduceMotion ? 1 : 0,
            x: '100%'
        }
    };

    return (
        <header className={cn(styles.header, className)} {...props}>
            <LogoIcon/>
            <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpenedMenu(true)}/>
            <motion.div
            variants={variants}
            initial={'closed'}
            animate={isOpenedMenu ? 'opened' : 'closed'} 
            className={styles.mobileMenu}>
                <Sidebar/>
                <ButtonIcon className={styles.close} appearance='primary' icon='close' onClick={() => setIsOpenedMenu(false)}/>
            </motion.div>
        </header>
    );
};