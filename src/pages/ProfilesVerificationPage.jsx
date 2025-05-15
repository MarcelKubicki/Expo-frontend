import styles from "./ProfilesVerificationPage.module.css";
import { useEffect, useState } from "react";
import ExhibChecker from "../components/ExhibChecker";
import ExhibTile from "../components/ExhibTile";
function ProfilesVerificationPage() {
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);
  const [exhibitors, setExhibitors] = useState([]);

  useEffect(function () {
    async function get_exhibitors() {
      const res = await fetch(
        "http://127.0.0.1:8000/api/v1/exhibitors/unverified"
      );
      const data = await res.json();
      console.log(data);
      setExhibitors(data);
    }

    get_exhibitors();
  }, []);

  return (
    <main className={styles.catalogPage}>
      <div className={styles.listContainer}>
        <h3>Profile czekające na zatwierdzenie</h3>
        <ul className={styles.exhibList}>
          {exhibitors.length > 0 ? (
            exhibitors.map((e) => (
              <ExhibTile
                key={e.id}
                exhibitor={e}
                selectedExhibitor={selectedExhibitor}
                setSelectedExhibitor={setSelectedExhibitor}
              />
            ))
          ) : (
            <li className={styles.noRequestParagraph}>
              Brak nowych zgłoszeń...
            </li>
          )}
        </ul>
      </div>
      <ExhibChecker
        setExhibitors={setExhibitors}
        exhibitor={selectedExhibitor}
        selectedExhibitor={selectedExhibitor}
        setSelectedExhibitor={setSelectedExhibitor}
      />
    </main>
  );
}

export default ProfilesVerificationPage;
