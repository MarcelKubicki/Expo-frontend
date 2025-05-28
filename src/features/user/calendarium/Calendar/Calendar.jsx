import styles from "./Calendar.module.css";
import Selector from "../Selector/Selector";
import EventsGrid from "../EventsGrid/EventsGrid";

import { useEvents } from "../useEvents";
import Spinner from "../../../../ui/Spinner/Spinner";

function Calendar() {
  const { isLoading, error, events } = useEvents();

  return (
    <div className={styles.calendar}>
      <Selector />
      {isLoading ? <Spinner /> : <EventsGrid events={events} />}
    </div>
  );
}

export default Calendar;
