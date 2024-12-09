import { Link } from "react-router-dom";
import styles from "./EventItem.module.css";
import months from "../../data/months";

function getFormattedDate(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const isSameMonth = startDate.getMonth() === endDate.getMonth();
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  return `${startDay < 10 ? `0${startDay}` : startDay} ${
    isSameMonth ? "" : months[startDate.getMonth()]
  } - ${endDay < 10 ? `0${endDay}` : endDay} ${
    months[endDate.getMonth()]
  } ${startDate.getFullYear()}`;
}

function EventItem({
  id,
  thumbnail,
  title,
  desc,
  localization,
  category,
  startDate,
  endDate,
}) {
  return (
    <div className={styles.item}>
      <Link to={`/event/${id}`}>
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
