import styles from "./ExhibitorItem.module.css";

function ExhibitorItem() {
  return (
    <li className={styles.prevContainer}>
      <img src="../../public/razer_logo.jpg" />

      <p>Razer</p>
      <div className={styles.arrow}>
        <img
          src="/next.png"
          alt="next"
          // style={
          //   selectedStand === id ? { transform: "rotate(90deg)" } : {}
          // }
        />
      </div>
    </li>
  );
}

export default ExhibitorItem;
