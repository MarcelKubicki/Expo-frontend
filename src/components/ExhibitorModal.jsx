import styles from "./ExhibitorModal.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import months from "../../data/months";
import { IoMdPin } from "react-icons/io";

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

function ExhibitorModal({ selectedExhibitor, setSelectedExhibitor }) {
  const [
    { exhib_name, img_url, adres, mail, site_url, description, history },
    setExhibInfo,
  ] = useState({});

  useEffect(
    function () {
      async function getExhibInfo() {
        const res = await fetch(
          `http://127.0.0.1:8000/api/v1/exhibitors/${selectedExhibitor}`
        );
        const data = await res.json();
        console.log(data);
        setExhibInfo(data);
      }

      getExhibInfo();
    },
    [selectedExhibitor]
  );

  return (
    <AnimatePresence initial={false}>
      {selectedExhibitor ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "tween", duration: 0.15 }}
          key="box"
          className={styles.modal}
        >
          <button
            className={styles.closeBtn}
            onClick={() => setSelectedExhibitor(null)}
          >
            X
          </button>

          <div className={styles.basicInfoContainer}>
            <img src={img_url} />
            <div className={styles.rowsContatiner}>
              <p>
                <b>{exhib_name}</b>
              </p>
              <div className={styles.row}>
                <IoMdPin />
                <p>{adres}</p>
              </div>
              <div className={styles.row}>
                <img src="/mail.png" />
                <p>{mail}</p>
              </div>
              <div className={styles.row}>
                <img src="/domain.png" />
                <a href={site_url} target="_blank" rel="noopener noreferrer">
                  {site_url}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <p className={styles.descTag}>Historia wystąpień:</p>
          {history && (
            <ul className={styles.historyList}>
              {history.map((e) => (
                <Link
                  key={e.id}
                  to={`/event/${e.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    {getFormattedDate(e.date_start, e.date_end)}{" "}
                    <b style={{ marginLeft: "5px" }}>{e.event_name}</b>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </motion.div>
      ) : (
        <div className={styles.modalUnactive}>
          <img src="/arrow.svg" />
          <p>
            Wybierz wystawce z listy obok aby wyświetlić więcej informacji...
          </p>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ExhibitorModal;
