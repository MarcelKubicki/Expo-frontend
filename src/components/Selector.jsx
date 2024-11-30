import styles from "./Selector.module.css";

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
        <option>Wszystkie</option>
        <option>Budowlane</option>
        <option>Motoryzacja</option>
      </select>
      <select className={styles.select}>
        <option disabled selected>
          Miesiac
        </option>
        <option>Wszystkie</option>
        <option>Styczen</option>
        <option>Luty</option>
        <option>Marczec</option>
      </select>
    </div>
  );
}

export default Selector;
