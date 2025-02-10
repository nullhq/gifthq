// Path: src/components/Task/Task.tsx
// Task component that will display the tasks on our Earn page.

import styles from "./Task.module.css";
import tgstar from "../../assets/SVGs/telegram-stars.svg";

function Task () {
    return (
        <div className={styles.earn_task}>
            <img className={styles.earn_task_icon} src={tgstar} alt="Task Ico"/>
            <div className={styles.earn_task_content}>
                <div className={styles.earn_task_textcontent}>
                    <h1>Task</h1>
                    <p>Task's price.</p>
                </div>
                <div className={styles.earn_task_start_claim}>Start</div>
            </div>
        </div>
    );
}


export default Task;