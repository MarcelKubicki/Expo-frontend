import { Outlet } from "react-router-dom";

import ExhibitorsFinder from "../../../features/user/catalog/ExhibitorsFinder/ExhibitorsFinder";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  return (
    <main className={styles.catalogPage}>
      <ExhibitorsFinder />
      <div className={styles.exhibitorModalContainer}>
        <div className={styles.modalUnactive}>
          <img src="/arrow.svg" />
          <p>
            Wybierz wystawce z listy obok aby wyświetlić więcej informacji...
          </p>
        </div>
        <Outlet />
      </div>
    </main>
  );
}

export default CatalogPage;
