// Path: src/components/FrensItem/FrensItem.tsx
// Frens item component that will be displaying on our profile pages.

import styles from "./FrensItem.module.css";
import fredy from "../../assets/SVGs/Itsfredy.jpg";

function FrensItem () {
    return (
        <div className={styles.frens_item}>
            <div className={styles.frens_item_profile} style={{backgroundImage: `url(${fredy})`}}></div>
                <div className={styles.frens_item_name_gifts_rank}>
                    <div className={styles.frens_item_name_gifts}>
                        <h2 className={styles.frens_item_name}>
                            Name
                        </h2>
                        <p className={styles.frens_item_gifts}>Gifts Received</p>
                    </div>
            </div>
        </div>
    );
}

export default FrensItem;