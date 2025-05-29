import Banner from "../../../ui/Banner/Banner";
import Calendar from "../../../features/user/calendarium/Calendar/Calendar";
import Footer from "../../../ui/Footer/Footer";
import styles from "./Calendarium.module.css";

function Homepage() {
  return (
    <>
      <Banner>
        <h1 style={{ color: "white" }}>Kalendarz Targowy</h1>
        <p style={{ color: "white" }}>
          Wyszukaj interesujące cię wydarzenie i weź w nim udział
        </p>
      </Banner>
      <Calendar />
      <Footer />
    </>
  );
}

export default Homepage;
