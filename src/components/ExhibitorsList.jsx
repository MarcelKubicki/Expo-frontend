import { Link } from "react-router-dom";
import ExhibitorPrev from "./ExhibitorPrev";
import styles from "./ExhibitorsList.module.css";

function ExhibitorsList({
  selectedStand,
  setSelectedStand,
  scrollableContainerRef,
  itemRefs,
  exhibs = [],
}) {
  return (
    <div className={styles.listContainer}>
      <h2>Lista wystawców</h2>
      <div className={styles.exhibList} ref={scrollableContainerRef}>
        {exhibs.map((e) => (
          <ExhibitorPrev
            key={e.exhib_name}
            exhibitorData={e}
            selectedStand={selectedStand}
            setSelectedStand={setSelectedStand}
            itemRefs={itemRefs}
            scrollableContainerRef={scrollableContainerRef}
          />
        ))}
      </div>
      <Link to="join" className={styles.joinBtn}>
        WEŹ UDZIAŁ
      </Link>
    </div>
  );
}

export default ExhibitorsList;
