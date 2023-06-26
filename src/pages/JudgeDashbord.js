import { useState, useCallback } from "react";
import NotificationPopup from "../components/NotificationPopup";
import PortalPopup from "../components/PortalPopup";
import NotificationPopup1 from "../components/NotificationPopup1";
import SuccessfullyPopup from "../components/SuccessfullyPopup";
import SchedulePopUp from "../components/SchedulePopUp";
import ContainerFooter from "../components/ContainerFooter";
import { useNavigate } from "react-router-dom";
import styles from "./JudgeDashbord.module.css";
const JudgeDashbord = () => {
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [isNotificationPopup1Open, setNotificationPopup1Open] = useState(false);
  const [isSuccessfullyPopupOpen, setSuccessfullyPopupOpen] = useState(false);
  const [isSchedulePopUpOpen, setSchedulePopUpOpen] = useState(false);
  const [isSchedulePopUp1Open, setSchedulePopUp1Open] = useState(false);
  const [isSchedulePopUp2Open, setSchedulePopUp2Open] = useState(false);
  const [isSchedulePopUp3Open, setSchedulePopUp3Open] = useState(false);
  const [isSchedulePopUp4Open, setSchedulePopUp4Open] = useState(false);
  const [isSchedulePopUp5Open, setSchedulePopUp5Open] = useState(false);
  const [isSchedulePopUp6Open, setSchedulePopUp6Open] = useState(false);
  const [isSchedulePopUp7Open, setSchedulePopUp7Open] = useState(false);
  const [isSchedulePopUp8Open, setSchedulePopUp8Open] = useState(false);
  const [isSchedulePopUp9Open, setSchedulePopUp9Open] = useState(false);
  const [isSchedulePopUp10Open, setSchedulePopUp10Open] = useState(false);
  const [isSchedulePopUp11Open, setSchedulePopUp11Open] = useState(false);
  const [isSchedulePopUp12Open, setSchedulePopUp12Open] = useState(false);
  const [isSchedulePopUp13Open, setSchedulePopUp13Open] = useState(false);
  const [isSchedulePopUp14Open, setSchedulePopUp14Open] = useState(false);
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onAvatarContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

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

  const onViewCriminalsClick = useCallback(() => {
    navigate("/judge-dashbord");
  }, [navigate]);

  const openSuccessfullyPopup = useCallback(() => {
    setSuccessfullyPopupOpen(true);
  }, []);

  const closeSuccessfullyPopup = useCallback(() => {
    setSuccessfullyPopupOpen(false);
  }, []);

  const openSchedulePopUp = useCallback(() => {
    setSchedulePopUpOpen(true);
  }, []);

  const closeSchedulePopUp = useCallback(() => {
    setSchedulePopUpOpen(false);
  }, []);

  const openSchedulePopUp1 = useCallback(() => {
    setSchedulePopUp1Open(true);
  }, []);

  const closeSchedulePopUp1 = useCallback(() => {
    setSchedulePopUp1Open(false);
  }, []);

  const openSchedulePopUp2 = useCallback(() => {
    setSchedulePopUp2Open(true);
  }, []);

  const closeSchedulePopUp2 = useCallback(() => {
    setSchedulePopUp2Open(false);
  }, []);

  const openSchedulePopUp3 = useCallback(() => {
    setSchedulePopUp3Open(true);
  }, []);

  const closeSchedulePopUp3 = useCallback(() => {
    setSchedulePopUp3Open(false);
  }, []);

  const openSchedulePopUp4 = useCallback(() => {
    setSchedulePopUp4Open(true);
  }, []);

  const closeSchedulePopUp4 = useCallback(() => {
    setSchedulePopUp4Open(false);
  }, []);

  const openSchedulePopUp5 = useCallback(() => {
    setSchedulePopUp5Open(true);
  }, []);

  const closeSchedulePopUp5 = useCallback(() => {
    setSchedulePopUp5Open(false);
  }, []);

  const openSchedulePopUp6 = useCallback(() => {
    setSchedulePopUp6Open(true);
  }, []);

  const closeSchedulePopUp6 = useCallback(() => {
    setSchedulePopUp6Open(false);
  }, []);

  const openSchedulePopUp7 = useCallback(() => {
    setSchedulePopUp7Open(true);
  }, []);

  const closeSchedulePopUp7 = useCallback(() => {
    setSchedulePopUp7Open(false);
  }, []);

  const openSchedulePopUp8 = useCallback(() => {
    setSchedulePopUp8Open(true);
  }, []);

  const closeSchedulePopUp8 = useCallback(() => {
    setSchedulePopUp8Open(false);
  }, []);

  const openSchedulePopUp9 = useCallback(() => {
    setSchedulePopUp9Open(true);
  }, []);

  const closeSchedulePopUp9 = useCallback(() => {
    setSchedulePopUp9Open(false);
  }, []);

  const openSchedulePopUp10 = useCallback(() => {
    setSchedulePopUp10Open(true);
  }, []);

  const closeSchedulePopUp10 = useCallback(() => {
    setSchedulePopUp10Open(false);
  }, []);

  const openSchedulePopUp11 = useCallback(() => {
    setSchedulePopUp11Open(true);
  }, []);

  const closeSchedulePopUp11 = useCallback(() => {
    setSchedulePopUp11Open(false);
  }, []);

  const openSchedulePopUp12 = useCallback(() => {
    setSchedulePopUp12Open(true);
  }, []);

  const closeSchedulePopUp12 = useCallback(() => {
    setSchedulePopUp12Open(false);
  }, []);

  const openSchedulePopUp13 = useCallback(() => {
    setSchedulePopUp13Open(true);
  }, []);

  const closeSchedulePopUp13 = useCallback(() => {
    setSchedulePopUp13Open(false);
  }, []);

  const openSchedulePopUp14 = useCallback(() => {
    setSchedulePopUp14Open(true);
  }, []);

  const closeSchedulePopUp14 = useCallback(() => {
    setSchedulePopUp14Open(false);
  }, []);

  return (
    <>
      <div className={styles.judgeDashbord}>
        <div className={styles.manage}>Manage</div>
        <h2 className={styles.profile} id="profile">
          PROFILE
        </h2>
        <div className={styles.crimeType}>
          <div className={styles.title}>Crime Type</div>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal.svg"
          />
          <img
            className={styles.elementsLineGorizontal1}
            alt=""
            src="/elements--line--gorizontal1.svg"
          />
          <div className={styles.digits}>CyberCrime</div>
        </div>
        <div className={styles.region}>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal2.svg"
          />
          <div className={styles.title1}>Region</div>
          <div className={styles.digits1}>Adama</div>
          <img
            className={styles.elementsLineGorizontal3}
            alt=""
            src="/elements--line--gorizontal3.svg"
          />
        </div>
        <div className={styles.gender}>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal4.svg"
          />
          <div className={styles.title2}>Gender</div>
          <div className={styles.digits2}>Male</div>
          <img
            className={styles.elementsLineGorizontal5}
            alt=""
            src="/elements--line--gorizontal5.svg"
          />
        </div>
        <div className={styles.age}>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal6.svg"
          />
          <div className={styles.title3}>Age</div>
          <div className={styles.digits2}>21-35</div>
          <img
            className={styles.elementsLineGorizontal7}
            alt=""
            src="/elements--line--gorizontal7.svg"
          />
        </div>
        <div className={styles.btn}>
          <b className={styles.seeAllCriminals}>See All Criminals</b>
          <img
            className={styles.iconoutlinecheveronRight}
            alt=""
            src="/iconoutlinecheveronright.svg"
          />
        </div>
        <div className={styles.div}>
          <div className={styles.title11}>
            <b className={styles.jennyWilson}>Jenny Wilson</b>
            <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
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
          smallImageIds="/iconsocial5.svg"
          smallImageIds2="/facebook.svg"
          mediumImageIds="/iconsocial6.svg"
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
        <div className={styles.judgeDashbordChild} />
        <b className={styles.no}>No.</b>
        <b className={styles.nameOfCriminals}>Name of Criminals</b>
        <b className={styles.detailsOfCriminals}>Details of Criminals</b>
        <div className={styles.judgeDashbordItem} />
        <div className={styles.judgeDashbordInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.judgeDashbordChild1} />
        <div className={styles.judgeDashbordChild2} />
        <div className={styles.judgeDashbordChild3} />
        <div className={styles.judgeDashbordChild4} />
        <div className={styles.judgeDashbordChild5} />
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
          <div className={styles.avatar} onClick={onAvatarContainerClick}>
            <img
              className={styles.imageIcon4}
              alt=""
              src="/image6.svg"
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
              src="/icon4.svg"
              onClick={openNotificationPopup}
            />
          </div>
          <div className={styles.instanceChild} />
          <div className={styles.div4}>2</div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group3.svg" />
        <a className={styles.viewChart} onClick={onViewChartClick}>
          View Chart
        </a>
        <img className={styles.icon1} alt="" src="/icon1.svg" />
        <a className={styles.viewCriminals} onClick={onViewCriminalsClick}>
          View Criminals
        </a>
        <img
          className={styles.iconoutlinechartSquareBar}
          alt=""
          src="/iconoutlinechartsquarebar.svg"
        />
        <div className={styles.viewReport}>View Report</div>
        <button className={styles.buttonS48} onClick={openSuccessfullyPopup}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Pending</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS48} onClick={openSchedulePopUp}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Pending</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS64} onClick={openSchedulePopUp1}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Pending</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS66} onClick={openSchedulePopUp2}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Pending</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS68} onClick={openSchedulePopUp3}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Pending</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS70} onClick={openSchedulePopUp4}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Pending</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS72} onClick={openSchedulePopUp5}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Pending</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS74} onClick={openSchedulePopUp6}>
          <div className={styles.button}>
            <div className={styles.label}>
              <div className={styles.label1}>Pending</div>
            </div>
          </div>
        </button>
        <button className={styles.buttonS49} onClick={openSchedulePopUp7}>
          <div className={styles.button}>
            <div className={styles.label16}>
              <div className={styles.label17} />
            </div>
          </div>
        </button>
        <button className={styles.buttonS49} onClick={openSchedulePopUp8}>
          <div className={styles.button}>
            <div className={styles.label16}>
              <div className={styles.label17} />
            </div>
          </div>
        </button>
        <button className={styles.buttonS65} onClick={openSchedulePopUp9}>
          <div className={styles.button}>
            <div className={styles.label16}>
              <div className={styles.label17} />
            </div>
          </div>
        </button>
        <button className={styles.buttonS67} onClick={openSchedulePopUp10}>
          <div className={styles.button}>
            <div className={styles.label16}>
              <div className={styles.label17} />
            </div>
          </div>
        </button>
        <button className={styles.buttonS69} onClick={openSchedulePopUp11}>
          <div className={styles.button}>
            <div className={styles.label16}>
              <div className={styles.label17} />
            </div>
          </div>
        </button>
        <button className={styles.buttonS71} onClick={openSchedulePopUp12}>
          <div className={styles.button}>
            <div className={styles.label16}>
              <div className={styles.label17} />
            </div>
          </div>
        </button>
        <button className={styles.buttonS73} onClick={openSchedulePopUp13}>
          <div className={styles.button}>
            <div className={styles.label16}>
              <div className={styles.label17} />
            </div>
          </div>
        </button>
        <button className={styles.buttonS75} onClick={openSchedulePopUp14}>
          <div className={styles.button}>
            <div className={styles.label16}>
              <div className={styles.label17} />
            </div>
          </div>
        </button>
        <div className={styles.schedule}>Schedule</div>
        <div className={styles.schedule}>Schedule</div>
        <div className={styles.schedule2}>Schedule</div>
        <div className={styles.schedule3}>Schedule</div>
        <div className={styles.schedule4}>Schedule</div>
        <div className={styles.schedule5}>Schedule</div>
        <div className={styles.schedule6}>Schedule</div>
        <div className={styles.schedule7}>Schedule</div>
        <div className={styles.pending}>Pending</div>
        <div className={styles.pending}>Pending</div>
        <div className={styles.pending2}>Pending</div>
        <div className={styles.pending3}>Pending</div>
        <div className={styles.pending4}>Pending</div>
        <div className={styles.pending5}>Pending</div>
        <div className={styles.pending6}>Pending</div>
        <div className={styles.pending7}>Pending</div>
      </div>
      {isNotificationPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotificationPopup1}
        >
          <NotificationPopup1 onClose={closeNotificationPopup1} />
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
      {isSuccessfullyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSuccessfullyPopup}
        >
          <SuccessfullyPopup onClose={closeSuccessfullyPopup} />
        </PortalPopup>
      )}
      {isSchedulePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp}
        >
          <SchedulePopUp onClose={closeSchedulePopUp} />
        </PortalPopup>
      )}
      {isSchedulePopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp1}
        >
          <SchedulePopUp onClose={closeSchedulePopUp1} />
        </PortalPopup>
      )}
      {isSchedulePopUp2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp2}
        >
          <SchedulePopUp onClose={closeSchedulePopUp2} />
        </PortalPopup>
      )}
      {isSchedulePopUp3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp3}
        >
          <SchedulePopUp onClose={closeSchedulePopUp3} />
        </PortalPopup>
      )}
      {isSchedulePopUp4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp4}
        >
          <SchedulePopUp onClose={closeSchedulePopUp4} />
        </PortalPopup>
      )}
      {isSchedulePopUp5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp5}
        >
          <SchedulePopUp onClose={closeSchedulePopUp5} />
        </PortalPopup>
      )}
      {isSchedulePopUp6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp6}
        >
          <SchedulePopUp onClose={closeSchedulePopUp6} />
        </PortalPopup>
      )}
      {isSchedulePopUp7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp7}
        >
          <SchedulePopUp onClose={closeSchedulePopUp7} />
        </PortalPopup>
      )}
      {isSchedulePopUp8Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp8}
        >
          <SchedulePopUp onClose={closeSchedulePopUp8} />
        </PortalPopup>
      )}
      {isSchedulePopUp9Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp9}
        >
          <SchedulePopUp onClose={closeSchedulePopUp9} />
        </PortalPopup>
      )}
      {isSchedulePopUp10Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp10}
        >
          <SchedulePopUp onClose={closeSchedulePopUp10} />
        </PortalPopup>
      )}
      {isSchedulePopUp11Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp11}
        >
          <SchedulePopUp onClose={closeSchedulePopUp11} />
        </PortalPopup>
      )}
      {isSchedulePopUp12Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp12}
        >
          <SchedulePopUp onClose={closeSchedulePopUp12} />
        </PortalPopup>
      )}
      {isSchedulePopUp13Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp13}
        >
          <SchedulePopUp onClose={closeSchedulePopUp13} />
        </PortalPopup>
      )}
      {isSchedulePopUp14Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSchedulePopUp14}
        >
          <SchedulePopUp onClose={closeSchedulePopUp14} />
        </PortalPopup>
      )}
    </>
  );
};

export default JudgeDashbord;
