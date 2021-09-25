import styles from "./styles.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="" />
        <div className={styles.logoText}>FilmsInfo</div>
      </Link>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/random">Random</Link>
      </nav>
    </div>
  );
};
