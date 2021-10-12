import { SearchPropsType } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import SearchIcon from "./search.svg";
import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/router";

export const Search = ({className, ...props}: SearchPropsType):JSX.Element => {

    const [search, setSearch] = useState('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e:KeyboardEvent) => {
        if(e.key == 'Enter') {
            goToSearch();
        }
    };
   

    return <form className={cn(styles.search, className)} {...props} role='search'>
        <Input 
        className={styles.input} placeholder="Поиск..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <Button 
        className={styles.button} 
        appearance='primary'
        onClick={goToSearch}
        aria-label={"Кнопка поиска"}>
            <SearchIcon />
        </Button>
    </form>;
};