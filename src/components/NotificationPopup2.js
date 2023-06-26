import { useEffect } from "react";
import styles from "./NotificationPopup2.module.css";
const NotificationPopup2 = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.notificationPopup2} data-animate-on-scroll>
      <div className={styles.notifications}>Notifications</div>
      <input
        className={styles.notificationPopup2Child}
        type="text"
        maxLength
        minLength
      />
      <input
        className={styles.notificationPopup2Item}
        type="text"
        maxLength
        minLength
      />
      <div className={styles.notificationPopup2Inner} />
      <input
        className={styles.rectangleInput}
        type="text"
        maxLength
        minLength
      />
      <div className={styles.newNotification}>1.New notification</div>
      <div className={styles.newNotification1}>3.New notification</div>
      <div className={styles.newNotification2}>3.New Notification</div>
      <div className={styles.newNotification3}>4.New Notification</div>
      <div className={styles.newNotification}>1.New notification</div>
    </div>
  );
};

export default NotificationPopup2;
