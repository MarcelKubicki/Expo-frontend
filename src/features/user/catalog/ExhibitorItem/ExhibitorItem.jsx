import { Link, useParams } from "react-router-dom";

import styles from "./ExhibitorItem.module.css";

function ExhibitorItem({ exhibitor }) {
  const { id, img_url, exhib_name, categ_name, short_desc } = exhibitor;
  const { exhibitorId } = useParams();
  const selectedExhibitor = Number(exhibitorId);

  return (
    <li>
      <Link
        to={`${id}`}
        className={`${styles.prevContainer} ${
          id === selectedExhibitor ? styles.activePrevContainer : ""
        }`}
      >
        <img src={img_url} />

        <div>
          <p className={styles.name}>{exhib_name}</p>
          <p className={styles.description}>{short_desc}</p>
        </div>
        <div className={styles.category}>{categ_name}</div>
      </Link>
    </li>
  );
}

export default ExhibitorItem;
