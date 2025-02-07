import {Demo} from "../../constants.ts";
import styles from "./style.module.css";
import {clsx} from "clsx";
import {NavLink} from "react-router-dom";
import Card from "../card";

interface Props {
    list: Array<Demo>
}

export default function DemoList({list}: Props) {
    const demoList = list.filter(({library}) => library.published);
    return (
        <div className={styles.demoList}>
            <ul className={clsx("columns", styles.columns)}>
                {demoList.map(({title, subtitle, href, icon, iconAlt, slogan}) => (
                    <NavLink to={href} key={href} className={clsx("column", styles.column)}>
                        <Card>
                            <div className={clsx("card-content", styles.cardContent)}>
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image">
                                            <img src={icon} alt={iconAlt}/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">{title}</p>
                                        {subtitle && <p className="subtitle is-6">{subtitle}</p>}
                                    </div>
                                </div>
                                <div className="content">{slogan}</div>
                            </div>
                            <div className="card-footer">
                                <div className={clsx("card-footer-item button is-info", styles.link)}>
                                    Check out demo
                                </div>
                            </div>
                        </Card>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}