// Path: src/components/Empty/Empty.tsx
// Empty component will be displaying when thre is no data.

import styles from "./Empty.module.css";
import Lottie from "../Lottie/Lottie";

interface IEmpty {
    message: string;
    goto: string;
}

function Empty ({ message, goto }: IEmpty) {
    const gift = new URL("../../assets/lotties/tabs/tab-gifts.json", import.meta.url).href;

    return (
        <div className={styles.empty}>
            <Lottie path={gift} isActive={true} autoplay={true} style={{
                width: "auto",
                height: "80px"
            }} />
            <p className={styles.empty_message}>{message}</p>
            <p className={styles.empty_go_to}>{goto}</p>
        </div>
    );
}

export default Empty;