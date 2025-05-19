import { useEffect, useState, useRef } from "react";
import { Outlet, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Footer from "../components/Footer";
import ExpoPlanSvg from "../components/ExpoPlanSvg";
import ExhibitorsList from "../components/ExhibitorsList";
import { useEvent } from "../context/EventProvider";
import styles from "./EventPage.module.css";
import months from "../../data/months";
import { useAuth } from "../context/AuthProvider";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

function getFormattedDate(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const isSameMonth = startDate.getMonth() === endDate.getMonth();

  return `${startDate.getDate()} ${
    isSameMonth ? "" : months[startDate.getMonth()]
  } - ${endDate.getDate()} ${
    months[endDate.getMonth()]
  } ${startDate.getFullYear()}`;
}

function EventPage() {
  const { auth } = useAuth();
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const [mapPosition, setMapPosition] = useState();
  const [selectedStand, setSelectedStand] = useState(null);
  const { activeStands, setActiveStands, isTakingPart, setIsTakingPart } =
    useEvent();
  const scrollableContainerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(
    function () {
      async function fetchEvent() {
        const res = await fetch(
          `http://127.0.0.1:8000/api/v1/events/event/${eventId}`
        );
        const data = await res.json();
        setEvent(data);
        setMapPosition([data.lat, data.lng]);
        setActiveStands(() => {
          const active = data.exhibitors.filter((e) => e.is_verified);
          return active.map((e) => e.stand_num);
        });
        setIsTakingPart(() => {
          const result = data.exhibitors.filter(
            (e) => e.user_id === auth.userId
          );

          return result.length > 0;
        });
      }
      fetchEvent();
    },
    [eventId, setActiveStands, auth.userId]
  );

  const scrollToItem = (index) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <>
      <Outlet />
      <main className={styles.eventPage}>
        <div className={styles.info}>
          <img className={styles.expoAvatar} src={event.img_url} />

          <div className={styles.content}>
            <div className={styles.data}>
              <div className={styles.dataColumn}>
                <div className={styles.title}>
                  <p>{event.event_name}</p>
                </div>

                <div className={styles.date}>
                  <FaRegCalendarAlt />
                  <p>{getFormattedDate(event.date_start, event.date_end)}</p>
                </div>

                <div className={styles.date}>
                  <IoMdPin />
                  <p>{event.loc_name}</p>
                </div>
              </div>

              {mapPosition && (
                <div className={styles.mapContainer}>
                  <MapContainer
                    center={mapPosition}
                    zoom={9}
                    scrollWheelZoom={true}
                    className={styles.map}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={mapPosition}>
                      <Popup>Tu odbywają się targi</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              )}
            </div>

            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: `${event.long_desc}` }}
            ></div>

            <div className={styles.galery}>
              {event?.photos_urls?.map((photo_url) => (
                <img key={photo_url} src={photo_url} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.planContainer}>
          <div className={styles.expoMapContainer}>
            <h2 className={styles.titleMap}>Plan rozmieszczenia stoisk</h2>
            <ExpoPlanSvg
              selectedStand={selectedStand}
              setSelectedStand={setSelectedStand}
              scrollToItem={scrollToItem}
              activeStands={activeStands}
            />
          </div>

          <ExhibitorsList
            selectedStand={selectedStand}
            setSelectedStand={setSelectedStand}
            scrollableContainerRef={scrollableContainerRef}
            itemRefs={itemRefs}
            exhibs={event.exhibitors?.filter((e) => e.is_verified)}
            isTakingPart={isTakingPart}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EventPage;
