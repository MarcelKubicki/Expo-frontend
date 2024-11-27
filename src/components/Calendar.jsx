import Selector from "./Selector";
import styles from "./Calendar.module.css";
import EventsGrid from "./EventsGrid";

function Calendar() {
  return (
    <div className={styles.calendar}>
      <Selector />
      <EventsGrid />
    </div>
  );
}

export default Calendar;
