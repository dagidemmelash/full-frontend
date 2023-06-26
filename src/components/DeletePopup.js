import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DeletePopup.module.css";
const DeletePopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onButtonS41Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  return (
    <div className={styles.deletePopup}>
      <div className={styles.successfullyDeleted}>
        <p className={styles.successfully}>Successfully</p>
        <p className={styles.successfully}>Deleted!</p>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <button className={styles.buttonS41} onClick={onButtonS41Click}>
        <div className={styles.button}>
          <div className={styles.label}>
            <div className={styles.label1}>Back to Home</div>
          </div>
        </div>
      </button>
      <img className={styles.deletePopupChild} alt="" src="/frame-39908.svg" />
    </div>
  );
};

export default DeletePopup;
