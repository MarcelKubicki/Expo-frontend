import styles from "./EventPage.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import ExpoPlanSvg from "../components/ExpoPlanSvg";
import ExhibitorsList from "../components/ExhibitorsList";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function EventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const [mapPosition, setMapPosition] = useState([50.8989821, 20.5859409]);
  const [selectedStand, setSelectedStand] = useState(null);
  const scrollableContainerRef = useRef(null);
  const itemRefs = useRef([]);

  const scrollToItem = (index) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  useEffect(
    function () {
      async function fetchEvent() {
        const res = await fetch(`http://127.0.0.1:8000/event/${eventId}`);
        const data = await res.json();
        setEvent(data);
      }
      fetchEvent();
    },
    [eventId]
  );

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
                  <p>26 - 28 listopada 2024</p>
                </div>
                <div className={styles.date}>
                  <img src="/localization.png" alt="localization_icon" />
                  <p>Kielce</p>
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
            <div className={styles.description}>
              <p>
                <b>
                  Food Tech Expo - Międzynarodowe tragi technologi spozywczych
                </b>
              </p>
              <p>
                Food Tech Expo to wydarzenie, gdzie liderzy branży zaprezentują
                najnowsze technologie spożywcze i innowacyjne rozwiązania w tej
                dziedzinie. Kongres branżowy, będący integralną częścią targów,
                umożliwia uczestnikom aktualizację wiedzy, zdobycie nowych
                umiejętności oraz poznanie najnowszych trendów w technologii
                spożywczej. Dołącz do nas na targach, które są doskonałą okazją
                do nawiązania nowych relacji biznesowych oraz wymiany
                doświadczeń. Dynamiczne środowisko targów sprzyja rozwojowi
                biznesu poprzez bezpośredni kontakt z potencjalnymi partnerami i
                konkurencją. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce ipsum magna, euismod id risus et, pharetra euismod
                odio.rat volutpat. Ut id vehicula magna. Integer non lacus nisl.
                Integer sagittis pretium odio, non luctus enim dapibus vel. Nunc
                hendrerit velit at consequat feugiat. Inte
              </p>
              <p>
                <b>Vivamus condimentum vulputate urna non rhoncus.</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ipsum magna, euismod id risus et, pharetra euismod odio.
                Vestibulum at nunc tincidunt, pretium mauris ut, malesuada
                dolor. Aliquam erat volutpat. Ut id vehicula magna. Integer non
                lacus nisl. Integer sagittis pretium odio, non luctus enim
                dapibus vel. Nunc hendrerit velit at consequat feugiat. Integer
                nec lorem sit amet justo maximus efficitur. Sed tempor risus nec
                metus accumsan, eget venenatis arcu vestibulum. Vivamus
                condimentum vulputate urna non rhoncus. Nulla laoreet mollis
                augue, et accumsan tellus porttitor et. Suspendisse potenti.
                Pellentesque sed lacus laoreet quam scelerisque viverra vel ac
                metus. Suspendisse condimentum felis ac molestie dictum. Etiam a
                tincidunt est. Integer vestibulum, eros vel fermentum tempor,
                libero turpis viverra nulla, eu condimentum ipsum mi vitae ex.
              </p>
            </div>
            <div className={styles.galery}>
              <img src="https://foodtechexpo.pl/doc/galeria/mini/1.webp" />
              <img src="https://foodtechexpo.pl/doc/galeria/mini/2.webp" />
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
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EventPage;
