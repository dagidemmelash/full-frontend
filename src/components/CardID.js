import styles from "./CardID.module.css";
const CardID = ({ onButtonS40Click }) => {
  return (
    <div className={styles.component1}>
      <div className={styles.component1Child} />
      <div className={styles.component1Item} />
      <input
        className={styles.component1Inner}
        type="text"
        placeholder="ENTER ID"
        maxLength
        minLength
        required
        autoFocus
        id="text"
      />
      <h1 className={styles.id}>ID</h1>
      <div className={styles.password}>Password</div>
      <input
        className={styles.rectangleInput}
        type="password"
        placeholder="ENTER PASSWORD"
        maxLength={20}
        minLength={8}
        required
        autoFocus
      />
      <b className={styles.federalOfficeDepartmentContainer}>
        <p className={styles.federalOffice}>{`Federal Office `}</p>
        <p className={styles.federalOffice}> Department</p>
      </b>
      <button className={styles.buttonS40} onClick={onButtonS40Click}>
        <div className={styles.button}>
          <button className={styles.label} autoFocus>
            <div className={styles.label1}>Login</div>
          </button>
        </div>
      </button>
      <img
        className={styles.noiseTexture}
        alt=""
        src="/noise--texture1@2x.png"
      />
    </div>
  );
};

export default CardID;
