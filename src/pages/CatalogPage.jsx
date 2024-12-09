import Banner from "../components/Banner";
import ExhibitorDetails from "../components/ExhibitorDetails";
import ExhibitorsFinder from "../components/ExhibitorsFinder";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  return (
    <>
      <PageNav />
      <Banner>
        <h1 style={{ color: "white" }}>Katalog wystawców imprez targowych</h1>
        <p style={{ color: "white" }}>
          Przeglądaj tysiące zarejestrowanych na naszym serwisie aktywnie
          uczesniczacych w targach wystawców
        </p>
      </Banner>
      <main className={styles.catalogPage}>
        <ExhibitorsFinder />
        <ExhibitorDetails />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default CatalogPage;
