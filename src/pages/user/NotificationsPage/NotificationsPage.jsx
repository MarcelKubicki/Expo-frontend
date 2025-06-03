import { useEffect, useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useAuth } from "../../../context/AuthProvider";
import axios from "../../../services/axios";
import styles from "./NotificationsPage.module.css";

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
              {e.message ? (
                <FaCircleXmark className={styles.xMark} />
              ) : (
                <FaCircleCheck className={styles.checkMark} />
              )}
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
