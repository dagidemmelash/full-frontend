import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardID from "../components/CardID";
import styles from "./LoginPage1.module.css";
const LoginPage1 = () => {
  const navigate = useNavigate();

  const onButtonS40Click = useCallback(() => {
    navigate("/police-dashboard");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageInner}>
        <div className={styles.loginPageWrapper}>
          <div className={styles.loginPage1}>
            <div className={styles.loginPage2}>
              <div className={styles.loginPageChild} />
              <img
                className={styles.noiseTexture}
                alt=""
                src="/noise--texture@2x.png"
              />
              <CardID onButtonS40Click={onButtonS40Click} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage1;
