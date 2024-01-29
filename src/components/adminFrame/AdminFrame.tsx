import styles from "./adminFrame.module.css";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";

function AdminFrame() {
    return(
    <div className={styles.grid}>
        <div className={styles.header}>
            <p className={styles.logoText}>PlanesShopper admin</p>
        </div>
        <AdminNavbar/>
        <div className={styles.outletWrapper}>
            <Outlet/>
        </div>
    </div>
    ) 
    
}

export default AdminFrame;