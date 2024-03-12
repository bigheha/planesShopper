import styles from "./loginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.background}>
      <form className={styles.form} action="">
        <span className={styles.header}>PlanesShopper</span>
        <span className={styles.subHeader}>Admin panel</span>
        <input className={styles.input} type="email" id="zhopa" placeholder="email" />
        <input className={styles.input} type="password" placeholder="password" />
        <button className={styles.loginBtn}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
