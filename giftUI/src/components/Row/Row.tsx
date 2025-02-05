// Path: src/components/Row/Row.tsx
// Row information obout gift.

import styles from "./Row.module.css";

interface IRow {
    label: string,
    children: React.ReactNode
}

function Row ({label, children}: IRow) {
    return (
        <div className={styles.row}>
            <span className={styles.row_label}>{label}</span>
            <div className={styles.row_value}>
                {children}
            </div>
        </div>
    );
}

export default Row;