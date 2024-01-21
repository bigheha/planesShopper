import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../RTKhooks';
import { toggleOpen } from '../../features/mobileNavSlice/mobileNavSlice';

function Header() {
    const isOpen = useAppSelector((state) => state.mobileNav.isOpen);
    const dispatch = useAppDispatch();

    function handleToggleOpen(): void {
        dispatch(toggleOpen())
    }

    const resolveActiveStyle = ({ isActive }: {isActive: boolean}) => {
        const style = isActive ? `${styles.navigationButton} ${styles.active}` : `${styles.navigationButton}`;
        return style;
      };

    return <div className={styles.container}>
        <span className={styles.logo}>PlanesShopper</span>
        <i className={`${isOpen ? 'fa-solid fa-bars-staggered' : 'fa-solid fa-bars' } ${styles.openNavbarBtn}`} style={{color: "#d6d6d6"}} onClick={handleToggleOpen}></i>
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