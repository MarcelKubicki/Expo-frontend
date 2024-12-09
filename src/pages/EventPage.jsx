import styles from "./EventPage.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import ExpoPlanSvg from "../components/ExpoPlanSvg";
import ExhibitorsList from "../components/ExhibitorsList";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import months from "../../data/months";

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
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const [mapPosition, setMapPosition] = useState([50.8989821, 20.5859409]);
  const [selectedStand, setSelectedStand] = useState(null);
  const scrollableContainerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(
    function () {
      async function fetchEvent() {
        const res = await fetch(`http://127.0.0.1:8000/event/${eventId}`);
        const data = await res.json();
        setEvent(data);
        setMapPosition([data.lat, data.lng]);
      }
      fetchEvent();
    },
    [eventId]
  );

  const scrollToItem = (index) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <>
      <main className={styles.eventPage}>
        <PageNav />
        <div className={styles.info}>
          <img className={styles.expoAvatar} src={event.img_url} />
          <div className={styles.content}>
            <div className={styles.data}>
              <div className={styles.dataColumn}>
                <div className={styles.title}>
                  <p>{event.nazwa}</p>
                </div>
                <div className={styles.date}>
                  <img src="/calendar.png" alt="calendar_icon" />
                  <p>{getFormattedDate(event.data_rozpo, event.data_zakon)}</p>
                </div>
                <div className={styles.date}>
                  <img src="/localization.png" alt="localization_icon" />
                  <p>{event.lokalizacja}</p>
                </div>
              </div>
              <div className={styles.mapContainer}>
                <MapContainer
                  center={mapPosition}
                  zoom={11}
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
            </div>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: `${event.opis}` }}
            ></div>
            <div className={styles.galery}>
              <img src="https://foodtechexpo.pl/doc/galeria/mini/1.webp" />
              <img src="https://static.topagrar.pl/images/2019/10/30/o_453060_1280.webp" />
              <img src="https://www.worldfood.pl/wp-content/uploads/2022/07/wfp-sektory-foodtech.jpg" />
            </div>
          </div>
        </div>
        <div className={styles.planContainer}>
          <div style={{ width: 360 }}>
            <ExpoPlanSvg
              selectedStand={selectedStand}
              setSelectedStand={setSelectedStand}
              scrollToItem={scrollToItem}
            />
          </div>
          <ExhibitorsList
            selectedStand={selectedStand}
            setSelectedStand={setSelectedStand}
            scrollableContainerRef={scrollableContainerRef}
            itemRefs={itemRefs}
            exhibs={event.wystawcy}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EventPage;
