import { useEffect } from "react";
import styles from "./ExhibitorPrev.module.css";

function ExhibitorPrev({
  exhibitorData,
  selectedStand,
  setSelectedStand,
  itemRefs,
  scrollableContainerRef,
}) {
  const {
    nr_stoiska: id,
    img_url,
    nazwa: name,
    telefon: tel,
    adres,
    mail,
    strona_url: side,
    opis,
  } = exhibitorData;

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
        {img_url ? (
          <img src={img_url} />
        ) : (
          <div className={styles.img_alt}></div>
        )}
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
          <div className={styles.basicInfoContainer}>
            <img src={img_url} />
            <div className={styles.rowsContatiner}>
              <p>
                <b>{name}</b>
              </p>
              <div className={styles.row}>
                <img src="/localization.png" />
                <p>{adres}</p>
              </div>
              <div className={styles.row}>
                <img src="/mail.png" />
                <p>{mail}</p>
              </div>
              <div className={styles.row}>
                <img src="/domain.png" />
                <a href={side}>{side}</a>
              </div>
            </div>
          </div>

          <p className={styles.descTag}>Opis</p>
          <div dangerouslySetInnerHTML={{ __html: `${opis}` }}></div>
        </div>
      )}
    </div>
  );
}

export default ExhibitorPrev;
