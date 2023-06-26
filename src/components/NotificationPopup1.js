import { useEffect } from "react";
import styles from "./NotificationPopup1.module.css";
const NotificationPopup1 = ({ onClose }) => {
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
    <div className={styles.notificationPopup} data-animate-on-scroll>
      <div className={styles.notifications}>Notifications</div>
      <input
        className={styles.notificationPopupChild}
        type="text"
        maxLength
        minLength
      />
      <input
        className={styles.notificationPopupItem}
        type="text"
        maxLength
        minLength
      />
      <div className={styles.notificationPopupInner} />
      <input
        className={styles.rectangleInput}
        type="text"
        maxLength
        minLength
      />
      <div className={styles.newUpdate}>1.New update</div>
      <div className={styles.newUpdate1}>2.New update</div>
      <div className={styles.newUpdate2}>3.New update</div>
      <div className={styles.newUpdate3}>4.New update</div>
    </div>
  );
};

export default NotificationPopup1;
