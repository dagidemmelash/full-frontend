import { useMemo } from "react";
import styles from "./ContainerFooter.module.css";
const ContainerFooter = ({
  imageIds,
  smallImageIds,
  smallImageIds2,
  mediumImageIds,
  iconSocialTop,
  iconSocialLeft,
  federalPoliceJustifyContent,
}) => {
  const footerStyle = useMemo(() => {
    return {
      top: iconSocialTop,
      left: iconSocialLeft,
    };
  }, [iconSocialTop, iconSocialLeft]);

  const footerLogoCopyIconsStyle = useMemo(() => {
    return {
      justifyContent: federalPoliceJustifyContent,
    };
  }, [federalPoliceJustifyContent]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div
        className={styles.footerlogocopyicons}
        style={footerLogoCopyIconsStyle}
      >
        <div className={styles.footerlogocopyicons1}>
          <img className={styles.logoneoscorpIcon} alt="" src={imageIds} />
          <div className={styles.allRightsReserved}>
            © All rights Reserved. Neoscorp Inc.
          </div>
          <div className={styles.social}>
            <img className={styles.iconsocial} alt="" src={smallImageIds} />
            <div className={styles.iconsocial1}>
              <img
                className={styles.facebookIcon}
                alt=""
                src={smallImageIds2}
              />
            </div>
            <img className={styles.iconsocial} alt="" src={mediumImageIds} />
          </div>
        </div>
      </div>
      <div className={styles.federalPolice}>Federal Police</div>
      <img
        className={styles.securityGuardBadgeClipartPIcon}
        alt=""
        src="/security-guard-badge-clipart-png-images--security-guard-logo-design-vector--security--guard--logo-png-image-for-free-downloadremovebgpreview-1@2x.png"
      />
    </div>
  );
};

export default ContainerFooter;
