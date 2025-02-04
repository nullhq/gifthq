// Path: src/pages/Success/Success.tsx
// Success page where we'll display a success message after the user has bought or receive a gift.

import styles from "./Success.module.css";
import Lottie from "../../components/Lottie/Lottie";
import Notification from "../../components/Notification/Notification";

function Success () {
    const successEffect = new URL("../../assets/lotties/gifts/effect-gift-purchased.json", import.meta.url).href;
    const pot = new URL("../../assets/lotties/gifts/gift-pot-15.lottie", import.meta.url).href;

    return (
        <div className={styles.success}>
            <div className={styles.success_gift}>
                <div className={styles.success_gift_lottie_ctn}>
                    <Lottie path={successEffect} isActive={true} autoplay={true} style={{
                        width: "305px",
                        height: "350px",
                        position: "absolute",
                    }} />
                    <Lottie path={pot} isActive={true} autoplay={true} style={{ 
                        width: "150px",
                        height: "150px",
                    }}/>

                </div>
                <div className={styles.success_gift_description}>
                    <h1>Gift Purchased</h1>
                    <p className={styles.description}>The Delicious Cake gift was purchased for 10 USDT.</p>
                </div>
            </div>
            <Notification />
        </div>
    );
}

export default Success;