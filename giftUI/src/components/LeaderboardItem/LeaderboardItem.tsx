// Path: src/components/LeaderboardItem/LeaderboardItem.tsx
// Leaderboard item component that displays the user's rank, name, and gifts received

import styles from "./LeaderboardItem.module.css";
import fredy from "../../assets/SVGs/Itsfredy.jpg";

interface ICurrent {
    itsCurrent?: boolean;
}

function LeaderboardItem ({itsCurrent}: ICurrent) {
    return (
        <div className={`${styles.leaderboard_item} ${itsCurrent && styles.leaderboard_item_its_current_user}` } >
            <div className={styles.leaderboard_item_profile} style={{backgroundImage: `url(${fredy})`}}></div>
            <div className={styles.leaderboard_item_name_gifts_rank}>
                <div className={styles.leaderboard_item_name_gifts}>
                    <h2 className={styles.leaderboard_item_name}>
                        Name
                        {itsCurrent && <span className={styles.leaderboard_item_tag_currentuser}>You</span>}
                    </h2>
                    <p className={styles.leaderboard_item_gifts}>Gifts Received</p>
                </div>
                <p className={styles.leaderboard_item_rank}>#5</p>
            </div>
        </div>
    );
}

export default LeaderboardItem;