import { useState, useCallback } from "react";
import { Progress } from "@chakra-ui/react";
import NotificationPopup from "../components/NotificationPopup";
import PortalPopup from "../components/PortalPopup";
import CriminalReportContainer from "../components/CriminalReportContainer";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./PoliceDashboard.module.css";
const PoliceDashboard = () => {
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [isNotificationPopup1Open, setNotificationPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onCreateNewCrimeFileClick = useCallback(() => {
    navigate("/registration");
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

  const onViewCriminalClick = useCallback(() => {
    navigate("/criminal-list");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/registration");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/registration");
  }, [navigate]);

  return (
    <>
      <div className={styles.policeDashboard}>
        <div className={styles.policeDashboardChild} />
        <div className={styles.profile}>PROFILE</div>
        <div className={styles.btn}>
          <b className={styles.seeAllCriminals}>See All Criminals</b>
          <img
            className={styles.iconoutlinecheveronRight}
            alt=""
            src="/iconoutlinecheveronright1.svg"
          />
        </div>
        <div className={styles.div}>
          <div className={styles.title1}>
            <b className={styles.jennyWilson}>Jenny Wilson</b>
            <img className={styles.imageIcon} alt="" src="/image7@2x.png" />
            <div className={styles.wlawsonexamplecom}>w.lawson@example.com</div>
          </div>
          <div className={styles.title2}>
            <div className={styles.adama}>Adama</div>
            <div className={styles.cybercrime}>Cybercrime</div>
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.title11}>
            <b className={styles.jennyWilson}>Devon Lane</b>
            <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
            <div className={styles.wlawsonexamplecom}>
              dat.roberts@example.com
            </div>
          </div>
          <div className={styles.title2}>
            <div className={styles.awasa}>Awasa</div>
            <div className={styles.cybercrime}>Youth crime</div>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.title12}>
            <b className={styles.jennyWilson}>Jane Cooper</b>
            <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
            <div className={styles.wlawsonexamplecom}>jgraham@example.com</div>
          </div>
          <div className={styles.title22}>
            <div className={styles.addisAbaba}>Addis Ababa</div>
            <div className={styles.fraud}>Fraud</div>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.title13}>
            <b className={styles.jennyWilson}>Dianne Russell</b>
            <img className={styles.imageIcon} alt="" src="/image5@2x.png" />
            <div className={styles.wlawsonexamplecom}>curtis.d@example.com</div>
          </div>
          <div className={styles.title23}>
            <div className={styles.diredawa}>DireDawa</div>
            <div className={styles.cybercrime}>Illegal Workers</div>
          </div>
        </div>
        <div className={styles.criminalRecordsSummary}>
          Criminal Records Summary
        </div>
        <b className={styles.recentCriminals}>Recent Criminals</b>
        <CriminalReportContainer />
        <a className={styles.logout} onClick={onLogoutClick}>
          <div className={styles.logout1}>Logout</div>
          <img
            className={styles.iconoutlinelogout}
            alt=""
            src="/iconoutlinelogout.svg"
          />
        </a>
        <h1 className={styles.bereketBogale} id="Name">
          <span className={styles.bereketBogale1} id="Police name">
            Bereket Bogale
          </span>
        </h1>
        <div className={styles.manage}>Manage</div>
        <div className={styles.crimeType}>
          <h3 className={styles.title}>Crime Type</h3>
          <img
            className={styles.elementsLineGorizontal}
            alt=""
            src="/elements--line--gorizontal16.svg"
          />
          <Progress
            className={styles.elementsLineGorizontal1}
            w="268px"
            size="sm"
            value={50}
            colorScheme="blue"
          />
          <div className={styles.digits} id="crime type">
            CyberCrime
          </div>
        </div>
        <div className={styles.region}>
          <img
            className={styles.elementsLineGorizontal2}
            alt=""
            src="/elements--line--gorizontal17.svg"
          />
          <h3 className={styles.title3}>Region</h3>
          <div className={styles.digits1} id="Region">
            Adama
          </div>
          <Progress
            className={styles.elementsLineGorizontal3}
            w="215.4366455078125px"
            size="sm"
            value={70}
            colorScheme="blue"
          />
        </div>
        <div className={styles.gender}>
          <Progress
            className={styles.elementsLineGorizontal4}
            w="322px"
            size="sm"
            value={50}
            colorScheme="blue"
          />
          <h3 className={styles.title4}>Gender</h3>
          <div className={styles.digits2} id="Gender">
            Male
          </div>
          <img
            className={styles.elementsLineGorizontal5}
            alt=""
            src="/elements--line--gorizontal18.svg"
          />
        </div>
        <div className={styles.age}>
          <Progress
            className={styles.elementsLineGorizontal4}
            w="321px"
            size="sm"
            value={50}
            colorScheme="blue"
          />
          <h3 className={styles.title5}>Age</h3>
          <input
            className={styles.digits3}
            type="number"
            placeholder="21-35"
            maxLength
            minLength
          />
          <img
            className={styles.elementsLineGorizontal7}
            alt=""
            src="/elements--line--gorizontal19.svg"
          />
        </div>
        <h1 className={styles.text}>Crime Data analysis based on</h1>
        <ContainerFooter
          imageIds="/logoneoscorp.svg"
          smallImageIds="/iconsocial9.svg"
          smallImageIds2="/facebook.svg"
          mediumImageIds="/iconsocial4.svg"
          iconSocialTop="1275px"
          iconSocialLeft="-2px"
          federalPoliceJustifyContent="flex-start"
        />
        <button
          className={styles.createNewCrimeFile}
          autoFocus
          onClick={onCreateNewCrimeFileClick}
        >
          <div className={styles.createNewCrimeFileChild} />
          <h1 className={styles.createNewCrime}> Create New Crime File</h1>
          <div className={styles.createNewCrimeFileItem} />
          <div className={styles.createNewCrimeFileInner} />
          <b className={styles.b}>+</b>
        </button>
        <input
          className={styles.inputtextStyle1}
          type="search"
          placeholder="Type to search"
          maxLength
          minLength
        />
        <div className={styles.avatarParent}>
          <div className={styles.avatar} onClick={onAvatarContainerClick}>
            <img
              className={styles.imageIcon4}
              alt=""
              src="/image10.svg"
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
        <img className={styles.groupIcon} alt="" src="/group4.svg" />
        <a className={styles.viewChart} onClick={onViewChartClick}>
          View Chart
        </a>
        <img className={styles.icon1} alt="" src="/icon1.svg" />
        <a className={styles.viewCriminal} onClick={onViewCriminalClick}>
          View Criminal
        </a>
        <button
          className={styles.policeDashboardItem}
          autoFocus
          onClick={onRectangleButtonClick}
        />
        <button
          className={styles.policeDashboardInner}
          autoFocus
          onClick={onRectangleButton1Click}
        />
        <span className={styles.recordCriminalData}>Record criminal data</span>
        <div className={styles.addNewRecord}>
          Add new record on Criminal ‘s Data
        </div>
        <a className={styles.updateCriminalData}>Update criminal data</a>
        <div
          className={styles.updateRecordOn}
        >{`Update record on criminal data  `}</div>
      </div>
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

export default PoliceDashboard;
