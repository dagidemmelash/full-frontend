import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage2.module.css";
const LoginPage2 = () => {
  const navigate = useNavigate();

  const onButtonS40Click = useCallback(() => {
    navigate("/judge-dashbord");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageInner}>
        <div className={styles.loginPageInner}>
          <div className={styles.loginPage1}>
            <div className={styles.loginPage2}>
              <div className={styles.loginPageChild} />
              <img
                className={styles.noiseTexture}
                alt=""
                src="/noise--texture@2x.png"
              />
              <div className={styles.component1}>
                <div className={styles.component1Child} />
                <div className={styles.component1Item} />
                <input
                  className={styles.component1Inner}
                  type="text"
                  placeholder="ENTER ID"
                  maxLength
                  minLength
                  required
                  autoFocus
                  id="text"
                />
                <h1 className={styles.id}>ID</h1>
                <div className={styles.password}>Password</div>
                <input
                  className={styles.rectangleInput}
                  type="password"
                  placeholder="ENTER PASSWORD"
                  maxLength={20}
                  minLength={8}
                  required
                  autoFocus
                />
                <b className={styles.federalOfficeDepartmentContainer}>
                  <p className={styles.federalOffice}>{`Federal Office `}</p>
                  <p className={styles.federalOffice}> Department</p>
                </b>
                <button className={styles.buttonS40} onClick={onButtonS40Click}>
                  <button className={styles.button} autoFocus>
                    <button className={styles.label} autoFocus>
                      <div className={styles.label1}>Login</div>
                    </button>
                  </button>
                </button>
                <img
                  className={styles.noiseTexture1}
                  alt=""
                  src="/noise--texture1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage2;
