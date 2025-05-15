import styles from "./ExhibTile.module.css";
function ExhibTile({ exhibitor, selectedExhibitor, setSelectedExhibitor }) {
  const { id, img_url, exhib_name, short_desc } = exhibitor;
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
        <p className={styles.description}>{short_desc}</p>
      </div>
    </li>
  );
}

export default ExhibTile;
