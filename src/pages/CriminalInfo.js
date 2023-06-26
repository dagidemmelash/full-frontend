import { useState, useCallback } from "react";
import NotificationPopup from "../components/NotificationPopup";
import PortalPopup from "../components/PortalPopup";
import NameCardContainer from "../components/NameCardContainer";
import ContainerFooter from "../components/ContainerFooter";
import { useNavigate } from "react-router-dom";
import styles from "./CriminalInfo.module.css";
const CriminalInfo = () => {
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onAvatarIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const openNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(true);
  }, []);

  const closeNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(false);
  }, []);

  const onViewChartClick = useCallback(() => {
    navigate("/bar-chart");
  }, [navigate]);

  const onViewCriminalClick = useCallback(() => {
    navigate("/criminal-list");
  }, [navigate]);

  return (
    <>
      <div className={styles.criminalInfo}>
        <div className={styles.criminalInfo1}>
          <input
            className={styles.inputtextStyle2}
            type="search"
            placeholder="Type to search"
            maxLength
            minLength
          />
          <img className={styles.logoutIcon} alt="" />
          <div className={styles.profile}>PROFILE</div>
          <div className={styles.bereketBogale}>
            <span className={styles.bereketBogale1} id="Police name">
              Bereket Bogale
            </span>
          </div>
          <NameCardContainer />
          <h1 className={styles.policeInformation}>Police Information</h1>
          <img
            className={styles.criminalInfoChild}
            alt=""
            src="/rectangle-14img of criminal@2x.png"
          />
          <textarea
            className={styles.generallyWhenAContainer}
            placeholder={`Generally, when a person is convicted of a crime, it becomes public record; in fact, sometimes searching a person's criminal history is as easy as visiting the courthouse or checking another public database. This is often the case for people who are looking into their own criminal records.

However, depending on someone's situation and just how deeply you want to search a person's criminal record, you might have to officially request access—and, depending on who you are and your purposes, you could be denied access altogether.`}
          >
            <p className={styles.generallyWhenA}>
              Generally, when a person is convicted of a crime, it becomes
              public record; in fact, sometimes searching a person's criminal
              history is as easy as visiting the courthouse or checking another
              public database. This is often the case for people who are looking
              into their own criminal records.
            </p>
            <p className={styles.generallyWhenA}>&nbsp;</p>
            <p className={styles.generallyWhenA}>
              However, depending on someone's situation and just how deeply you
              want to search a person's criminal record, you might have to
              officially request access—and, depending on who you are and your
              purposes, you could be denied access altogether.
            </p>
          </textarea>
          <button className={styles.buttonS40}>
            <div className={styles.button}>
              <div className={styles.label}>
                <div className={styles.label1}>Add evidence</div>
              </div>
            </div>
          </button>
          <h1 className={styles.crimeDescription}>Crime Description</h1>
          <ContainerFooter
            imageIds="/logoneoscorp.svg"
            smallImageIds="/iconsocial.svg"
            smallImageIds2="/facebook.svg"
            mediumImageIds="/iconsocial4.svg"
            iconSocialTop="1403px"
            iconSocialLeft="2px"
            federalPoliceJustifyContent="flex-start"
          />
          <a className={styles.logout} onClick={onLogout1Click}>
            <div className={styles.logout1}>Logout</div>
            <img
              className={styles.iconoutlinelogout}
              alt=""
              src="/iconoutlinelogout.svg"
            />
          </a>
          <div className={styles.avatarParent}>
            <img
              className={styles.avatarIcon}
              alt=""
              src="/-avatar2.svg"
              onClick={onAvatarIconClick}
            />
            <div className={styles.iconoutlinemail}>
              <img
                className={styles.icon}
                alt=""
                src="/icon3.svg"
                onClick={openNotificationPopup}
              />
            </div>
            <div className={styles.instanceChild} />
            <div className={styles.div}>2</div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group2.svg" />
          <a className={styles.viewChart} onClick={onViewChartClick}>
            View Chart
          </a>
          <img className={styles.icon1} alt="" src="/icon1.svg" />
          <a className={styles.viewCriminal} onClick={onViewCriminalClick}>
            View Criminal
          </a>
          <img className={styles.iconoutlinechartSquareBar} alt="" />
        </div>
      </div>
      {isNotificationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotificationPopup}
        >
          <NotificationPopup onClose={closeNotificationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CriminalInfo;
