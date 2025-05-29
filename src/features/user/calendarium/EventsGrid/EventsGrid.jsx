import EventItem from "../EventItem/EventItem";
import styles from "./EventsGrid.module.css";

function EventsGrid({ events }) {
  return (
    <div className={styles.eventsGrid}>
      {events.map((event) => (
        <EventItem
          key={event.event_name}
          id={event.id}
          thumbnail={event.img_url}
          title={event.event_name}
          localization={event.loc_name}
          desc={event.short_desc}
          category={event.categ_name}
          startDate={event.date_start}
          endDate={event.date_end}
        />
      ))}
    </div>
  );
}

export default EventsGrid;
