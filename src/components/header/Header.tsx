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
        const style = isActive ? `${styles.navBtn} ${styles.active}` : `${styles.navBtn}`;
        return style;
      };

    return <div className={styles.headerContainer}>
        <NavLink to="/store/">
            <span className={styles.logo}>PlanesShopper</span>
        </NavLink>
        <i className={`${isOpen ? 'fa-solid fa-bars-staggered' : 'fa-solid fa-bars' } ${styles.openNavbarBtn}`} style={{color: "#d6d6d6"}} onClick={handleToggleOpen}></i>
        <nav className={styles.navDesktop}>
            <NavLink to="/store/mtg" className={resolveActiveStyle}>Magic: The gathering</NavLink>
            <NavLink to="/store/sleeves" className={resolveActiveStyle}>card sleeves</NavLink>
            <NavLink to="/store/playmats" className={resolveActiveStyle}>playmats</NavLink>
            <NavLink to="/store/cards" className={resolveActiveStyle}>cards</NavLink>
            <NavLink to="/store/albums" className={resolveActiveStyle}>albums</NavLink>
            <NavLink to="/store/card-boxes" className={resolveActiveStyle}>card storage</NavLink>
        </nav>
    </div>
}

export default Header;