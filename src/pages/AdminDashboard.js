import { useState, useCallback } from "react";
import NotificationPopup from "../components/NotificationPopup";
import PortalPopup from "../components/PortalPopup";
import NotificationPopup2 from "../components/NotificationPopup2";
import DeletePopup from "../components/DeletePopup";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./AdminDashboard.module.css";
const AdminDashboard = () => {
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [isNotificationPopup2Open, setNotificationPopup2Open] = useState(false);
  const [isNotificationPopup21Open, setNotificationPopup21Open] =
    useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [isDeletePopup1Open, setDeletePopup1Open] = useState(false);
  const [isDeletePopup2Open, setDeletePopup2Open] = useState(false);
  const [isDeletePopup3Open, setDeletePopup3Open] = useState(false);
  const [isDeletePopup4Open, setDeletePopup4Open] = useState(false);
  const [isDeletePopup5Open, setDeletePopup5Open] = useState(false);
  const [isDeletePopup6Open, setDeletePopup6Open] = useState(false);
  const [isDeletePopup7Open, setDeletePopup7Open] = useState(false);
  const [isDeletePopup8Open, setDeletePopup8Open] = useState(false);
  const [isDeletePopup9Open, setDeletePopup9Open] = useState(false);
  const [isDeletePopup10Open, setDeletePopup10Open] = useState(false);
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login-page");
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

  const onViewListOf1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='viewListOf1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup = useCallback(() => {
    setDeletePopupOpen(true);
  }, []);

  const closeDeletePopup = useCallback(() => {
    setDeletePopupOpen(false);
  }, []);

  const onCreateNewCrimeFileClick = useCallback(() => {
    navigate("/authentication");
  }, [navigate]);

  const onViewListOfClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='viewListOf']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup1 = useCallback(() => {
    setDeletePopup1Open(true);
  }, []);

  const closeDeletePopup1 = useCallback(() => {
    setDeletePopup1Open(false);
  }, []);

  const onRectangleButton4Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup2 = useCallback(() => {
    setDeletePopup2Open(true);
  }, []);

  const closeDeletePopup2 = useCallback(() => {
    setDeletePopup2Open(false);
  }, []);

  const onRectangleButton6Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup3 = useCallback(() => {
    setDeletePopup3Open(true);
  }, []);

  const closeDeletePopup3 = useCallback(() => {
    setDeletePopup3Open(false);
  }, []);

  const onRectangleButton8Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup4 = useCallback(() => {
    setDeletePopup4Open(true);
  }, []);

  const closeDeletePopup4 = useCallback(() => {
    setDeletePopup4Open(false);
  }, []);

  const onRectangleButton10Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup5 = useCallback(() => {
    setDeletePopup5Open(true);
  }, []);

  const closeDeletePopup5 = useCallback(() => {
    setDeletePopup5Open(false);
  }, []);

  const onRectangleButton12Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup6 = useCallback(() => {
    setDeletePopup6Open(true);
  }, []);

  const closeDeletePopup6 = useCallback(() => {
    setDeletePopup6Open(false);
  }, []);

  const onRectangleButton14Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup7 = useCallback(() => {
    setDeletePopup7Open(true);
  }, []);

  const closeDeletePopup7 = useCallback(() => {
    setDeletePopup7Open(false);
  }, []);

  const onRectangleButton16Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup8 = useCallback(() => {
    setDeletePopup8Open(true);
  }, []);

  const closeDeletePopup8 = useCallback(() => {
    setDeletePopup8Open(false);
  }, []);

  const onRectangleButton18Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup9 = useCallback(() => {
    setDeletePopup9Open(true);
  }, []);

  const closeDeletePopup9 = useCallback(() => {
    setDeletePopup9Open(false);
  }, []);

  const onRectangleButton20Click = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  const openDeletePopup10 = useCallback(() => {
    setDeletePopup10Open(true);
  }, []);

  const closeDeletePopup10 = useCallback(() => {
    setDeletePopup10Open(false);
  }, []);

  return (
    <>
      <div className={styles.adminDashboard}>
        <div className={styles.adminDashboard1}>
          <div className={styles.adminDashboard2}>
            <div className={styles.profile}>PROFILE</div>
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
                Tesfaye Bogale
              </span>
            </h1>
            <ContainerFooter
              imageIds="/logoneoscorp.svg"
              smallImageIds="/iconsocial.svg"
              smallImageIds2="/facebook.svg"
              mediumImageIds="/iconsocial1.svg"
              iconSocialTop="1275px"
              iconSocialLeft="-2px"
              federalPoliceJustifyContent="flex-start"
            />
            <input
              className={styles.inputtextStyle1}
              type="search"
              placeholder="Type to search"
              maxLength
              minLength
            />
            <div className={styles.avatarParent}>
              <div className={styles.avatar}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image.svg"
                  onClick={onImageIconClick}
                />
              </div>
              <div
                className={styles.iconoutlinemail}
                onClick={openNotificationPopup2}
              >
                <img
                  className={styles.icon}
                  alt=""
                  src="/icon.svg"
                  onClick={openNotificationPopup}
                />
              </div>
              <div
                className={styles.instanceChild}
                onClick={openNotificationPopup21}
              />
              <div className={styles.div}>2</div>
            </div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <a className={styles.viewChart} onClick={onViewChartClick}>
              View Chart
            </a>
            <img className={styles.icon1} alt="" src="/icon1.svg" />
            <button
              className={styles.viewListOf}
              data-scroll-to="viewListOf1"
              onClick={onViewListOf1Click}
            >
              view list of police
            </button>
            <img className={styles.iconoutlinechartSquareBar} alt="" />
            <img className={styles.icon2} alt="" src="/icon1.svg" />
            <img className={styles.icon1} alt="" src="/icon1.svg" />
            <div className={styles.adminDashboardChild} />
            <div className={styles.adminDashboardItem} />
            <b className={styles.no}>No.</b>
            <b className={styles.no1}>No.</b>
            <b className={styles.nameOfPolicies}>Name of Policies</b>
            <b className={styles.nameOfJudges}>Name of Judges</b>
            <b className={styles.type}>Type</b>
            <b className={styles.type1}>Type</b>
            <div className={styles.adminDashboardInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.adminDashboardChild1} />
            <div className={styles.adminDashboardChild2} />
            <div className={styles.adminDashboardChild3} />
            <div className={styles.adminDashboardChild4} />
            <div className={styles.adminDashboardChild5} />
            <div className={styles.adminDashboardChild6} />
            <div className={styles.adminDashboardChild7} />
            <div className={styles.adminDashboardChild8} />
            <b className={styles.b}>1,</b>
            <b className={styles.b1}>1,</b>
            <b className={styles.b2}>4,</b>
            <b className={styles.b3}>4,</b>
            <b className={styles.b4}>2,</b>
            <b className={styles.b5}>2,</b>
            <b className={styles.b6}>5,</b>
            <b className={styles.b7}>5,</b>
            <b className={styles.b8}>3,</b>
            <b className={styles.b9}>3,</b>
            <b className={styles.biniyamMoges}>Biniyam Moges</b>
            <b className={styles.biniyamMoges1}>Biniyam Moges</b>
            <b className={styles.biniyamMoges2}>Biniyam Moges</b>
            <b className={styles.biniyamMoges3}>Biniyam Moges</b>
            <b className={styles.biniyamMoges4}>Biniyam Moges</b>
            <b className={styles.biniyamMoges5}>Biniyam Moges</b>
            <b className={styles.biniyamMoges6}>Biniyam Moges</b>
            <b className={styles.biniyamMoges7}>Biniyam Moges</b>
            <b className={styles.biniyamMoges8}>Biniyam Moges</b>
            <b className={styles.biniyamMoges9}>Biniyam Moges</b>
            <div className={styles.component2}>
              <button
                className={styles.component2Child}
                autoFocus
                onClick={onRectangleButtonClick}
              />
              <button
                className={styles.component2Item}
                autoFocus
                onClick={openDeletePopup}
              />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component7}>
              <div className={styles.component7Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component3}>
              <div className={styles.component7Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component8}>
              <div className={styles.component7Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component4}>
              <div className={styles.component7Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component9}>
              <div className={styles.component7Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component5}>
              <div className={styles.component7Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component10}>
              <div className={styles.component10Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component6}>
              <div className={styles.component7Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <div className={styles.component11}>
              <div className={styles.component7Child} />
              <div className={styles.component7Item} />
              <h1 className={styles.update}>Update</h1>
              <h1 className={styles.delete}>Delete</h1>
            </div>
            <button
              className={styles.createNewCrimeFile}
              autoFocus
              onClick={onCreateNewCrimeFileClick}
            >
              <div className={styles.createNewCrimeFileChild} />
              <b className={styles.authentication}>Authentication</b>
              <div className={styles.createNewCrimeFileItem} />
              <div className={styles.createNewCrimeFileInner} />
              <b className={styles.b10}>+</b>
            </button>
            <div
              className={styles.viewListOf1}
              data-scroll-to="viewListOf"
              onClick={onViewListOfClick}
            >
              view list of judge
            </div>
          </div>
          <div className={styles.component111}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton2Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup1}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component101}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton4Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup2}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component91}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton6Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup3}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component81}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton8Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup4}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component71}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton10Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup5}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component61}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton12Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup6}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component51}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton14Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup7}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component41}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton16Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup8}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component31}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton18Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup9}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
          <div className={styles.component21}>
            <button
              className={styles.component2Child}
              autoFocus
              onClick={onRectangleButton20Click}
            />
            <button
              className={styles.component2Item}
              autoFocus
              onClick={openDeletePopup10}
            />
            <h1 className={styles.update}>Update</h1>
            <h1 className={styles.delete}>Delete</h1>
          </div>
        </div>
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
      {isDeletePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup}
        >
          <DeletePopup onClose={closeDeletePopup} />
        </PortalPopup>
      )}
      {isDeletePopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup1}
        >
          <DeletePopup onClose={closeDeletePopup1} />
        </PortalPopup>
      )}
      {isDeletePopup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup2}
        >
          <DeletePopup onClose={closeDeletePopup2} />
        </PortalPopup>
      )}
      {isDeletePopup3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup3}
        >
          <DeletePopup onClose={closeDeletePopup3} />
        </PortalPopup>
      )}
      {isDeletePopup4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup4}
        >
          <DeletePopup onClose={closeDeletePopup4} />
        </PortalPopup>
      )}
      {isDeletePopup5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup5}
        >
          <DeletePopup onClose={closeDeletePopup5} />
        </PortalPopup>
      )}
      {isDeletePopup6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup6}
        >
          <DeletePopup onClose={closeDeletePopup6} />
        </PortalPopup>
      )}
      {isDeletePopup7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup7}
        >
          <DeletePopup onClose={closeDeletePopup7} />
        </PortalPopup>
      )}
      {isDeletePopup8Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup8}
        >
          <DeletePopup onClose={closeDeletePopup8} />
        </PortalPopup>
      )}
      {isDeletePopup9Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup9}
        >
          <DeletePopup onClose={closeDeletePopup9} />
        </PortalPopup>
      )}
      {isDeletePopup10Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeletePopup10}
        >
          <DeletePopup onClose={closeDeletePopup10} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminDashboard;
