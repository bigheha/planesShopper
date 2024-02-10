import styles from './adminNavbar.module.css'
import { NavLink } from 'react-router-dom';

const resolveActiveStyle = ({ isActive }: {isActive: boolean}) => {
    const style = isActive ? `${styles.navBtn} ${styles.active}` : `${styles.navBtn}`;
    return style;
  };

function AdminNavbar() {
    return <div className={styles.container}>
        <nav className={styles.navButtons}>
            <NavLink to={'/admin/products'} className={resolveActiveStyle}>Products</NavLink>
        </nav>
    </div>
}

export default AdminNavbar;