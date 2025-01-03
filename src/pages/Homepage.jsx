import Banner from "../components/Banner";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

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
