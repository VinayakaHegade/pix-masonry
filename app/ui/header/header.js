import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/" className="medium-text">
          Homepage
        </Link>
        <div className={styles.authLinks}>
          <Link href="/login" className="medium-text">
            Login
          </Link>
          <Link
            href="/register"
            className={`${styles.createAccount} medium-text`}
          >
            Create Account
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
