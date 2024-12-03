import EventItem from "./EventItem";
import styles from "./EventsGrid.module.css";

function EventsGrid({ events }) {
  return (
    <div className={styles.eventsGrid}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          thumbnail={event.img_url}
          title={event.nazwa}
          localization={event.lokalizacja}
          desc={event.opis}
          category={event.kategoria}
          startDate={event.data_rozpo}
          endDate={event.data_zakon}
        />
      ))}
    </div>
  );
}

export default EventsGrid;
