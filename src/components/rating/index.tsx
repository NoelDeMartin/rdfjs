import {BsFillHeartFill, BsHeart} from "react-icons/bs";
import styles from "./style.module.css";

interface Props {
    rating: 1 | 2 | 3 | 4 | 5;
}

export default function Rating({rating}: Props) {
    const stars = Array.from(Array(5)).map((_, index) => index < rating)
    return <span className={styles.rating}>
        {stars.map((isRated) => isRated ?
            <BsFillHeartFill className={styles.icon}/> :
            <BsHeart className={styles.icon}/>
        )}
    </span>;
}