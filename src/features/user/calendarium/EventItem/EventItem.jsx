import { FaRegCalendarAlt, FaList } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { Link } from "react-router-dom";

import { getFormattedDate } from "../../../../utils/helpers";
import styles from "./EventItem.module.css";

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
