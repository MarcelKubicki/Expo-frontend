import EventItem from "./EventItem";
import styles from "./EventsGrid.module.css";

function EventsGrid() {
  return (
    <div className={styles.eventsGrid}>
      <EventItem
        thumbnail="https://warsawexpo.eu/wp-content/uploads/2019/07/food_tech_kafelek.jpg"
        title="Food Tech Expo"
        desc="Międzynarodowe targi technologii spozywczych"
      />
      <EventItem
        thumbnail="https://warsawexpo.eu/wp-content/uploads/2021/06/solar_kafelek.jpg"
        title="Solar Energy Expo"
        desc="Branzowe targi przemysłu odnawialnych zrodel energii"
      />
      <EventItem
        thumbnail="https://warsawexpo.eu/wp-content/uploads/2018/01/kafelek_ctr_pl-1.png"
        title="Centralne Targi Rolnicze"
        desc="Branzowe targi przemysłu odnawialnych zrodel energii"
      />
      <EventItem
        thumbnail="https://warsawexpo.eu/wp-content/uploads/2024/03/Wire-Tech-Poland-kafelek.webp"
        title="Wire-Tech Poland"
        desc="Miedzynarodowe targi technologii kabli i przewodów"
      />
      <EventItem
        thumbnail="https://warsawexpo.eu/wp-content/uploads/2024/03/Wire-Tech-Poland-kafelek.webp"
        title="Wire-Tech Poland"
        desc="Miedzynarodowe targi technologii kabli i przewodów"
      />
      <EventItem
        thumbnail="https://warsawexpo.eu/wp-content/uploads/2018/01/kafelek_ctr_pl-1.png"
        title="Centralne Targi Rolnicze"
        desc="Branzowe targi przemysłu odnawialnych zrodel energii"
      />
      <EventItem
        thumbnail="https://warsawexpo.eu/wp-content/uploads/2021/06/solar_kafelek.jpg"
        title="Solar Energy Expo"
        desc="Branzowe targi przemysłu odnawialnych zrodel energii"
      />
    </div>
  );
}

export default EventsGrid;
