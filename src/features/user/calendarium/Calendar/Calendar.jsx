import styles from "./Calendar.module.css";
import Selector from "../Selector/Selector";
import EventsGrid from "../EventsGrid/EventsGrid";

import { useEvents } from "../useEvents";

function Calendar() {
  const { isLoading, error, events } = useEvents();

  if (isLoading) return <div>Loading... </div>;

  return (
    <div className={styles.calendar}>
      <Selector />
      <EventsGrid events={events} />
    </div>
  );
}

export default Calendar;
