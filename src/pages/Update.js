import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./Update.module.css";
const Update = () => {
  const navigate = useNavigate();

  const onButtonS40Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  return (
    <div className={styles.update}>
      <div className={styles.criminalInfo}>
        <input
          className={styles.inputtextStyle2}
          type="search"
          placeholder="Type to search"
          maxLength
          minLength
        />
        <img className={styles.logoutIcon} alt="" src="/logout.svg" />
        <div className={styles.profile}>PROFILE</div>
        <div className={styles.bereketBogale}>
          <span className={styles.bereketBogale1} id="Police name">
            Bereket Bogale
          </span>
        </div>
        <button
          className={styles.buttonS40}
          autoFocus
          onClick={onButtonS40Click}
        >
          <button className={styles.button} autoFocus>
            <div className={styles.label}>
              <div className={styles.label1}>Update</div>
            </div>
          </button>
        </button>
        <ContainerFooter
          imageIds="/logoneoscorp.svg"
          smallImageIds="/iconsocial.svg"
          smallImageIds2="/facebook.svg"
          mediumImageIds="/iconsocial1.svg"
          iconSocialTop="1327px"
        />
        <div className={styles.updateLevel}>Update Level</div>
        <input
          className={styles.criminalInfoChild}
          type="text"
          placeholder="Level"
          maxLength
          minLength
          required
        />
        <div className={styles.selectLevel}>Select Level</div>
        <ContainerFooter
          imageIds="/logoneoscorp.svg"
          smallImageIds="/iconsocial.svg"
          smallImageIds2="/facebook.svg"
          mediumImageIds="/iconsocial1.svg"
          iconSocialTop="506px"
          iconSocialLeft="-94px"
        />
      </div>
    </div>
  );
};

export default Update;
