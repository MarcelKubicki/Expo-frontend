import styles from "./ExhibitorsList.module.css";

function ExhibitorsList() {
  return (
    <div className={styles.exhibList}>
      <h2>Lista wystawców</h2>
      <ul>
        <li>
          <img src="razer_logo.jpg" />
          <h3>Razer</h3>
          <p>Stanowisko: 1</p>
        </li>
        <li>
          <img src="hyperx.jpg" />
          <h3>HyperX</h3>
          <p>Stanowisko: 2</p>
        </li>
        <li>
          <img src="razer_logo.jpg" />
          <h3>Razer</h3>
          <p>Stanowisko: 1</p>
        </li>
      </ul>
    </div>
  );
}

export default ExhibitorsList;
