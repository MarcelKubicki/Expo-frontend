import styles from "./Selector.module.css";
import { categories } from "../../data/categories";
import SelectCategory from "./SelectCategory";

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
        type="text"
        placeholder="Wpisz nazwe wydarzenia..."
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <SelectCategory
        category={category}
        setCategory={setCategory}
        className={styles.select}
      />

      <select
        className={styles.select}
        value={localization}
        onChange={(e) => setLocalization(e.target.value)}
      >
        <option selected value="">
          Lokalizacja
        </option>
        <option value="Kielce">Kielce</option>
        <option value="Warszawa">Warszawa</option>
      </select>

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
