// Path: src/components/GiftReceived/GiftReceived.tsx
// Gift received component that will be displaying on our profile pages.

import styles from "./GiftReceived.module.css";
import { Drawer } from "vaul";
import Button from "../Button/Button";
import fredy from "../../assets/SVGs/Itsfredy.jpg";
import Lottie from "../Lottie/Lottie";
import Card from "../Card/Card";

function GiftReceived () {
    const pot = new URL("../../assets/lotties/gifts/gift-pot-15.lottie", import.meta.url).href;

    return (
        <Drawer.Root
            closeThreshold={0.5}
            modal={true}
            handleOnly={true}
            disablePreventScroll={true}>

            <Drawer.Trigger asChild={true} className={styles.gift_received}>
                <div className={styles.gift_received_entity}>
                    <div className={styles.gift_received_sender_pic} style={{backgroundImage: `url(${fredy})`}}></div>
                    <Lottie path={pot} isActive={true} autoplay={true} style={{ width:"60px", height: "60px" }}/>
                </div>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className={styles.custom_overlay}/>
                <Drawer.Content
                    className={styles.gift_received_details}
                    onOpenAutoFocus={e => e.preventDefault()}
                >
                    <div data-vaul-no-drag className={styles.gift_received_entity_details}>
                        <div className={styles.gift_received_entity_animation}>
                            <Lottie path={pot} isActive={true} autoplay={true} loop={true} style={{ width:"150px", height: "150px" }}/>
                        </div>
                        <Drawer.Title className={styles.gift_received_title}>Saved Gift</Drawer.Title >
                        <Card/>
                        <Drawer.Close asChild={true} className={styles.gift_received_close}>
                            <Button label="Close"/>
                        </Drawer.Close>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}

export default GiftReceived;