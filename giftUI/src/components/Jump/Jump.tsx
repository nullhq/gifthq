// Path: src/components/Jump/Jump.tsx
// Our Jump component will be a tab navigation component that will be used to navigate between different sections of the app.

import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "../Lottie/Lottie";
import styles from "./Jump.module.css";
import fredy from "../../assets/SVGs/Itsfredy.jpg";
import { truncateName } from "../../utils/truncate";

function Jump() {
    const [activeTab, setActiveTab] = useState<string>("store");
    const [underlineStyle, setUnderlineStyle] = useState<{ left: number, width: number }>({ left: 0, width: 0 });
    const jumpRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const navigate = useNavigate();

    useEffect(() => {
        if (jumpRefs.current[activeTab]) {
            const { offsetLeft, offsetWidth } = jumpRefs.current[activeTab];
            setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    useEffect(() => {
        const basePath = `/${location.pathname.split('/')[1]}`;

        switch (basePath) {
            case '/gifts':
                setActiveTab("gifts");
                break;
            case '/leaderboard':
                setActiveTab("leaderboard");
                break;
            case '/profile':
                setActiveTab("profile");
                break;
            case '/earn':
                setActiveTab("earn");
                break;
            default:
                setActiveTab("store");
        }
    }, [location.pathname]);

    const handleTabChange = useCallback((tab: string) => {
        setActiveTab(tab);
        navigate(tab);
    }, []);

    const tabs = [
        { name: "store", path: new URL("../../assets/lotties/tabs/tab-store.json", import.meta.url).href },
        { name: "gifts", path: new URL("../../assets/lotties/tabs/tab-gifts.json", import.meta.url).href },
        { name: "earn", path: new URL("../../assets/lotties/tabs/tab-earn.json", import.meta.url).href },
        { name: "leaderboard", path: new URL("../../assets/lotties/tabs/tab-leaderboard.json", import.meta.url).href },
    ];

    return (
        <div className={styles.jump}>
            {tabs.map(({ name, path }) => (
                <div
                    key={name}
                    className={styles.jump_to}
                    onClick={() => handleTabChange(name)}
                    ref={(el) => (jumpRefs.current[name] = el)}
                >
                    <Lottie path={path} isActive={activeTab === name} />
                    <p className={styles.label} style={{ color: activeTab === name ? "var(--tg-theme-accent-text-color)" : "" }}>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </p>
                </div>
            ))}

            <div
                key="profile"
                className={styles.jump_to}
                onClick={() => handleTabChange("profile")}
                ref={(el) => (jumpRefs.current["profile"] = el)}
            >
                <img src={fredy} alt="User profile picture" />
                <p className={styles.label} style={{ color: activeTab === "profile" ? "var(--tg-theme-accent-text-color)" : "" }}>
                    {truncateName("It's Fredy", 8)}
                </p>
            </div>
            <div className={styles.underline} style={{ left: underlineStyle.left, width: underlineStyle.width }} />
        </div>
    );
}

export default Jump;