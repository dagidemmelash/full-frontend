import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuccessfullyPopup.module.css";
const SuccessfullyPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onButtonS41Click = useCallback(() => {
    navigate("/police-dashboard");
  }, [navigate]);

  const onButtonS40Click = useCallback(() => {
    navigate("/registration");
  }, [navigate]);

  return (
    <div className={styles.successfullyPopup}>
      <div className={styles.successfullyRegistered}>
        <p className={styles.successfully}>Successfully</p>
        <p className={styles.successfully}>Registered!</p>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
      <button className={styles.buttonS41} onClick={onButtonS41Click}>
        <div className={styles.button}>
          <div className={styles.label}>
            <div className={styles.label1}>Back to Home</div>
          </div>
        </div>
      </button>
      <button className={styles.buttonS40} onClick={onButtonS40Click}>
        <div className={styles.button}>
          <div className={styles.label}>
            <div className={styles.label1}>See the information</div>
          </div>
        </div>
      </button>
      <img
        className={styles.successfullyPopupChild}
        alt=""
        src="/frame-399082.svg"
      />
    </div>
  );
};

export default SuccessfullyPopup;
