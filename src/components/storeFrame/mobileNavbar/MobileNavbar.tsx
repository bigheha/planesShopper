import { useAppSelector } from "../../../RTKhooks";
import { NavLink } from "react-router-dom";
import styles from "./mobileNavbar.module.css";

function MobileNavbar() {
    const isOpen = useAppSelector(state => state.mobileNav.isOpen);

    const resolveActiveStyle = ({ isActive }: {isActive: boolean}) => {
        const style = isActive ? `${styles.mobileNavBtn} ${styles.active}` : `${styles.mobileNavBtn}`;
        return style;
      };

    return (
      <div className={styles.mobileNavContainer}>
        <div className={styles.mobileNavBtns}>
                <NavLink to="/mtg" className={resolveActiveStyle}>Magic: The gathering</NavLink>
                <NavLink to="/sleeves" className={resolveActiveStyle}>card sleeves</NavLink>
                <NavLink to="/playmats" className={resolveActiveStyle}>playmats</NavLink>
                <NavLink to="/cards" className={resolveActiveStyle}>cards</NavLink>
                <NavLink to="/albums" className={resolveActiveStyle}>albums</NavLink>
                <NavLink to="/card-boxes" className={resolveActiveStyle}>card storage</NavLink>
        </div>
        <span style={{alignSelf: 'center'}}>©PlanesShopper 2023</span>
      </div>
    )
}

export default MobileNavbar;