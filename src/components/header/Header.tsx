import styles from './header.module.css';

function Header() {
    return <div className={styles.container}>
        <span className={styles.logo}>PlanesShopper</span>
        <nav className={styles.navigation}>
            <a href="" className={styles.navigationButton}>Magic: The gathering</a>
            <a href="" className={styles.navigationButton}>card sleeves</a>
            <a href="" className={styles.navigationButton}>playmats</a>
            <a href="" className={styles.navigationButton}>cards</a>
            <a href="" className={styles.navigationButton}>albums</a>
            <a href="" className={styles.navigationButton}>card storage</a>
        </nav>
    </div>
}

export default Header;