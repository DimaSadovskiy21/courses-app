import AdvantageIcon from "./advantage.svg";
import { AdvantagesType } from "./Advantages.props";
import styles from "./Advantages.module.css";

export const Advantages = ({advantages}:AdvantagesType):JSX.Element => {
    return <>
        {advantages.map(a => (
            <div key={a._id} className={styles.advantage}>
                <AdvantageIcon/>
                <div className={styles.title}>{a.title}</div>
                <hr className={styles.vline}/>
                <div>{a.description}</div>
            </div>
        ))}
        </>;
};