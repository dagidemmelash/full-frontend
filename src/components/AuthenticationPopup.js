import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthenticationPopup.module.css";
const AuthenticationPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onAuthenticationPopupClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  return (
    <div
      className={styles.authenticationPopup}
      onClick={onAuthenticationPopupClick}
    >
      <div className={styles.successfullyAuthenticated}>
        <p className={styles.successfully}>Successfully</p>
        <p className={styles.successfully}>Authenticated!</p>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
      <button className={styles.buttonS41}>
        <div className={styles.button}>
          <div className={styles.label}>
            <div className={styles.label1}>Back to Home</div>
          </div>
        </div>
      </button>
      <img
        className={styles.authenticationPopupChild}
        alt=""
        src="/frame-39908.svg"
      />
    </div>
  );
};

export default AuthenticationPopup;
