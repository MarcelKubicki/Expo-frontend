import styles from "./ExhibitorsFinder.module.css";
import { categories } from "../../data/categories";
import ExhibitorItem from "./ExhibitorItem";

function ExhibitorsFinder() {
  return (
    <div className={styles.exhibitorsFinder}>
      <div className={styles.searchRow}>
        <input
          className={styles.finderBar}
          type="text"
          placeholder="Wpisz nazwę wystawcy..."
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
      </div>
      <div className={styles.listContainer}>
        <h2>Lista wystawców</h2>
        <ul className={styles.exhibList}>
          <ExhibitorItem />
          <ExhibitorItem />
          <ExhibitorItem />
          <ExhibitorItem />
          <ExhibitorItem />
          <ExhibitorItem />
          <ExhibitorItem />
          <ExhibitorItem />
          <ExhibitorItem />
          <ExhibitorItem />
        </ul>
      </div>
    </div>
  );
}

export default ExhibitorsFinder;
