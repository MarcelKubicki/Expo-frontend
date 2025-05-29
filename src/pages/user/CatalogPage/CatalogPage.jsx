import { useState } from "react";

import ExhibitorDetails from "../../../features/user/catalog/ExhibitorDetails/ExhibitorDetails";
import ExhibitorsFinder from "../../../features/user/catalog/ExhibitorsFinder/ExhibitorsFinder";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);

  return (
    <main className={styles.catalogPage}>
      <ExhibitorsFinder
        selectedExhibitor={selectedExhibitor}
        setSelectedExhibitor={setSelectedExhibitor}
      />

      <ExhibitorDetails
        selectedExhibitor={selectedExhibitor}
        setSelectedExhibitor={setSelectedExhibitor}
      />
    </main>
  );
}

export default CatalogPage;
