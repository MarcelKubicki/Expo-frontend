import styles from "./ExhibitorDetails.module.css";
import ExhibitorModal from "./ExhibitorModal";

function ExhibitorDetails({ selectedExhibitor, setSelectedExhibitor }) {
  return (
    <div className={styles.exhibitorDetails}>
      <ExhibitorModal
        selectedExhibitor={selectedExhibitor}
        setSelectedExhibitor={setSelectedExhibitor}
      />
    </div>
  );
}

export default ExhibitorDetails;
