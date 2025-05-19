import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaList } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

import months from "../../data/months";
import styles from "./EventItem.module.css";

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
          <p className={styles.title}>{title}</p>
          <div className={styles.row}>
            <div>
              <FaRegCalendarAlt className={styles.icon} />
              <p>{getFormattedDate(startDate, endDate)}</p>
            </div>
          </div>
          <p className={styles.desc}>{desc}</p>
          <div id="stats" className={styles.row}>
            <div className={styles.tile}>
              <FaList className={styles.icon} />
              <p>{category}</p>
            </div>
            <div className={styles.tile}>
              <IoMdPin className={styles.icon} />
              <p>{localization}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventItem;
