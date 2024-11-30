import styles from "./EventPage.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import ExpoPlanSvg from "../components/ExpoPlanSvg";
import ExhibitorPrev from "../components/ExhibitorPrev";
import ExhibitorsList from "../components/ExhibitorsList";

function EventPage() {
  return (
    <>
      <main className={styles.eventPage}>
        <PageNav />
        <div className={styles.info}>
          <img
            className={styles.expoAvatar}
            src="https://warsawexpo.eu/wp-content/uploads/2019/07/food_tech_kafelek.jpg"
          />
          <div>
            <div className={styles.data}>
              <div className={styles.title}>
                <p>Food Tech Expo</p>
              </div>
              <div className={styles.date}>
                <img src="calendar.png" />
                <p>26 - 28 listopada 2024</p>
              </div>
            </div>
            <div className={styles.description}>
              <p>
                Food Tech Expo to wydarzenie, gdzie liderzy branży zaprezentują
                najnowsze technologie spożywcze i innowacyjne rozwiązania w tej
                dziedzinie. Kongres branżowy, będący integralną częścią targów,
                umożliwia uczestnikom aktualizację wiedzy, zdobycie nowych
                umiejętności oraz poznanie najnowszych trendów w technologii
                spożywczej. Dołącz do nas na targach, które są doskonałą okazją
                do nawiązania nowych relacji biznesowych oraz wymiany
                doświadczeń. Dynamiczne środowisko targów sprzyja rozwojowi
                biznesu poprzez bezpośredni kontakt z potencjalnymi partnerami i
                konkurencją.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.planContainer}>
          <div style={{ width: 420 }}>
            <ExpoPlanSvg />
          </div>
          <ExhibitorPrev />
        </div>
        <ExhibitorsList />
      </main>
      <Footer />
    </>
  );
}

export default EventPage;
