import { useState, useCallback } from "react";
import SuccessfullyPopup from "../components/SuccessfullyPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./Registration.module.css";
const Registration = () => {
  const [isSuccessfullyPopupOpen, setSuccessfullyPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login-page1");
  }, [navigate]);

  const openSuccessfullyPopup = useCallback(() => {
    setSuccessfullyPopupOpen(true);
  }, []);

  const closeSuccessfullyPopup = useCallback(() => {
    setSuccessfullyPopupOpen(false);
  }, []);

  const onViewChartClick = useCallback(() => {
    navigate("/bar-chart");
  }, [navigate]);

  const onViewCriminalClick = useCallback(() => {
    navigate("/criminal-list");
  }, [navigate]);

  return (
    <>
      <div className={styles.registration}>
        <div className={styles.registration1}>
          <span className={styles.bereketBogale} id="Police name">
            Bereket Bogale
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
          <input
            className={styles.crimeType}
            type="text"
            placeholder="Crime type"
            maxLength
            minLength
            required
          />
          <ContainerFooter
            imageIds="/logoneoscorp1.svg"
            smallImageIds="/iconsocial7.svg"
            smallImageIds2="/facebook1.svg"
            mediumImageIds="/iconsocial8.svg"
            iconSocialTop="2156px"
            iconSocialLeft="0px"
            federalPoliceJustifyContent="space-between"
          />
          <b className={styles.biometricsRequired}>Biometrics Required.</b>
          <div className={styles.registration2}>{`Registration `}</div>
          <input className={styles.registrationChild} type="file" required />
          <img
            className={styles.registrationItem}
            alt=""
            src="/rectangle-1965biometrics@2x.png"
          />
          <img className={styles.registrationInner} alt="" src="/line-47.svg" />
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
          <div className={styles.dateAndTime}>Date and Time of Crime</div>
          <div
            className={styles.crimeType1}
            id="CrimeType"
          >{`Crime Type `}</div>
          <div className={styles.gender} id="Gender">
            Gender
          </div>
          <div className={styles.marriageStatus}>Marriage Status</div>
          <div className={styles.occupation}>Occupation</div>
          <div className={styles.phoneNumber}>Phone Number</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.registrationChild1} />
          <div className={styles.registrationChild2} />
          <div className={styles.registrationChild3} />
          <textarea className={styles.rectangleTextarea} required />
          <input
            className={styles.registrationChild4}
            type="text"
            maxLength
            minLength
            required
          />
          <div className={styles.registrationChild5} />
          <input
            className={styles.registrationChild6}
            type="text"
            maxLength
            minLength
          />
          <input
            className={styles.registrationChild7}
            type="tel"
            maxLength
            minLength
            required
          />
          <button className={styles.buttonS40} onClick={openSuccessfullyPopup}>
            <div className={styles.button}>
              <div className={styles.label}>
                <div className={styles.label1}>Register</div>
              </div>
            </div>
          </button>
          <div className={styles.crimeDescription} id="Gender">
            Crime Description
          </div>
          <img className={styles.icon} alt="" src="/1873414-1@2x.png" />
          <img className={styles.groupIcon} alt="" src="/group4.svg" />
          <a className={styles.viewChart} onClick={onViewChartClick}>
            View Chart
          </a>
          <img className={styles.icon1} alt="" src="/icon1.svg" />
          <a className={styles.viewCriminal} onClick={onViewCriminalClick}>
            View Criminal
          </a>
          <img className={styles.iconoutlinechartSquareBar} alt="" />
          <textarea className={styles.registrationChild8} required />
        </div>
      </div>
      {isSuccessfullyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSuccessfullyPopup}
        >
          <SuccessfullyPopup onClose={closeSuccessfullyPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Registration;
