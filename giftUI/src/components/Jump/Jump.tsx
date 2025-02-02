// Path: src/components/Jump/Jump.tsx

import Lottie from "../Lottie/Lottie";
import styles from "./Jump.module.css";

function Jump () {
    return (
        <div className={styles.jump}>
            <div className={styles.jump_to}>
                <Lottie />
                <p>Hey, what's up ?</p>
            </div>
        </div>
    );
}

export default Jump;