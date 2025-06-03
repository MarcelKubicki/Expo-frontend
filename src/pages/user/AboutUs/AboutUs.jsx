import { Link } from "react-router-dom";
import { FaUserTie, FaRegCalendarAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";

import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { useUpcoming } from "../../../features/user/calendarium/useUpcoming";
import Spinner from "../../../ui/Spinner/Spinner";
import MapPolandSvg from "../../../ui/MapPolandSvg";
import Banner from "../../../ui/Banner/Banner";
import Footer from "../../../ui/Footer/Footer";
import styles from "./AboutUs.module.css";

function AboutUs() {
  const { isLoading, data: upcomingEvents, error } = useUpcoming();
  const width = useWindowWidth();
  const isMobile = width < 800;

  return (
    <>
      <Banner>
        <h1 className={styles.bannerHeading}>EXPO </h1>
        <p className={styles.bannerDesc}>
          Katalog imprez oraz wystawców targowych
        </p>
      </Banner>
      <main className={styles.aboutUs}>
        <div className={styles.rowInfoContainer}>
          <div className={styles.rowInfoLeft}>
            {isMobile ? (
              <h3>Śledzimy największe obiekty targowe w Polsce</h3>
            ) : (
              <MapPolandSvg />
            )}
          </div>
          <div className={styles.rowInfoRight}>
            {isMobile ? (
              <MapPolandSvg />
            ) : (
              <h3>Śledzimy największe obiekty targowe w Polsce</h3>
            )}
            <p className={styles.rowInfoRightDesc}>
              Oferujemy wgląd do kalendarza imprez targowych odbywających się w
              czołowych obiektach na terenie całej polski. Dzięki nam będziesz
              zawsze doinformowany na czas o bierzących wydarzeniach oraz
              unikniesz mozolnego procesu wertowania stron organizatorów w celu
              znaleznia interesującej cię imprezy.
            </p>
            <div className={styles.rowIcons}>
              <div>
                <FaUserTie className={styles.statIcon} />
                <p className={styles.numbers}>15 000</p>
                <p>Wystawców</p>
              </div>

              <div>
                <BsFillBuildingsFill className={styles.statIcon} />
                <p className={styles.numbers}>7</p>
                <p>Obiektów</p>
              </div>

              <div>
                <FaRegCalendarAlt className={styles.statIcon} />
                <p className={styles.numbers}>2000+</p>
                <p>Imprez rocznie</p>
              </div>
            </div>
            <div className={styles.buttonRow}>
              <Link to="/">
                <button className={styles.calendariumBtn}>
                  Przejdź do kalendarium targowego
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.upcomingEventsContainer}>
          <p className={styles.upcomingEventsTitle}>Nadchodzące wydarzenia</p>
          <div className={styles.upcomingEventsLinks}>
            {isLoading ? (
              <Spinner />
            ) : (
              upcomingEvents.map((e) => (
                <Link to={`/event/${e.id}`} key={e.id}>
                  <img src={e.img_url} />
                </Link>
              ))
            )}
          </div>
        </div>

        <div className={styles.joinUsContainer}>
          <div className={styles.joinUsInfo}>
            <h3>
              Zostań naszym uzytkownikiem juz dziś i zapisuj się na wydarzenia
            </h3>
            {isMobile && <MdGroups className={styles.groupIcon} />}
            <p>
              Jesteś wystawcą targowym? Koniecznie zarejestruj się w naszym
              serwisie! Utwórz swoje osobiste konto, wprowadź dane kontaktowe
              wraz ze szczegółowym opisem zakresu twojej działalności oraz
              oferowanymi przez ciebie usługami, rozwiązaniami lub produktami.
              Bez wychodzenia z domu, wykonywania telefonów czy przeszukiwania
              stron internetowych dołącz do imprezy targowej za pomocą jednego
              kliknięcia. Łatwy i przejrzysty interfejs pozwoli precyzyjnie
              wybrać stanowisko wystawowe, na mapie rozplanowanej juz
              przestrzenie hali targowej w której będzie odbywać się
              interesujące cię wydarzenie.
            </p>
            <Link to="/register">
              <button className={styles.registerBtn}>Zostań wystawcą</button>
            </Link>
          </div>
          {!isMobile && <MdGroups className={styles.groupIcon} />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
