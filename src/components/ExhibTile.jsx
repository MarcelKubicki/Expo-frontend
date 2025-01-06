import styles from "./ExhibTile.module.css";
function ExhibTile({ exhibitor, selectedExhibitor, setSelectedExhibitor }) {
  const { id, img_url, exhib_name } = exhibitor;
  return (
    <li
      className={`${styles.prevContainer} ${
        id === selectedExhibitor?.id ? styles.activePrevContainer : ""
      }`}
      onClick={() =>
        setSelectedExhibitor(id === selectedExhibitor?.id ? null : exhibitor)
      }
    >
      <img src={img_url} alt="elo" />

      <div className={styles.info}>
        <p className={styles.name}>{exhib_name}</p>
        <p className={styles.description}>
          Tworzenie rozwiązań i systemów informatycznych
        </p>
      </div>
    </li>
  );
}

export default ExhibTile;
