import { useState, useCallback } from "react";
import Profile from "../components/Profile";
import PortalPopup from "../components/PortalPopup";
import NotificationPopup from "../components/NotificationPopup";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./AddEvidence.module.css";
const AddEvidence = () => {
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [isNotificationPopup1Open, setNotificationPopup1Open] = useState(false);
  const [isNotificationPopup2Open, setNotificationPopup2Open] = useState(false);
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onAvatarContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const openProfilePopup = useCallback(() => {
    setProfilePopupOpen(true);
  }, []);

  const closeProfilePopup = useCallback(() => {
    setProfilePopupOpen(false);
  }, []);

  const openNotificationPopup1 = useCallback(() => {
    setNotificationPopup1Open(true);
  }, []);

  const closeNotificationPopup1 = useCallback(() => {
    setNotificationPopup1Open(false);
  }, []);

  const openNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(true);
  }, []);

  const closeNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(false);
  }, []);

  const openNotificationPopup2 = useCallback(() => {
    setNotificationPopup2Open(true);
  }, []);

  const closeNotificationPopup2 = useCallback(() => {
    setNotificationPopup2Open(false);
  }, []);

  const onViewChartClick = useCallback(() => {
    navigate("/bar-chart");
  }, [navigate]);

  const onViewCriminalClick = useCallback(() => {
    navigate("/criminal-list");
  }, [navigate]);

  return (
    <>
      <div className={styles.addEvidence}>
        <div className={styles.dateAndTime}>Date and Time of Crime</div>
        <input
          className={styles.addEvidenceChild}
          type="datetime-local"
          maxLength
          minLength
          required
        />
        <div className={styles.crimeType} id="CrimeType">{`Crime Type `}</div>
        <textarea className={styles.addEvidenceItem} required />
        <button className={styles.buttonS40}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Record</div>
            </div>
          </div>
        </button>
        <textarea className={styles.addEvidenceInner} required />
        <div className={styles.crimeDescription} id="Gender">
          Crime Description
        </div>
        <div className={styles.addEvidence1} id="Gender">
          Add Evidence
        </div>
        <a className={styles.logout} onClick={onLogoutClick}>
          <div className={styles.logout1}>Logout</div>
          <img
            className={styles.iconoutlinelogout}
            alt=""
            src="/iconoutlinelogout.svg"
          />
        </a>
        <h1 className={styles.profile}>PROFILE</h1>
        <h1 className={styles.bereketBogale}>
          <span className={styles.bereketBogale1} id="Police name">
            Bereket Bogale
          </span>
        </h1>
        <ContainerFooter
          imageIds="/logoneoscorp.svg"
          smallImageIds="/iconsocial.svg"
          smallImageIds2="/facebook.svg"
          mediumImageIds="/iconsocial1.svg"
          iconSocialTop="1049px"
          iconSocialLeft="-21px"
          federalPoliceJustifyContent="flex-start"
        />
        <div className={styles.avatarParent}>
          <div className={styles.avatar} onClick={onAvatarContainerClick}>
            <img
              className={styles.imageIcon}
              alt=""
              src="/image9.svg"
              onClick={openProfilePopup}
            />
          </div>
          <div
            className={styles.iconoutlinemail}
            onClick={openNotificationPopup1}
          >
            <img
              className={styles.icon}
              alt=""
              src="/icon5.svg"
              onClick={openNotificationPopup}
            />
          </div>
          <div className={styles.instanceChild} />
          <div className={styles.div} onClick={openNotificationPopup2}>
            2
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group5.svg" />
        <a className={styles.viewChart} onClick={onViewChartClick}>
          View Chart
        </a>
        <img className={styles.icon1} alt="" src="/icon1.svg" />
        <a className={styles.viewCriminal} onClick={onViewCriminalClick}>
          View Criminal
        </a>
      </div>
      {isProfilePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfilePopup}
        >
          <Profile onClose={closeProfilePopup} />
        </PortalPopup>
      )}
      {isNotificationPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotificationPopup1}
        >
          <NotificationPopup onClose={closeNotificationPopup1} />
        </PortalPopup>
      )}
      {isNotificationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotificationPopup}
        >
          <NotificationPopup onClose={closeNotificationPopup} />
        </PortalPopup>
      )}
      {isNotificationPopup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotificationPopup2}
        >
          <NotificationPopup onClose={closeNotificationPopup2} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddEvidence;
