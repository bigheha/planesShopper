import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const resolveActiveStyle = ({ isActive }: {isActive: boolean}) => {
        const style = isActive ? `${styles.navigationButton} ${styles.active}` : `${styles.navigationButton}`;
        return style;
      };
    return <div className={styles.container}>
        <span className={styles.logo}>PlanesShopper</span>
        <nav className={styles.navigation}>
            <NavLink to="/mtg" className={resolveActiveStyle}>Magic: The gathering</NavLink>
            <NavLink to="/sleeves" className={resolveActiveStyle}>card sleeves</NavLink>
            <NavLink to="/playmats" className={resolveActiveStyle}>playmats</NavLink>
            <NavLink to="/cards" className={resolveActiveStyle}>cards</NavLink>
            <NavLink to="/albums" className={resolveActiveStyle}>albums</NavLink>
            <NavLink to="/card-boxes" className={resolveActiveStyle}>card storage</NavLink>
        </nav>
    </div>
}

export default Header;