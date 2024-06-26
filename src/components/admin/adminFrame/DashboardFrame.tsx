import styles from "./adminFrame.module.css";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";

function DashboardFrame() {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <p className={styles.logoText}>PlanesShopper admin</p>
        <button className={styles.logOutBtn}>log out</button>
      </div>
      <AdminNavbar />
      <div className={styles.outletWrapper}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardFrame;
