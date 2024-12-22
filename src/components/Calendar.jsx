import Selector from "./Selector";
import styles from "./Calendar.module.css";
import EventsGrid from "./EventsGrid";
import { useEffect, useState } from "react";

function Calendar() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");
  const [localization, setLocalization] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(
    function () {
      async function fetchEvents() {
        const res = await fetch(
          "http://127.0.0.1:8000/api/v1/events?" +
            new URLSearchParams({
              nam: eventName,
              cat: category,
              loc: localization,
              sdate: startDate,
              edate: endDate,
            }).toString()
        );
        const data = await res.json();
        setEvents(data);
      }
      fetchEvents();
    },
    [eventName, category, localization, startDate, endDate]
  );

  return (
    <div className={styles.calendar}>
      <Selector
        eventName={eventName}
        setEventName={setEventName}
        category={category}
        setCategory={setCategory}
        localization={localization}
        setLocalization={setLocalization}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <EventsGrid events={events} />
    </div>
  );
}

export default Calendar;
