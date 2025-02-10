// Path: src/components/Button/Button.tsx
// Our custom button component that w'll be use instead of the native Telegram main button when app is open in a browser.

import styles from "./Button.module.css";

interface IButton {
    label: string;
    onClick?: () => void;
    labelSecondary?: string;
    onClickSecondary?: () => void;
    earn?: boolean;
}

function Button ({ label, onClick, labelSecondary, onClickSecondary, earn }: IButton) {
    return (
        <div className={`${styles.custom_button_ctn} ${earn ? styles.earn : ''}`}>            
            <button className={styles.button} onClick={onClick}>
                {label}
            </button>
            {labelSecondary && <button className={styles.button_secondary} onClick={onClickSecondary}>
                {labelSecondary}
            </button>}
        </div>
    );
}

export default Button;