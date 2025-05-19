import styles from "./ExhibChecker.module.css";
import { useState } from "react";
import axios from "../../../../services/axios";

function ExhibChecker({
  setExhibitors,
  exhibitor,
  selectedExhibitor,
  setSelectedExhibitor,
}) {
  const [decision, setDecision] = useState("");
  const [message, setMessage] = useState(null);

  async function handleSubmit() {
    const payload = {
      id: exhibitor.id,
      user_id: exhibitor.user_id,
      message,
    };

    try {
      const response = await axios.post(
        `exhibitors/${decision}`,
        JSON.stringify(payload),
        { headers: { "Content-Type": "application/json" } }
      );

      setExhibitors((prev) =>
        prev.filter((e) => (e.id === exhibitor.id ? false : true))
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setSelectedExhibitor(null);
      setDecision(null);
      setMessage(null);
    }
  }

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
        {<img src={exhibitor.img_url} />}
        <div className={styles.rowsContatiner}>
          <p>
            <b>{exhibitor.exhib_name}</b>
          </p>
          <div className={styles.row}>
            <img src="/localization.png" />
            <p>{exhibitor.adres}</p>
          </div>
          <div className={styles.row}>
            <img src="/mail.png" />
            <p>{exhibitor.mail}</p>
          </div>
          <div className={styles.row}>
            <img src="/domain.png" />
            <a>{exhibitor.site_url}</a>
          </div>
        </div>
      </div>

      <p className={styles.descTag}>Opis</p>
      <div dangerouslySetInnerHTML={{ __html: exhibitor.description }}></div>

      <div className={styles.buttonsContainer}>
        <button
          onClick={() =>
            setDecision((prev) => (prev === "accept" ? null : "accept"))
          }
          className={`${decision === "accept" ? styles.accept : ""}`}
        >
          Zaakceptuj
        </button>
        <button
          onClick={() =>
            setDecision((prev) => (prev === "decline" ? null : "decline"))
          }
          className={`${decision === "decline" ? styles.decline : ""}`}
        >
          Odrzuć
        </button>
      </div>
      <div className={styles.decisionContainer}>
        {decision === "decline" && (
          <input
            type="text"
            placeholder="Powód odmowy"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        )}
        <button
          disabled={
            !(
              decision === "accept" ||
              (decision === "decline" && message !== null)
            )
          }
          onClick={handleSubmit}
        >
          Zatwierdź
        </button>
      </div>
    </div>
  );
}

export default ExhibChecker;
