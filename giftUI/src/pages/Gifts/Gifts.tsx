// Path: src/pages/Gifts/Gifts.tsx
// Gifts pages where w'll display all gifts already bought by the user.

import styles from "./Gifts.module.css";
// import Empty from "../../components/Empty/Empty";
import GiftPurchased from "../../components/GiftPurchased/GiftPurchased";

function Gifts () {
    return (
        <div className={styles.gifts}>
            <div className={styles.gifts_header}>
                <h1>Send Gifts in Telegram</h1>
                <p>Send gifts to users that can be stored in their app profile and earn $GIFT.</p>
            </div>

            <div className={styles.gifts_available_to_be_send_or_empty_case}>
                <div className={styles.gifts_available_to_be_send}>
                    <GiftPurchased />
                    <GiftPurchased />
                    <GiftPurchased />
                    <GiftPurchased />
                    <GiftPurchased />
                    <GiftPurchased />
                    <GiftPurchased />
                    <GiftPurchased />
                    <GiftPurchased />
                    <GiftPurchased />
                </div>
                {/* <Empty message="You don't have any gifts yet." goto="Open Store"/> */}
            </div>
        </div>
    );
}


export default Gifts;