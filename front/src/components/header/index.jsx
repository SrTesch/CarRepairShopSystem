import React from "react";
import styles from "./header.module.css";

const Header = props => {
    const { title, links } = props;

    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <div className={styles.links}>
                {links.map((link, index) => (
                            <a href={link.url} className={`${styles.bn3637} ${styles.bn38}`}>
                                {link.name}
                            </a>
                    ))}
            </div>
        </header>
    );
};

export default Header;
