import styles from "./ExhibitorsFinder.module.css";
import { categories } from "../../data/categories";
import ExhibitorItem from "./ExhibitorItem";
import { useEffect, useState } from "react";

function ExhibitorsFinder({ selectedExhibitor, setSelectedExhibitor }) {
  const [exhibitors, setExhibitors] = useState([]);
  const [exhibName, setExhibName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(
    function () {
      async function get_exhibitors() {
        const res = await fetch(
          "http://127.0.0.1:8000/api/v1/exhibitors?" +
            new URLSearchParams({
              nam: exhibName,
              cat: category,
            }).toString()
        );
        const data = await res.json();
        setExhibitors(data);
      }

      get_exhibitors();
    },
    [exhibName, category]
  );

  return (
    <div className={styles.exhibitorsFinder}>
      <div className={styles.searchRow}>
        <input
          className={styles.finderBar}
          type="text"
          placeholder="Wpisz nazwę wystawcy..."
          value={exhibName}
          onChange={(e) => setExhibName(e.target.value)}
        />

        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled selected value="">
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
          {exhibitors.map((e) => (
            <ExhibitorItem
              key={e.exhib_name}
              exhibitor={e}
              selectedExhibitor={selectedExhibitor}
              setSelectedExhibitor={setSelectedExhibitor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExhibitorsFinder;
