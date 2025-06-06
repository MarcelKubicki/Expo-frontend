import { useEffect, useState } from "react";
import styles from "./JoinRequestsPage.module.css";
import ExhibEventTile from "../../../features/admin/joinRequests/ExhibEventTile/ExhibEventTile";
import EventRequestModal from "../../../features/admin/joinRequests/EventRequestModal/EventRequestModal";

function JoinRequestsPage() {
  const [selectedEvent, setSelectedEvent] = useState();
  const [events, setEvents] = useState([]);

  useEffect(
    function () {
      async function getEvents() {
        try {
          const res = await fetch(
            "http://127.0.0.1:8000/api/v1/admin/unverified_join_requests"
          );
          const data = await res.json();
          console.log(data);
          setEvents(data);
        } catch (error) {
          console.log(error);
        }
      }
      getEvents();
    },
    [selectedEvent]
  );

  return (
    <main className={styles.catalogPage}>
      <div className={styles.listContainer}>
        <h3>Prośby czekające na zatwierdzenie</h3>
        <ul className={styles.exhibList}>
          {events.length > 0 ? (
            events.map((e) => (
              <ExhibEventTile
                key={e.id}
                exhibitor={e}
                selectedExhibitor={selectedEvent}
                setSelectedExhibitor={setSelectedEvent}
              />
            ))
          ) : (
            <li className={styles.noRequestParagraph}>
              Brak nowych zgłoszeń...
            </li>
          )}
        </ul>
      </div>
      {selectedEvent && (
        <EventRequestModal exhibitors={selectedEvent.exhibitors} />
      )}
    </main>
  );
}

export default JoinRequestsPage;
