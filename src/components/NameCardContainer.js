import styles from "./NameCardContainer.module.css";
const NameCardContainer = () => {
  return (
    <div className={styles.nameGeorgeKassahunBeyeneParent}>
      <div className={styles.nameGeorgeKassahun}>
        Name: George Kassahun Beyene
      </div>
      <div className={styles.phoneNumber0912345678}>
        phone number- 0912345678
      </div>
      <div className={styles.addressGeorginia}>Address: Georginia</div>
      <div className={styles.dateOfCrime}>Date of Crime- 17/05/23</div>
      <div className={styles.dateOfBirth}>{`Date of birth: 02/12/1990 `}</div>
      <div className={styles.genderMale}>Gender- Male</div>
      <div className={styles.age33}>Age: 33</div>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.lineDiv} />
      <div className={styles.frameChild1} />
      <div className={styles.frameChild2} />
      <div className={styles.frameChild3} />
      <div className={styles.frameChild4} />
      <div className={styles.frameChild5} />
      <img className={styles.icon} alt="" src="/1873414-11@2x.png" />
      <div className={styles.biometricsRegisteredSuccessfContainer}>
        <p className={styles.biometrics}> Biometrics</p>
        <p className={styles.biometrics}>{`      registered `}</p>
        <p className={styles.biometrics}> Successfully!</p>
      </div>
      <div className={styles.details}>Details</div>
    </div>
  );
};

export default NameCardContainer;
