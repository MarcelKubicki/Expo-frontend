import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h4>Dane firmowe</h4>
        <p>Expo Sp. z o.o.</p>
        <p>ul. Al. Tysiaclecia Państwa Polskiego 7</p>
        <p>25-314 Kielce, Polska</p>
        <p>NIP 2137420123 </p>
      </div>
      <div className={styles.contact}>
        <h4>Kontakt</h4>
        <div>
          <img src="/phone-call.png" />
          <p>+48 123 234 547</p>
        </div>
        <div>
          <img src="/mail.png" />
          <p>biuro@expo.pl</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
