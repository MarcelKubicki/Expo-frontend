import styles from "./Selector.module.css";
import { categories } from "../../data/categories";

function Selector() {
  return (
    <div className={styles.selector}>
      <input
        className={styles.searchbar}
        type="text"
        placeholder="Wpisz nazwe wydarzenia"
      />

      <select className={styles.select}>
        <option disabled selected>
          Kategoria
        </option>
        {categories.map((c) => (
          <option key={c.value} value={c.value}>
            {c.name}
          </option>
        ))}
      </select>

      <input type="date" className={styles.select} />
      <input type="date" className={styles.select} />
    </div>
  );
}

export default Selector;
