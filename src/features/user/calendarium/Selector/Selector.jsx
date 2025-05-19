import styles from "./Selector.module.css";
import SelectCategory from "../../../../ui/SelectCategory";
import SelectLocalization from "../../../../ui/SelectLocalization";

function Selector({
  eventName,
  setEventName,
  category,
  setCategory,
  localization,
  setLocalization,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div className={styles.selector}>
      <input
        className={styles.searchbar}
        type="search"
        placeholder="Wpisz nazwe wydarzenia..."
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <SelectCategory
        category={category}
        setCategory={setCategory}
        className={styles.select}
      />

      <SelectLocalization
        localization={localization}
        setLocalization={setLocalization}
        className={styles.select}
      />

      <input
        type="date"
        className={styles.select}
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        className={styles.select}
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
  );
}

export default Selector;
