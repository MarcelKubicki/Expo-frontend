import styles from "./EventItem.module.css";

function EventItem({ thumbnail, title, desc }) {
  return (
    <div className={styles.item}>
      <img className={styles.thumbnail} src={thumbnail} />
      <div className={styles.content}>
        <div className={styles.date}>
          <img src="calendar.png" className={styles.icon} />
          <p>26 - 28 listopada 2024</p>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}

export default EventItem;
