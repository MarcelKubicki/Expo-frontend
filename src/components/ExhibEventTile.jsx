import styles from "./ExhibEventTile.module.css";

function unverified_num(exhibitor) {
  const num = exhibitor.exhibitors.filter((e) => e.is_verified === false);
  return num.length;
}

function ExhibEventTile({
  exhibitor,
  selectedExhibitor,
  setSelectedExhibitor,
}) {
  const num = unverified_num(exhibitor);

  return (
    <li
      className={`${styles.prevContainer} ${
        exhibitor.event_name === selectedExhibitor?.event_name
          ? styles.activePrevContainer
          : ""
      }`}
      onClick={() =>
        setSelectedExhibitor(
          exhibitor.event_name === selectedExhibitor?.event_name
            ? null
            : exhibitor
        )
      }
    >
      <img src={exhibitor.img_url} alt="elo" />

      <div>
        <p className={styles.name}>{exhibitor.event_name}</p>
        <p className={styles.description}>{exhibitor.loc_name}</p>
      </div>
      <div className={styles.numNotification}>{num}</div>
    </li>
  );
}

export default ExhibEventTile;
