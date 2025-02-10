// Path: src/pages/Profile/Profile.tsx
// The profile page where w'll display the user's gifts and referals.

import styles from "./Profile.module.css";
import fredy from "../../assets/SVGs/Itsfredy.jpg";
import copy from "../../assets/SVGs/copy.svg";
import wallet from "../../assets/SVGs/wallet.svg";
import { useRef, useState, useEffect, useCallback } from "react";
import GiftReceived from "../../components/GiftReceived/GiftReceived";
import FrensItem from "../../components/FrensItem/FrensItem";
import { useNavigate } from "react-router-dom";

function Profile () {
    const [activeTab, setActiveTab] = useState<string>("gifts");
    const [underlineStyle, setUnderlineStyle] = useState<{ left: number, width: number }>({ left: 0, width: 0 });
    const jumpRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const navigate = useNavigate();

    useEffect(() => {
        if (jumpRefs.current[activeTab]) {
            const { offsetLeft, offsetWidth } = jumpRefs.current[activeTab];
            setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    const handleTabChange = useCallback((tab: string) => {
            setActiveTab(tab);
    }, []);

    return (
        <div className={styles.profile}>
            <div className={styles.profile_informations}>
                <div className={styles.profile_picture_and_username}>
                    <div className={styles.profile_picture_and_rank} style={{backgroundImage: `url(${fredy})`}}>
                        <span className={styles.profile_rank}>#100</span>
                    </div>

                    <div className={styles.profile_username_and_received_gift}>
                        <h1 className={styles.profile_username}>It's Fredy</h1>
                        <p className={styles.profile_received_gift}>0 gifts received</p>
                    </div>
                </div>
                <div className={styles.profile_actions}>
                    <div className={styles.profile_action}>
                        <img src={copy} alt="invite link" /><p>Invite Friends <i className='bx bx-link-external bx-tada' ></i></p>
                    </div>
                    <div className={styles.profile_action}>
                        <img src={wallet} alt="wallet" /><p>Connect Wallet <i className='bx bx-link-external bx-tada' ></i></p> 
                    </div>
                </div>
            </div>
            <div className={styles.profile_gift_and_frens_tab}>
                <div className={styles.profile_goto_gifts} 
                    onClick={() => handleTabChange("gifts")}
                    ref={(el) => (jumpRefs.current["gifts"] = el)}>
                    <h2 style={{ color: activeTab === "gifts" ? "var(--tg-theme-accent-text-color)" : "var(--tg-theme-subtitle-text-color)" }}>Gifts</h2>
                    {/* <span style={{ backgroundColor: activeTab === "gifts" ? "var(--tg-theme-accent-text-color)" : "var(--tg-theme-subtitle-text-color)" }}>10</span> */}
                </div>
                <div className={styles.profile_goto_frens}
                    onClick={() => handleTabChange("frens")}
                    ref={(el) => (jumpRefs.current["frens"] = el)}>
                    <h2 style={{ color: activeTab === "frens" ? "var(--tg-theme-accent-text-color)" : "var(--tg-theme-subtitle-text-color)" }}>Frens</h2>
                    {/* <span style={{ backgroundColor: activeTab === "frens" ? "var(--tg-theme-accent-text-color)" : "var(--tg-theme-subtitle-text-color)" }}></span> */}
                </div>
                <div className={styles.underline} style={{ left: underlineStyle.left, width: underlineStyle.width }} />
            </div>
            <div className={styles.profile_gifts_and_frens}>
                <div className={`${styles.profile_gifts} ${activeTab === "gifts" ? styles.active : ""}`}>
                    <GiftReceived />
                    <GiftReceived />
                </div>
                
                <div className={`${styles.profile_frens} ${activeTab === "frens" ? styles.active : ""}`}>
                    <FrensItem />
                    <FrensItem />
                </div>
            </div>

        </div>
    );
}

export default Profile;