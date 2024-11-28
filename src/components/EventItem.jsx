import { Link } from "react-router-dom";
import styles from "./EventItem.module.css";

function EventItem({ thumbnail, title, desc }) {
  return (
    <div className={styles.item}>
      <Link to="/event">
        <img className={styles.thumbnail} src={thumbnail} />
        <div className={styles.content}>
          <div className={styles.date}>
            <img src="calendar.png" className={styles.icon} />
            <p>26 - 28 listopada 2024</p>
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default EventItem;
