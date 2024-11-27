import styles from "./Banner.module.css";

function Banner({ children }) {
  return <div className={styles.banner}>{children}</div>;
}

export default Banner;
