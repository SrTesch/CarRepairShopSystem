import React from "react";
import styles from "./table.module.css"

export default function Table(props) {
    const title = props.title;
    const data = props.data;
    return(
        <div className={styles.table}>
            <div className={styles.title}>
                {title.map((thing, index) => (
                    <span key={index} className={styles.titleThing}>
                        {thing}
                    </span>
                ))}
            </div>
            <div className={styles.rows}>
                {data.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.row}>
                        {Object.values(row).map((value, index) => (
                            <span key={index} className={styles.rowThing}>
                                {value}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}