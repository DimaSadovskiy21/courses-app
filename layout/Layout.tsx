import { FunctionComponent, useRef, useState, KeyboardEvent } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutPropsType } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import cn from "classnames";
import styles from "./Layout.module.css";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components/Up/Up";


const Layout = ({ children }: LayoutPropsType): JSX.Element => {

    const [isSkipLinkDisplayed, setIsLinkDisplayed] = useState<boolean>(false);

    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key: KeyboardEvent) => {
        if(key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsLinkDisplayed(false);
    };
    return (
        <div className={styles.wrapper}>
            <a 
            onFocus={() => setIsLinkDisplayed(true)}
            tabIndex={1}
            className={cn(styles.skipLink, {
                [styles.displayed]: isSkipLinkDisplayed
            })}
            onKeyDown={(key: KeyboardEvent) => skipContentAction(key)}
            >Сразу к содержанию</a>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main className={styles.body} ref={bodyRef} tabIndex={0} role='main'>
                {children}
            </main>
            <Footer className={styles.footer}/>
            <Up/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props} />
            </Layout>
            </AppContextProvider>
        );
    };
};