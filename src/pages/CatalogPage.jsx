import { useState } from "react";
import Banner from "../components/Banner";
import ExhibitorDetails from "../components/ExhibitorDetails";
import ExhibitorsFinder from "../components/ExhibitorsFinder";
import Footer from "../components/Footer";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);
  return (
    <>
      <Banner>
        <h1 style={{ color: "white" }}>Katalog wystawców imprez targowych</h1>
        <p style={{ color: "white" }}>
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
      {/* <Footer /> */}
    </>
  );
}

export default CatalogPage;
