import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { categories } from "../../../../../data/categories";
import { useExhibitors } from "../useExhibitors";
import { clearParams } from "../../../../utils/helpers";
import ExhibitorItem from "../ExhibitorItem/ExhibitorItem";
import Spinner from "../../../../ui/Spinner/Spinner";
import styles from "./ExhibitorsFinder.module.css";

function ExhibitorsFinder({ selectedExhibitor, setSelectedExhibitor }) {
  const [exhibName, setExhibName] = useState("");
  const [category, setCategory] = useState("");
  const [, setSearchParams] = useSearchParams();
  const { isLoading, exhibitors, error } = useExhibitors();

  useEffect(
    function () {
      const params = clearParams({
        nam: exhibName,
        cat: category,
      });
      if (Object.hasOwn(params, "nam") && params?.nam.length < 3) return;
      setSearchParams(params);
    },
    [exhibName, category, setSearchParams]
  );

  return (
    <div className={styles.exhibitorsFinder}>
      <div className={styles.searchRow}>
        <input
          className={styles.finderBar}
          type="search"
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
        <h2>
          <span className={styles.listContainerHeader}>Lista wystawców</span>
        </h2>
        <ul className={styles.exhibList}>
          {isLoading ? (
            <Spinner />
          ) : (
            exhibitors.map((e) => (
              <ExhibitorItem
                key={e.exhib_name}
                exhibitor={e}
                selectedExhibitor={selectedExhibitor}
                setSelectedExhibitor={setSelectedExhibitor}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default ExhibitorsFinder;
