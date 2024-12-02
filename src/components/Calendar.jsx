import Selector from "./Selector";
import styles from "./Calendar.module.css";
import EventsGrid from "./EventsGrid";
import { useEffect, useState } from "react";

function Calendar() {
  const [events, setEvents] = useState([]);
  useEffect(function () {
    async function fetchEvents() {
      const res = await fetch("http://127.0.0.1:8000/all_events");
      const data = await res.json();
      setEvents(data["data"]);
      console.log(data);
    }
    fetchEvents();
  }, []);
  return (
    <div className={styles.calendar}>
      <Selector />
      <EventsGrid events={events} />
    </div>
  );
}

export default Calendar;
