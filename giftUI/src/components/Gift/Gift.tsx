// Path: src/components/Gift/Gift.tsx
// The Gift component will be responsible for displaying a single gift.

import styles from "./Gift.module.css";
import Lottie from "../Lottie/Lottie";
import star from "../../assets/SVGs/telegram-stars.svg";

interface IGift {
    lottiePath: string;
    price: number;
}

function Gift ({ lottiePath, price }: IGift) {
    return (
        <div className={styles.gift}>
            <Lottie path={lottiePath} isActive={true} autoplay={true} loop={false} style={{ width:"100%"}}/>
            <div className={styles.gift_buy}>
                <img src={star} alt="star" />
                <p>{price}</p>
            </div>
        </div>
    );
}

export default Gift;