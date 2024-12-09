import styles from "./ExhibitorModal.module.css";

function ExhibitorModal() {
  return (
    <div className={styles.modal}>
      <button className={styles.closeBtn}>X</button>

      <div className={styles.basicInfoContainer}>
        <img src="/razer_logo.jpg" />
        <div className={styles.rowsContatiner}>
          <p>
            <b>name</b>
          </p>
          <div className={styles.row}>
            <img src="/localization.png" />
            <p>adres</p>
          </div>
          <div className={styles.row}>
            <img src="/mail.png" />
            <p>mail</p>
          </div>
          <div className={styles.row}>
            <img src="/domain.png" />
            <a>side.com</a>
          </div>
        </div>
      </div>

      <p className={styles.descTag}>Opis</p>
      <div>
        {" "}
        Firma inżynierska z ponad 30-letnią tradycją. Doświadczenie oraz
        kompetencje pracowników pozwalają na wdrażanie profesjonalnych rozwiązań
        z zakresu łączności dla służb odpowiedzialnych za utrzymanie
        bezpieczeństwa i porządku publicznego, wojska, przemysłu, transportu,
        energetyki oraz innych przedsiębiorstw. Wśród propozycji firmy AKSEL dla
        klientów znajdują się m.in.: systemy radiokomunikacyjne TETRA, DMR i
        szerokopasmowe PTT, radiotelefony i akcesoria w tym kamuflowane,
        specjalistyczne systemy teleinformatyczne oraz profesjonalne szkolenia
        techniczne. Istotną pozycją w ofercie jest oprogramowanie dyspozytorskie
        ConSEL, będące autorskim rozwiązaniem firmy AKSEL, które uzyskało
        akredytację Motorola Solutions do współpracy z urządzeniami MOTOTRBO i
        TETRA. ConSEL zapewnia szeroki wachlarz usług i funkcjonalności, a jako
        oprogramowanie otwarte i elastyczne może być dostosowywane do
        specyficznych wymagań klienta. Autoryzowany dystrybutor i partner
        aplikacyjny MOTOROLA.
      </div>
      <p className={styles.descTag}>Historia wystąpień</p>
      <ul>
        <li>26-28.08.2024 Rosół Expo Kielce</li>
      </ul>
    </div>
  );
}

export default ExhibitorModal;
