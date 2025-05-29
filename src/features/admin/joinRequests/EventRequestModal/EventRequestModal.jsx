import { useEffect, useState } from "react";
import styles from "./EventRequestModal.module.css";
import ExpoPlanSvgAdmin from "../ExpoPlanSvgAdmin/ExpoPlanSvgAdmin";
import PrevModal from "../PrevModal/PrevModal";

function EventRequestModal({ exhibitors }) {
  const [selectedStand, setSelectedStand] = useState(null);
  const [exhibs, setExhibitors] = useState(exhibitors);
  useEffect(() => setExhibitors(exhibitors), [exhibitors]);
  return (
    <main className={styles.eventRequestMain}>
      <div style={{ width: "330px" }}>
        <ExpoPlanSvgAdmin
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          stands={exhibs}
        />
      </div>
      {selectedStand && (
        <PrevModal
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          exhibitors={exhibs}
          setExhibitors={setExhibitors}
        />
      )}
    </main>
  );
}

export default EventRequestModal;
