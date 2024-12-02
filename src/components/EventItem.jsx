import { Link } from "react-router-dom";
import styles from "./EventItem.module.css";

const months = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

function getFormattedDate(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const isSameMonth = startDate.getMonth() === endDate.getMonth();

  return `${startDate.getDate()}${
    isSameMonth ? "" : months[startDate.getMonth()]
  } - ${endDate.getDate()} ${
    months[endDate.getMonth()]
  } ${startDate.getFullYear()}`;
}

function EventItem({
  thumbnail,
  title,
  desc,
  localization,
  category,
  startDate,
  endDate,
}) {
  console.log(startDate, endDate);
  return (
    <div className={styles.item}>
      <Link to="/event">
        <img className={styles.thumbnail} src={thumbnail} />
        <div className={styles.content}>
          <div className={styles.row}>
            <div>
              <img src="calendar.png" className={styles.icon} />
              <p>{getFormattedDate(startDate, endDate)}</p>
            </div>
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
          <div id="stats" className={styles.row}>
            <div className={styles.tile}>
              <img src="options-lines.png" className={styles.icon} />
              <p>{category}</p>
            </div>
            <div className={styles.tile}>
              <img src="localization.png" className={styles.icon} />
              <p>{localization}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventItem;
