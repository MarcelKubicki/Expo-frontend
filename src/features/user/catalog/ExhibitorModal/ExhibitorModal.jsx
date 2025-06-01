import { AnimatePresence, motion } from "motion/react";
import { IoMdPin, IoIosMail } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { getFormattedDate } from "../../../../utils/helpers";
import { useExhibitor } from "../useExhibitor";
import Spinner from "../../../../ui/Spinner/Spinner";
import styles from "./ExhibitorModal.module.css";

function ExhibitorModal() {
  const { isLoading, data, error } = useExhibitor();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;

  return (
    <AnimatePresence initial={false}>
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
          onClick={() => navigate("/catalog")}
        >
          X
        </button>

        <div className={styles.basicInfoContainer}>
          <img src={data.img_url} />
          <div className={styles.rowsContatiner}>
            <p>
              <b>{data?.exhib_name}</b>
            </p>
            <div className={styles.row}>
              <IoMdPin />
              <p>{data.adres}</p>
            </div>
            <div className={styles.row}>
              <IoIosMail />
              <p>{data.mail}</p>
            </div>
            <div className={styles.row}>
              <AiOutlineGlobal />
              <a href={data.site_url} target="_blank" rel="noopener noreferrer">
                {data.site_url}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <p>{data.description}</p>
        </div>
        <p className={styles.descTag}>Historia wystąpień:</p>
        {data.history && (
          <ul className={styles.historyList}>
            {data.history.map((e) => (
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
    </AnimatePresence>
  );
}

export default ExhibitorModal;
