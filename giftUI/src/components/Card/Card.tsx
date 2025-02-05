// Path: src/components/Card/Card.tsx
// Card components to display informations table about gift.

import styles from "./Card.module.css";
import Row from "../Row/Row";
import { formatDate } from "../../utils/date";
import tgstar from "../../assets/SVGs/telegram-stars.svg";
import fredy from "../../assets/SVGs/Itsfredy.jpg";

function Card () {
    return (
        <div className={styles.card}>
            <Row label="From">
                <img 
                    src={fredy}
                    alt="User avatar" 
                    className={styles.card_avatar}
                    />
                <span className={styles.card_username}>It's Fredy</span>
            </Row>
            <Row label="Date">
                <span>{formatDate(Date.now())}</span>
            </Row>
            <Row label="Price">
                <img src={tgstar} className={styles.card_tgstar} alt="Telegram Star" />
                <span>10</span>
            </Row>
            <Row label="Availability">
                <span>10 of 400,000 left</span>
            </Row>
        </div>
    );
}

export default Card;