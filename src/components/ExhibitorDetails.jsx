import styles from "./ExhibitorDetails.module.css";
import ExhibitorModal from "./ExhibitorModal";

function ExhibitorDetails() {
  return (
    <div className={styles.exhibitorDetails}>
      <ExhibitorModal />
    </div>
  );
}

export default ExhibitorDetails;
