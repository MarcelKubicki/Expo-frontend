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
            key={e.nazwa}
            exhibitorData={e}
            selectedStand={selectedStand}
            setSelectedStand={setSelectedStand}
            itemRefs={itemRefs}
            scrollableContainerRef={scrollableContainerRef}
          />
        ))}
        {/* <ExhibitorPrev
          id={1}
          img_url="/razer_logo.jpg"
          name="Razer"
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          id={2}
          img_url="/hyperx.jpg"
          name="HyperX"
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />

        <ExhibitorPrev
          id={3}
          img_url="/razer_logo.jpg"
          name="Megamar logistics & consulting Sp.z o.o."
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          id={4}
          // img_url="/razer_logo.jpg"
          name="Autocomp Managment Sp. z. o.o."
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          id={5}
          img_url="/razer_logo.jpg"
          name="Autocomp Managment Sp. z. o.o."
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          id={6}
          img_url="/razer_logo.jpg"
          name="Autocomp Managment Sp. z. o.o."
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          id={7}
          img_url="/razer_logo.jpg"
          name="Autocomp Managment Sp. z. o.o."
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          id={8}
          img_url="/razer_logo.jpg"
          name="Autocomp Managment Sp. z. o.o."
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          id={9}
          img_url="/razer_logo.jpg"
          name="Autocomp Managment Sp. z. o.o."
          selectedStand={selectedStand}
          setSelectedStand={setSelectedStand}
          itemRefs={itemRefs}
          scrollableContainerRef={scrollableContainerRef}
        />
        <ExhibitorPrev
          id={10}
          img_url="/razer_logo.jpg"
          name="Autocomp Managment Sp. z. o.o."
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
