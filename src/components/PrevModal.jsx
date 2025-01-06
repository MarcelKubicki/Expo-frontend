import { useState } from "react";
import styles from "./PrevModal.module.css";
import axios from "../axios";

function PrevModal({
  selectedStand,
  setSelectedStand,
  exhibitors,
  setExhibitors,
}) {
  const [decision, setDecision] = useState("");
  const [message, setMessage] = useState(null);
  const exhib = exhibitors.filter((e) => e.stand_num === selectedStand).at(0);

  async function acceptPutRequest() {
    const payload = {
      id: exhib.id,
      message,
    };
    try {
      const response = await axios.put(
        "/events/accept_exhibitor",
        JSON.stringify(payload),
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      const new_exhib = (exhib.is_verified = true);
      const new_exhibitors = exhibitors.filter(
        (e) => e.stand_num != new_exhib.stand_num
      );
      const new_exhibitors2 = [...new_exhibitors, new_exhib];
      setExhibitors(new_exhibitors2);
    } catch (error) {
      console.log(error);
    }
  }

  async function declineRequest() {
    const payload = {
      id: exhib.id,
      message,
    };

    try {
      const response = await axios.put(
        "/events/decline_exhibitor",
        JSON.stringify(payload),
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      const new_exhibitors = exhibitors.filter(
        (e) => e.stand_num != selectedStand
      );
      setExhibitors(new_exhibitors);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit() {
    if (decision === "accept") {
      acceptPutRequest();
    } else if (decision === "decline") {
      declineRequest();
    }
    setDecision("");
    setMessage(null);
    setSelectedStand(null);
  }

  if (!exhib) return <></>;
  return (
    <div className={styles.prevModal}>
      <div className={styles.info}>
        <img src={exhib.img_url} />
        <h3>{exhib.exhib_name}</h3>
      </div>

      <p className={styles.description}>{exhib.description}</p>
      {!exhib.is_verified && (
        <>
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
        </>
      )}
    </div>
  );
}

export default PrevModal;
