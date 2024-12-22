import styles from "./ExhibitorItem.module.css";

function ExhibitorItem({ exhibitor, selectedExhibitor, setSelectedExhibitor }) {
  const { id, img_url, exhib_name, categ_name } = exhibitor;
  return (
    <li
      className={`${styles.prevContainer} ${
        id === selectedExhibitor ? styles.activePrevContainer : ""
      }`}
      onClick={() => setSelectedExhibitor(id === selectedExhibitor ? null : id)}
    >
      <img src={img_url} />

      <div>
        <p className={styles.name}>{exhib_name}</p>
        <p className={styles.description}>
          <p>Tworzenie rozwiązań i systemów informatycznych</p>
        </p>
      </div>
      <div className={styles.category}>{categ_name}</div>
    </li>
  );
}

export default ExhibitorItem;
