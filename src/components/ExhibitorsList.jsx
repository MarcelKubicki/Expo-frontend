import ExhibitorPrev from "./ExhibitorPrev";
import styles from "./ExhibitorsList.module.css";

function ExhibitorsList({
  selectedStand,
  setSelectedStand,
  scrollableContainerRef,
  itemRefs,
  exhibs = [],
}) {
  return (
    <div className={styles.listContainer}>
      <h2>Lista wystawców</h2>
      <div className={styles.exhibList} ref={scrollableContainerRef}>
        {exhibs.map((e) => (
          <ExhibitorPrev
            key={e.exhib_name}
            exhibitorData={e}
            selectedStand={selectedStand}
            setSelectedStand={setSelectedStand}
            itemRefs={itemRefs}
            scrollableContainerRef={scrollableContainerRef}
          />
        ))}
        {/* <ExhibitorPrev
          exhibitorData={{
            stand_num: 3,
            img_url: "/razer_logo.jpg",
            exhib_name: "Razer",
            adres: "Kielce ul. Jana Pawła 4",
            mail: "razer@razer.pl",
            site: "razer.pl",
            description: "elo",
          }}
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          exhibitorData={{
            stand_num: 4,
            img_url: "/hyperx.jpg",
            exhib_name: "HyperX",
            adres: "Kielce ul. Jana Pawła 4",
            mail: "razer@razer.pl",
            site: "razer.pl",
            description: "elo",
          }}
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          exhibitorData={{
            stand_num: 5,
            img_url: "/razer_logo.jpg",
            exhib_name: "Razer",
            adres: "Kielce ul. Jana Pawła 4",
            mail: "razer@razer.pl",
            site: "razer.pl",
            description: "elo",
          }}
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          exhibitorData={{
            stand_num: 6,
            img_url: "/razer_logo.jpg",
            exhib_name: "Razer",
            adres: "Kielce ul. Jana Pawła 4",
            mail: "razer@razer.pl",
            site: "razer.pl",
            description: "elo",
          }}
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          exhibitorData={{
            stand_num: 7,
            img_url: "/razer_logo.jpg",
            exhib_name: "Razer",
            adres: "Kielce ul. Jana Pawła 4",
            mail: "razer@razer.pl",
            site: "razer.pl",
            description: "elo",
          }}
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          exhibitorData={{
            stand_num: 8,
            img_url: "/razer_logo.jpg",
            exhib_name: "Razer",
            adres: "Kielce ul. Jana Pawła 4",
            mail: "razer@razer.pl",
            site: "razer.pl",
            description: "elo",
          }}
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          exhibitorData={{
            stand_num: 9,
            img_url: "/razer_logo.jpg",
            exhib_name: "Razer",
            adres: "Kielce ul. Jana Pawła 4",
            mail: "razer@razer.pl",
            site: "razer.pl",
            description: "elo",
          }}
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          exhibitorData={{
            stand_num: 10,
            img_url: "/razer_logo.jpg",
            exhib_name: "Razer",
            adres: "Kielce ul. Jana Pawła 4",
            mail: "razer@razer.pl",
            site: "razer.pl",
            description: "elo",
          }}
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        /> */}
      </div>
    </div>
  );
}

export default ExhibitorsList;
