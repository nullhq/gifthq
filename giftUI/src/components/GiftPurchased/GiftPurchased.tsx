// Path: src/components/GiftPurchased/GiftPurchased.tsx
// Component who represent a gift that user is able to send.

import styles from "./GiftPurchased.module.css";
import Lottie from "../Lottie/Lottie";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { Drawer } from "vaul";

function GiftPurchased () {
    const icecream = new URL("../../assets/lotties/gifts/gift-icecream-25.lottie", import.meta.url).href;

    return (
        <div className={styles.gift_purchased}>
            <Lottie path={icecream} isActive={true} autoplay={true} style={{ width: "100%"}} />
            <Drawer.Root
                closeThreshold={0.5}
                modal={true}
                handleOnly={true}
                disablePreventScroll={true}>
                <Drawer.Trigger asChild={true} className={styles.gift_purchased_send_ctn}>
                    <button className={styles.gift_purchased_send}>
                        Send
                    </button>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className={styles.custom_overlay} />
                    <Drawer.Content
                        className={styles.gift_purchased_send_drawer}
                        onOpenAutoFocus={e => e.preventDefault()}>
                        <div data-vaul-no-drag className={styles.gift_purchased_about}>
                            <div className={styles.gift_purchased_animation}>
                                <Lottie path={icecream} autoplay={true} isActive={true} style={{
                                    width: "150px",
                                    height: "150px"
                                }} />
                            </div>
                            <Drawer.Title className={styles.gift_title}>Send Gift</Drawer.Title>
                            <Card />
                            <Button label="Send Gift to Contact" />
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

export default GiftPurchased;