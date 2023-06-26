import styles from "./SchedulePopUp.module.css";
const SchedulePopUp = ({ onClose }) => {
  return (
    <div className={styles.schedulePopup}>
      <div className={styles.scheduleTimeAnd}>Schedule Time and Date</div>
      <button className={styles.buttonS41}>
        <div className={styles.button}>
          <div className={styles.label}>
            <div className={styles.label1}>Schedule</div>
          </div>
        </div>
      </button>
      <img
        className={styles.schedulePopupChild}
        alt=""
        src="/frame-399081.svg"
      />
      <input
        className={styles.schedulePopupItem}
        type="datetime-local"
        maxLength
        minLength
      />
    </div>
  );
};

export default SchedulePopUp;
