import styles from "./loginPage.module.css";
import { useState } from "react";
import useToken from "../../../../auth/useToken";
import axios from "axios";

function LoginPage() {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [token, setToken] = useToken();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "email change");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "password change");
    setPassword(e.target.value);
  };

  async function onLogInClicked() {
    const response = await axios.post("http://localhost:3000/login", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
  }
  return (
    <div className={styles.background}>
      <div className={styles.form}>
        <span className={styles.header}>PlanesShopper</span>
        <span className={styles.subHeader}>Admin panel</span>
        <input
          className={styles.input}
          value={emailValue}
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          className={styles.input}
          value={passwordValue}
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="password"
        />
        <button className={styles.loginBtn} onClick={onLogInClicked}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
