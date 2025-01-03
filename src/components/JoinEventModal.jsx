import { useState } from "react";
import { useEvent } from "../context/EventProvider";
import ExpoPlanSvg from "./ExpoPlanSvg";
import styles from "./JoinEventModal.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function JoinEventModal() {
  const navigate = useNavigate();
  const { activeStands } = useEvent();
  const [selectedStand, setSelectedStand] = useState(null);
  const { profileInfo } = useAuth();

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button className={styles.closeBtn} onClick={() => navigate(-1)}>
          X
        </button>

        <div className={styles.expoMapContainer}>
          <h3>Wybierz interesujące cię stanowisko</h3>
          <ExpoPlanSvg
            selectedStand={selectedStand}
            setSelectedStand={setSelectedStand}
            activeStands={activeStands}
            chooseMode
          />
        </div>
        <div className={styles.modalContainerRight}>
          <h3>Podgląd twojego profilu wystawcy</h3>
          <div className={styles.modal}>
            <div className={styles.basicInfoContainer}>
              <img src={profileInfo.img_url} />
              <div className={styles.rowsContatiner}>
                <p>
                  <b>{profileInfo.exhib_name}</b>
                </p>
                <div className={styles.row}>
                  <img src="/localization.png" />
                  <p>{profileInfo.adres}</p>
                </div>
                <div className={styles.row}>
                  <img src="/mail.png" />
                  <p>{profileInfo.mail}</p>
                </div>
                <div className={styles.row}>
                  <img src="/domain.png" />
                  <a>{profileInfo.site_url}</a>
                </div>
              </div>
            </div>

            <p className={styles.descTag}>Opis</p>
            <div
              dangerouslySetInnerHTML={{ __html: profileInfo.description }}
            ></div>
          </div>

          <div className={styles.buttonsContainer}>
            <Link className={styles.editBtn}>Edytuj profil</Link>
            <button
              className={styles.confirmBtn}
              disabled={selectedStand ? false : true}
            >
              {selectedStand
                ? "Zatwierdz"
                : "Wybierz stanowisko aby dołączyć do wydarzenia"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinEventModal;
