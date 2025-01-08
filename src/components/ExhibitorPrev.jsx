import styles from "./ExhibitorPrev.module.css";
import { useEffect } from "react";

function ExhibitorPrev({
  exhibitorData,
  selectedStand,
  setSelectedStand,
  itemRefs,
  scrollableContainerRef,
}) {
  const {
    stand_num: id,
    img_url,
    exhib_name: name,
    adres,
    mail,
    site_url: site,
    description,
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
        <p className={styles.exhibitorName}>{name}</p>
        <div className={styles.arrow}>
          <img
            src="/right-arrow.png"
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
              <p className={styles.exhibitorName}>
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
                <a href={site} target="_blank" rel="noopener noreferrer">
                  {site}
                </a>
              </div>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
        </div>
      )}
    </div>
  );
}

export default ExhibitorPrev;
