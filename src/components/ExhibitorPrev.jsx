import { useEffect } from "react";
import styles from "./ExhibitorPrev.module.css";

function ExhibitorPrev({
  id,
  img_url,
  name,
  selectedStand,
  setSelectedStand,
  itemRefs,
  scrollableContainerRef,
}) {
  useEffect(
    function () {
      if (selectedStand === id) {
        const container = scrollableContainerRef?.current;
        const element = itemRefs?.current[id];

        if (container && element) {
          const containerRect = container.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();

          if (elementRect.bottom > containerRect.bottom) {
            const overflow = elementRect.bottom - containerRect.bottom;
            container.scrollTo({
              top: container.scrollTop + overflow,
              behavior: "smooth",
            });
          }
        }
      }
    },
    [id, itemRefs, scrollableContainerRef, selectedStand]
  );
  return (
    <div ref={(el) => (itemRefs.current[id] = el)}>
      <li
        className={styles.prevContainer}
        onClick={() => setSelectedStand(selectedStand === id ? null : id)}
      >
        <p className={styles.standNumber}>
          <b>{id < 10 ? `0${id}` : id}</b>
        </p>
        <img src={img_url} />
        <p>{name}</p>
        <div className={styles.arrow}>
          <img
            src="/next.png"
            alt="next"
            style={selectedStand === id ? { transform: "rotate(90deg)" } : {}}
          />
        </div>
      </li>
      {selectedStand === id && (
        <div className={styles.moreInfo}>
          <p>Adres: Al. Jana Pawła II 39 A, 31-864 Kraków, Polska</p>
          <p>Mail: info@comarch.com</p>
          <p>Strona: www.comarch.pl</p>
          <p>Opis</p>
          <p>
            Comarch został założony w 1993 roku w Krakowie, a od 1999 roku jest
            notowany na warszawskiej Giełdzie Papierów Wartościowych. Jest jedną
            z największych firm informatycznych w Europie i prowadzi projekty
            dla czołowych marek z Polski i świata w najważniejszych sektorach
            gospodarki m.in.: telekomunikacji, finansach, bankowości i
            ubezpieczeniach, handlu i usług, infrastruktury IT,
          </p>
        </div>
      )}
    </div>
  );
}

export default ExhibitorPrev;
