import styles from "./NotificationsPage.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "../axios";

function NotificationsPage() {
  const { auth } = useAuth();
  const [notifications, setNotifications] = useState();

  useEffect(
    function () {
      async function fetchNotifications() {
        try {
          const response = await axios.get(
            `/exhibitors/notifications/${auth.userId}`
          );
          console.log(response.data);
          setNotifications(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchNotifications();
    },
    [auth.userId]
  );

  return (
    <main className={styles.mainContainer}>
      <div className={styles.modal}>
        <h1>Powiadomienia</h1>
        <ul className={styles.listContainer}>
          {notifications?.map((e) => (
            <li key={e.id}>
              <img src={e.message ? "/delete.png" : "/check.png"} />
              <div>
                <p className={styles.notificationTitle}>{e.name}</p>
                <p className={styles.notificationMessage}>{e.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default NotificationsPage;
