import styles from "./ExhibitorsList.module.css";
import ExhibitorPrev from "./ExhibitorPrev";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ExhibitorsList({
  selectedStand,
  setSelectedStand,
  scrollableContainerRef,
  itemRefs,
  exhibs = [],
  isTakingPart,
}) {
  const [exhibitors, setExhibitors] = useState(exhibs);
  const [filterExhibs, setFilterExhibs] = useState();

  useEffect(() => setExhibitors(exhibs), [exhibs]);

  useEffect(
    function () {
      if (filterExhibs) {
        const newList = exhibitors.filter((e) =>
          e.exhib_name.toLowerCase().includes(filterExhibs)
        );
        setExhibitors(newList);
      } else {
        setExhibitors(exhibs);
      }
    },
    [filterExhibs]
  );

  return (
    <div className={styles.listContainer}>
      <h2>Lista wystawców</h2>
      <input
        type="search"
        value={filterExhibs}
        onChange={(e) => setFilterExhibs(e.target.value)}
        className={styles.searchInput}
        placeholder="Wyszukaj wystawce..."
      />
      <div className={styles.exhibList} ref={scrollableContainerRef}>
        {exhibitors.map((e) => (
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

      <Link to="join">
        <button className={styles.joinBtn} disabled={isTakingPart}>
          {isTakingPart
            ? "Nie mozesz dołączyć poniewaz zapisałeś się juz na to wydarzenie"
            : "WEŹ UDZIAŁ"}
        </button>
      </Link>
    </div>
  );
}

export default ExhibitorsList;
