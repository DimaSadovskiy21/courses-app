import { Menu } from "../Menu/Menu";
import { SidebarPropsType } from "./Sidebar.props";
import LogoIcon from "../logo.svg";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Search } from "../../components/Search/Search";

export const Sidebar = ({className ,...props}: SidebarPropsType): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <LogoIcon className={styles.logo}/>
            <Search/>
            <Menu/>
        </div>
    );
};