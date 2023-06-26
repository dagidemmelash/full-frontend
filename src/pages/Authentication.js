import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import NotificationPopup from "../components/NotificationPopup";
import PortalPopup from "../components/PortalPopup";
import NotificationPopup2 from "../components/NotificationPopup2";
import AuthenticationPopup from "../components/AuthenticationPopup";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./Authentication.module.css";
const Authentication = () => {
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [isNotificationPopup2Open, setNotificationPopup2Open] = useState(false);
  const [isNotificationPopup21Open, setNotificationPopup21Open] =
    useState(false);
  const [isAuthenticationPopupOpen, setAuthenticationPopupOpen] =
    useState(false);
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login-page1");
  }, [navigate]);

  const onImageIconClick = useCallback(() => {
    navigate("/profile2");
  }, [navigate]);

  const openNotificationPopup2 = useCallback(() => {
    setNotificationPopup2Open(true);
  }, []);

  const closeNotificationPopup2 = useCallback(() => {
    setNotificationPopup2Open(false);
  }, []);

  const openNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(true);
  }, []);

  const closeNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(false);
  }, []);

  const openNotificationPopup21 = useCallback(() => {
    setNotificationPopup21Open(true);
  }, []);

  const closeNotificationPopup21 = useCallback(() => {
    setNotificationPopup21Open(false);
  }, []);

  const onViewChartClick = useCallback(() => {
    navigate("/datavisualization");
  }, [navigate]);

  const onViewCriminalClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onViewReportClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const openAuthenticationPopup = useCallback(() => {
    setAuthenticationPopupOpen(true);
  }, []);

  const closeAuthenticationPopup = useCallback(() => {
    setAuthenticationPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.authentication}>
        <span className={styles.bereketBogale} id="Police name">
          Tesfaye Bogale
        </span>
        <div className={styles.profile}>PROFILE</div>
        <img className={styles.iconoutlinemail} alt="" />
        <button className={styles.logout} autoFocus onClick={onLogoutClick}>
          <div className={styles.logout1}>Logout</div>
          <img
            className={styles.iconoutlinelogout}
            alt=""
            src="/iconoutlinelogout.svg"
          />
        </button>
        <ContainerFooter
          imageIds="/logoneoscorp1.svg"
          smallImageIds="/iconsocial2.svg"
          smallImageIds2="/facebook1.svg"
          mediumImageIds="/iconsocial3.svg"
          iconSocialTop="2156px"
          federalPoliceJustifyContent="space-between"
        />
        <div className={styles.avatarParent}>
          <Link className={styles.avatar} to="/profile2">
            <img
              className={styles.imageIcon}
              alt=""
              src="/image1.svg"
              onClick={onImageIconClick}
            />
          </Link>
          <button
            className={styles.iconoutlinemail1}
            autoFocus
            onClick={openNotificationPopup2}
          >
            <img
              className={styles.icon}
              alt=""
              src="/icon.svg"
              onClick={openNotificationPopup}
            />
          </button>
          <div className={styles.instanceChild} />
          <div className={styles.div} onClick={openNotificationPopup21}>
            2
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group1.svg" />
        <a className={styles.viewChart} onClick={onViewChartClick}>
          View Chart
        </a>
        <img className={styles.icon1} alt="" src="/icon1.svg" />
        <Link
          className={styles.viewCriminal}
          to="/admin-dashboard"
          onClick={onViewCriminalClick}
        >
          View Criminal
        </Link>
        <img
          className={styles.iconoutlinechartSquareBar}
          alt=""
          src="/iconoutlinechartsquarebar.svg"
        />
        <Link
          className={styles.viewReport}
          to="/admin-dashboard"
          onClick={onViewReportClick}
        >
          View Report
        </Link>
        <div className={styles.authentication1}>{`Authentication `}</div>
        <div className={styles.biometricsRequiredParent}>
          <b className={styles.biometricsRequired}>Biometrics Required.</b>
          <input className={styles.groupChild} type="file" required />
          <img
            className={styles.groupItem}
            alt=""
            src="/rectangle-1965biometrics@2x.png"
          />
          <img className={styles.groupInner} alt="" src="/line-47.svg" />
          <img className={styles.lineIcon} alt="" src="/line-48.svg" />
          <input
            className={styles.rectangleInput}
            type="file"
            required
            disabled
          />
          <b className={styles.insertImage}>Insert Image</b>
          <div className={styles.fullName} id="FULL NAME">{`Full Name `}</div>
          <div className={styles.address}>Address</div>
          <div className={styles.dateOfBirth}>Date of Birth</div>
          <div className={styles.gender}>Gender</div>
          <div className={styles.marriageStatus}>Marriage Status</div>
          <div className={styles.phoneNumber}>Phone Number</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <textarea className={styles.rectangleTextarea} required />
          <div className={styles.groupChild3} />
          <input
            className={styles.groupChild4}
            type="text"
            min={10}
            max={12}
            maxLength
            minLength
            required
          />
          <input
            className={styles.fullName1}
            type="text"
            placeholder="Full Name "
            maxLength
            minLength
            required
          />
          <input
            className={styles.address1}
            type="text"
            placeholder="Address"
            maxLength
            minLength
            required
          />
          <input
            className={styles.dateOfBirth1}
            type="date"
            maxLength
            minLength
            required
          />
          <input
            className={styles.text}
            type="text"
            placeholder="Gender"
            maxLength
            minLength
            required
          />
          <input
            className={styles.phoneNumber1}
            type="number"
            placeholder="Phone Number"
            maxLength
            minLength
            required
          />
          <button
            className={styles.buttonS40}
            onClick={openAuthenticationPopup}
          >
            <div className={styles.button}>
              <div className={styles.label}>
                <div className={styles.label1}>Authenticate</div>
              </div>
            </div>
          </button>
          <div className={styles.level} id="CrimeType">
            Level
          </div>
          <div className={styles.authority}>Authority</div>
          <input
            className={styles.groupChild5}
            type="tel"
            maxLength
            minLength
            required
          />
          <input
            className={styles.groupChild6}
            type="tel"
            maxLength
            minLength
            required
          />
        </div>
        <img className={styles.icon2} alt="" src="/1873414-1@2x.png" />
      </div>
      {isNotificationPopup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotificationPopup2}
        >
          <NotificationPopup2 onClose={closeNotificationPopup2} />
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
      {isNotificationPopup21Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotificationPopup21}
        >
          <NotificationPopup2 onClose={closeNotificationPopup21} />
        </PortalPopup>
      )}
      {isAuthenticationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAuthenticationPopup}
        >
          <AuthenticationPopup onClose={closeAuthenticationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Authentication;
