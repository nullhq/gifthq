// Path: src/components/Notification/Notification.tsx
// Notification component where we'll display a notification message on the success page.

import styles from "./Notification.module.css";
import Lottie from "../Lottie/Lottie";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";


function Notification () {
    const [visible, setVisible] = useState(false);

    const pot = new URL("../../assets/lotties/gifts/gift-pot-15.lottie", import.meta.url).href;

    useEffect(() => {
        setVisible(true);
    }, []);

    return createPortal(
        <div className={`${styles.notification} ${visible ? styles.show : styles.hide}`}>
            <div className={styles.notification_icon}>
                <Lottie path={pot} isActive={true} autoplay={true} loop={true} />
            </div>
            <div className={styles.notification_content}>
                <div className={styles.notification_message}>
                    <h1 className={styles.title}>Notification</h1>
                    <p className={styles.description}>Notification's description.</p>
                </div>
                <div className={styles.notification_action}>Send</div>
            </div>
        </div>,
    document.body);
}

export default Notification;