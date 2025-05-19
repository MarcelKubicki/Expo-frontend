import styles from "./CatalogPage.module.css";
import Banner from "../../../ui/Banner/Banner";
import ExhibitorDetails from "../../../features/user/catalog/ExhibitorDetails/ExhibitorDetails";
import ExhibitorsFinder from "../../../features/user/catalog/ExhibitorsFinder/ExhibitorsFinder";
import { useState } from "react";

function CatalogPage() {
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);

  return (
    <>
      <Banner>
        <h1 className={styles.bannerTitle}>
          Katalog wystawców imprez targowych
        </h1>

        <p className={styles.bannerDescription}>
          Przeglądaj tysiące zarejestrowanych na naszym serwisie aktywnie
          uczesniczacych w targach wystawców
        </p>
      </Banner>

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
    </>
  );
}

export default CatalogPage;
