// Path: src/pages/Leaderboard/Leaderboard.tsx
// Leaderboard component to display users and their ranks

import styles from "./Leaderboard.module.css";
import Search from "../../components/Search/Search";
import LeaderboardItem from "../../components/LeaderboardItem/LeaderboardItem";

function Leaderboard () {
    return (
        <div className={styles.leaderboard}>
            <Search />
            <div className={styles.leaderboard_items}>
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem itsCurrent={true}/>

            </div>
        </div>
    );
}

export default Leaderboard;