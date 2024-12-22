import { useEffect, useState } from "react";
import styles from "./ExhibitorModal.module.css";

function ExhibitorModal({ selectedExhibitor, setSelectedExhibitor }) {
  const [
    { exhib_name, img_url, tel, adres, mail, site_url, description, history },
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

  if (!selectedExhibitor) {
    return (
      <div className={styles.modalUnactive}>
        <p>Wybierz wystawce z listy aby wyświetlić więcej informacji...</p>
      </div>
    );
  }

  return (
    <div className={styles.modal}>
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
            <img src="/localization.png" />
            <p>{adres}</p>
          </div>
          <div className={styles.row}>
            <img src="/mail.png" />
            <p>{mail}</p>
          </div>
          <div className={styles.row}>
            <img src="/domain.png" />
            <a>{site_url}</a>
          </div>
        </div>
      </div>

      <p className={styles.descTag}>Opis</p>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      <p className={styles.descTag}>Historia wystąpień</p>
      {history && (
        <ul>
          {history.map((e) => (
            <li key={e.event_name}>{`${e.date_start} ${e.event_name}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExhibitorModal;
