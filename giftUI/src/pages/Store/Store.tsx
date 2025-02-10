// src/pages/Store/Store.tsx
// Our Store component will be a simple component that will display a list of gifts.

import styles from "./Store.module.css";
import Lottie from "../../components/Lottie/Lottie";
import Gift from "../../components/Gift/Gift";
import stars from "../../assets/SVGs/telegram-stars.svg";

import { useState, useRef, useEffect } from "react";

function Store () {
    const filters = ["All Gifts", "In Stock", "Limited", "10", "15", "25", "50", "75", "100", "150", "200", "350"];
    const [activeFilter, setActiveFilter] = useState("All Gifts");
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number, width: number }>({ left: 0, width: 0 });
    const filterRef = useRef<HTMLDivElement>(null);
    const spanRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        if (spanRefs.current[activeFilter] && filterRef.current) {
            const { offsetLeft, offsetWidth } = spanRefs.current[activeFilter];
   
            if (offsetLeft !== undefined && offsetWidth !== undefined) {
                setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
                filterRef.current.scrollTo({ left: offsetLeft - 40, behavior: "smooth" });
            }
        }
    }, [activeFilter]);
    

    const headerGiftPath = new URL("../../assets/lotties/gifts/store-ballons.json", import.meta.url).href;
    const cat = new URL("../../assets/lotties/gifts/gift-black-cat-25.lottie", import.meta.url).href;
    const pot = new URL("../../assets/lotties/gifts/gift-pot-15.lottie", import.meta.url).href;
    const stick = new URL("../../assets/lotties/gifts/gift-stick-10.lottie", import.meta.url).href;
    const star = new URL("../../assets/lotties/gifts/gift-star-50.lottie", import.meta.url).href;
    const icecream = new URL("../../assets/lotties/gifts/gift-icecream-25.lottie", import.meta.url).href;
    const trophy = new URL("../../assets/lotties/gifts/gift-trophy-100.lottie", import.meta.url).href;
    const ring = new URL("../../assets/lotties/gifts/gift-crystal-ring-100.lottie", import.meta.url).href;
    const ball = new URL("../../assets/lotties/gifts/gift-crystal-ball-15.lottie", import.meta.url).href;

    return (
        <div className={styles.store}>
            <div className={styles.store_header}>
                <div className={styles.store_header_gift_icon_and_title}>
                    <Lottie path={headerGiftPath} isActive={true} autoplay={true} style={{ width:"54px", height: "54px" }}/>
                    <h1>Buy and Send Gifts to earn $GIFT</h1>
                </div>
                <p className={styles.store_header_description}>Unique gifts for everyone by Gift HQ.</p>
            </div>
            <div className={styles.store_filter} ref={filterRef}>
                <div className={styles.store_active_filter} style={{ left: indicatorStyle.left, width: indicatorStyle.width }}></div>
                {filters.map((filter) => (
                    <div
                        key={filter}
                        ref={el => spanRefs.current[filter] = el}
                        className={styles.store_active_filter_choice}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {!isNaN(Number(filter)) && <img src={stars} alt="star" />}
                        <p>{filter}</p>
                    </div>
                ))}
            </div>
            <div className={styles.store_gifts}>
                <Gift lottiePath={cat} price={25}/>
                <Gift lottiePath={pot} price={15}/>
                <Gift lottiePath={stick} price={10}/>
                <Gift lottiePath={star} price={50}/>
                <Gift lottiePath={icecream} price={25}/>
                <Gift lottiePath={trophy} price={100}/>
                <Gift lottiePath={ring} price={100}/>
                <Gift lottiePath={ball} price={15}/>
            </div>
        </div>
    );
}

export default Store;