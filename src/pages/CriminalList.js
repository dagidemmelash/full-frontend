import { useState, useCallback } from "react";
import Profile from "../components/Profile";
import PortalPopup from "../components/PortalPopup";
import NotificationPopup from "../components/NotificationPopup";
import ContainerFooter from "../components/ContainerFooter";
import { useNavigate } from "react-router-dom";
import styles from "./CriminalList.module.css";
const CriminalList = () => {
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [isNotificationPopup1Open, setNotificationPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const openProfilePopup = useCallback(() => {
    setProfilePopupOpen(true);
  }, []);

  const closeProfilePopup = useCallback(() => {
    setProfilePopupOpen(false);
  }, []);

  const onImageIcon4Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

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

  const onViewChartClick = useCallback(() => {
    navigate("/bar-chart");
  }, [navigate]);

  const onViewCriminalClick = useCallback(() => {
    navigate("/criminal-list");
  }, [navigate]);

  const onButtonS41Click = useCallback(() => {
    navigate("/criminal-info");
  }, [navigate]);

  const onButtonS42Click = useCallback(() => {
    navigate("/criminal-info");
  }, [navigate]);

  const onButtonS43Click = useCallback(() => {
    navigate("/criminal-info1");
  }, [navigate]);

  const onButtonS44Click = useCallback(() => {
    navigate("/criminal-info1");
  }, [navigate]);

  const onButtonS45Click = useCallback(() => {
    navigate("/criminal-info1");
  }, [navigate]);

  const onButtonS46Click = useCallback(() => {
    navigate("/criminal-info1");
  }, [navigate]);

  const onButtonS47Click = useCallback(() => {
    navigate("/criminal-info1");
  }, [navigate]);

  const onButtonS48Click = useCallback(() => {
    navigate("/criminal-info1");
  }, [navigate]);

  return (
    <>
      <div className={styles.criminalList}>
        <div className={styles.manage}>Manage</div>
        <h2 className={styles.profile} id="profile">
          PROFILE
        </h2>
        <div className={styles.crimeType}>
          <div className={styles.title}>Crime Type</div>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal8.svg"
          />
          <img
            className={styles.elementsLineGorizontal1}
            alt=""
            src="/elements--line--gorizontal9.svg"
          />
          <div className={styles.digits}>CyberCrime</div>
        </div>
        <div className={styles.region}>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal10.svg"
          />
          <div className={styles.title1}>Region</div>
          <div className={styles.digits1}>Adama</div>
          <img
            className={styles.elementsLineGorizontal3}
            alt=""
            src="/elements--line--gorizontal11.svg"
          />
        </div>
        <div className={styles.gender}>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal12.svg"
          />
          <div className={styles.title2}>Gender</div>
          <div className={styles.digits2}>Male</div>
          <img
            className={styles.elementsLineGorizontal5}
            alt=""
            src="/elements--line--gorizontal13.svg"
          />
        </div>
        <div className={styles.age}>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal14.svg"
          />
          <div className={styles.title3}>Age</div>
          <div className={styles.digits2}>21-35</div>
          <img
            className={styles.elementsLineGorizontal7}
            alt=""
            src="/elements--line--gorizontal15.svg"
          />
        </div>
        <div className={styles.btn}>
          <b className={styles.seeAllCriminals}>See All Criminals</b>
          <img
            className={styles.iconoutlinecheveronRight}
            alt=""
            src="/iconoutlinecheveronright1.svg"
          />
        </div>
        <div className={styles.div}>
          <div className={styles.title11}>
            <b className={styles.jennyWilson}>Jenny Wilson</b>
            <img className={styles.imageIcon} alt="" src="/image7@2x.png" />
            <div className={styles.wlawsonexamplecom}>w.lawson@example.com</div>
          </div>
          <div className={styles.title21}>
            <div className={styles.adama}>Adama</div>
            <div className={styles.cybercrime}>Cybercrime</div>
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.title12}>
            <b className={styles.jennyWilson}>Devon Lane</b>
            <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
            <div className={styles.wlawsonexamplecom}>
              dat.roberts@example.com
            </div>
          </div>
          <div className={styles.title21}>
            <div className={styles.awasa}>Awasa</div>
            <div className={styles.cybercrime}>Youth crime</div>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.title13}>
            <b className={styles.jennyWilson}>Jane Cooper</b>
            <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
            <div className={styles.wlawsonexamplecom}>jgraham@example.com</div>
          </div>
          <div className={styles.title23}>
            <div className={styles.addisAbaba}>Addis Ababa</div>
            <div className={styles.fraud}>Fraud</div>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.title14}>
            <b className={styles.jennyWilson}>Dianne Russell</b>
            <img className={styles.imageIcon} alt="" src="/image5@2x.png" />
            <div className={styles.wlawsonexamplecom}>curtis.d@example.com</div>
          </div>
          <div className={styles.title24}>
            <div className={styles.diredawa}>DireDawa</div>
            <div className={styles.cybercrime}>Illegal Workers</div>
          </div>
        </div>
        <div className={styles.criminalRecordsSummary}>
          Criminal Records Summary
        </div>
        <b className={styles.recentCriminals}>Recent Criminals</b>
        <b className={styles.text}>Crime Data analysis based on</b>
        <div className={styles.sort}>
          <div className={styles.last7Days}>Last 7 Days</div>
          <img
            className={styles.iconoutlinecheveronDown}
            alt=""
            src="/iconoutlinecheverondown.svg"
          />
        </div>
        <div className={styles.bereketBogale}>
          <span className={styles.bereketBogale1} id="Police name">
            Bereket Bogale
          </span>
        </div>
        <ContainerFooter
          imageIds="/logoneoscorp.svg"
          smallImageIds="/iconsocial.svg"
          smallImageIds2="/facebook.svg"
          mediumImageIds="/iconsocial1.svg"
          iconSocialTop="1276px"
          iconSocialLeft="0px"
          federalPoliceJustifyContent="flex-start"
        />
        <input
          className={styles.inputtextStyle2}
          type="search"
          placeholder="Type to search"
          maxLength
          minLength
        />
        <a className={styles.logout} onClick={onLogoutClick}>
          <div className={styles.logout1}>Logout</div>
          <img
            className={styles.iconoutlinelogout}
            alt=""
            src="/iconoutlinelogout.svg"
          />
        </a>
        <div className={styles.criminalListChild} />
        <b className={styles.no}>No.</b>
        <b className={styles.nameOfCriminals}>Name of Criminals</b>
        <b className={styles.detailsOfCriminals}>Details of Criminals</b>
        <div className={styles.criminalListItem} />
        <div className={styles.criminalListInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.criminalListChild1} />
        <div className={styles.criminalListChild2} />
        <div className={styles.criminalListChild3} />
        <div className={styles.criminalListChild4} />
        <div className={styles.criminalListChild5} />
        <b className={styles.b}>1,</b>
        <b className={styles.b1}>4,</b>
        <b className={styles.b2}>2,</b>
        <b className={styles.b3}>7,</b>
        <b className={styles.b4}>5,</b>
        <b className={styles.b5}>3,</b>
        <b className={styles.b6}>8,</b>
        <b className={styles.b7}>6,</b>
        <b className={styles.biniyamMoges}>Biniyam Moges</b>
        <b className={styles.biniyamMoges1}>Biniyam Moges</b>
        <b className={styles.biniyamMoges2}>Biniyam Moges</b>
        <b className={styles.biniyamMoges3}>Biniyam Moges</b>
        <b className={styles.biniyamMoges4}>Biniyam Moges</b>
        <b className={styles.biniyamMoges5}>Biniyam Moges</b>
        <b className={styles.biniyamMoges6}>Biniyam Moges</b>
        <b className={styles.biniyamMoges7}>Biniyam Moges</b>
        <b className={styles.viewCriminalInformation}>
          View criminal information detail
        </b>
        <b className={styles.viewCriminalInformation1}>
          View criminal information detail
        </b>
        <b className={styles.viewCriminalInformation2}>
          View criminal information detail
        </b>
        <b className={styles.viewCriminalInformation3}>
          View criminal information detail
        </b>
        <b className={styles.viewCriminalInformation4}>
          View criminal information detail
        </b>
        <b className={styles.viewCriminalInformation5}>
          View criminal information detail
        </b>
        <b className={styles.viewCriminalInformation6}>
          View criminal information detail
        </b>
        <b className={styles.viewCriminalInformation7}>
          View criminal information detail
        </b>
        <div className={styles.avatarParent}>
          <div className={styles.avatar} onClick={openProfilePopup}>
            <img
              className={styles.imageIcon4}
              alt=""
              src="/image8.svg"
              onClick={onImageIcon4Click}
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
          <div className={styles.div4}>2</div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group5.svg" />
        <a className={styles.viewChart} onClick={onViewChartClick}>
          View Chart
        </a>
        <img className={styles.icon1} alt="" src="/icon1.svg" />
        <a className={styles.viewCriminal} onClick={onViewCriminalClick}>
          View Criminal
        </a>
        <button className={styles.buttonS41} onClick={onButtonS41Click}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>View Info</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS42} onClick={onButtonS42Click}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>View Info</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS43} onClick={onButtonS43Click}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>View Info</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS44} onClick={onButtonS44Click}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>View Info</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS45} onClick={onButtonS45Click}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>View Info</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS46} onClick={onButtonS46Click}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>View Info</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS47} onClick={onButtonS47Click}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>View Info</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS48} onClick={onButtonS48Click}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>View Info</div>
            </div>
          </div>
        </button>
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
    </>
  );
};

export default CriminalList;
