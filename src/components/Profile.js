import { useEffect } from "react";
import styles from "./Profile.module.css";
const Profile = ({ onClose }) => {
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
    <div className={styles.profile} data-animate-on-scroll>
      <img className={styles.avatarIcon} alt="" src="/-avatar3.svg" />
      <div className={styles.dropdownListHeader}>
        <div className={styles.avatarLabelGroup}>
          <div className={styles.textAndSupportingText}>
            <div className={styles.text}>Olivia Rhye</div>
            <div className={styles.supportingText}>olivia@untitledui.com</div>
          </div>
        </div>
      </div>
      <div className={styles.avatarOnlineIndicator} />
      <div className={styles.dropdownListItem}>
        <img className={styles.userIcon} alt="" src="/user1.svg" />
        <div className={styles.text1}>{`Edit profile `}</div>
      </div>
      <div className={styles.dropdownListItem1}>
        <img className={styles.userIcon} alt="" src="/home2.svg" />
        <div className={styles.text1}>Company profile</div>
      </div>
      <div className={styles.dropdownListItem2}>
        <img className={styles.userIcon} alt="" src="/users1.svg" />
        <div className={styles.text1}>Team</div>
      </div>
      <div className={styles.dropdownListItem3}>
        <img className={styles.userIcon} alt="" src="/userplus1.svg" />
        <div className={styles.text1}>Invite colleagues</div>
      </div>
      <div className={styles.dropdownListItem4}>
        <img className={styles.userIcon} alt="" src="/helpcircle2.svg" />
        <div className={styles.text1}>Support</div>
      </div>
      <div className={styles.dropdownListItem5}>
        <img className={styles.userIcon} alt="" src="/settings2.svg" />
        <div className={styles.text1}>Settings</div>
      </div>
      <div className={styles.logout}>Logout</div>
      <img className={styles.icon} alt="" src="/icon2.svg" />
      <img className={styles.profileChild} alt="" src="/ellipse-36@2x.png" />
      <input
        className={styles.buttonS40}
        type="text"
        defaultValue="Register"
        placeholder="Change photo"
        maxLength
        minLength
        data-scroll-to="buttonS40"
      />
      <div className={styles.profileItem} />
    </div>
  );
};

export default Profile;
