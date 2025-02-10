// Path: src/pages/Earn/Earn.tsx
// Earn component where user can complete task and earn more $GIFT.

import { useState, useEffect, useRef } from "react";
import styles from "./Earn.module.css";
import Lottie from "../../components/Lottie/Lottie";
import Button from "../../components/Button/Button";
import Task from "../../components/Task/Task";

function Earn () {
    const filters = ["New", "OnChain", "Socials", "Frens"];
    const earnPath = new URL("../../assets/lotties/tabs/tab-earn.json", import.meta.url).href;
    const [activeFilter, setActiveFilter] = useState("New");
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number, width: number }>({ left: 0, width: 0 });
    const spanRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        if (spanRefs.current[activeFilter]) {
            const { offsetLeft, offsetWidth } = spanRefs.current[activeFilter];
    
            if (offsetLeft !== undefined && offsetWidth !== undefined) {
                setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
            }
        }
    }, [activeFilter]);

    return (
        <div className={styles.earn}>
            <div className={styles.earn_header}>
                <Lottie path={earnPath} isActive={true} autoplay={true} loop={true} style={{
                    width: "100px",
                    height: "100px"
                }}/>
                <div className={styles.earn_header_description}>
                    <h1>Earn $GIFT</h1>
                    <p>Buy and Send Gifts to Earn more $GIFT for the coming airdrop or complete the tasks bellow.</p>
                </div>
            </div>
            <div className={styles.earn_balance_tasks_ctn}>
                <div className={styles.earn_balance_actions}>
                    <div className={styles.earn_balance}>
                        <div className={styles.earn_balance_value}>15 $GIFT</div>
                        <p className={styles.earn_balance_subtitle}>your balance</p>
                    </div>
                   <div className={styles.earn_actions}>
                        <Button label="Buy More Gifts" labelSecondary="Send Gift to Friends" earn/>
                   </div>
                </div>
                <div className={styles.earn_section_separator}></div>
                <div className={styles.earn_tasks_filter}>
                    {filters.map((filter) => (
                        <div
                            key={filter}
                            ref={el => spanRefs.current[filter] = el}
                            className={styles.earn_active_filter_choice}
                            onClick={() => setActiveFilter(filter)}
                        >
                            <p style={{ color: activeFilter === filter ? "var(--tg-theme-accent-text-color)" : "var(--tg-theme-subtitle-text-color)" }}>{filter}</p>
                            { activeFilter === filter && <span className={styles.new_task}></span>}
                        </div>
                    ))}
                    <div className={styles.earn_tasks_active_filter} style={{ left: indicatorStyle.left, width: indicatorStyle.width }}></div>
                </div>
                <div className={styles.earn_tasks_ctn}>
                    <Task/>
                    <Task/>
                    <Task/>
                </div>
            </div>
        </div>
    );
}

export default Earn;