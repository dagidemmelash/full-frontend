import { useMemo } from "react";
import styles from "./PieChartContainer.module.css";
const PieChartContainer = ({
  componentName,
  pieChart,
  pieChart1,
  pieChart2,
  pieChart3,
  pieChart4,
  labelDisplay,
  labelAlignItems,
  labelDisplay1,
  labelAlignItems1,
  pieChartDisplay,
  pieChartAlignItems,
  pieChartDisplay1,
  pieChartAlignItems1,
  propTop,
  propLeft,
}) => {
  const labelStyle = useMemo(() => {
    return {
      display: labelDisplay,
      alignItems: labelAlignItems,
    };
  }, [labelDisplay, labelAlignItems]);

  const label1Style = useMemo(() => {
    return {
      display: labelDisplay1,
      alignItems: labelAlignItems1,
    };
  }, [labelDisplay1, labelAlignItems1]);

  const label2Style = useMemo(() => {
    return {
      display: pieChartDisplay,
      alignItems: pieChartAlignItems,
    };
  }, [pieChartDisplay, pieChartAlignItems]);

  const label3Style = useMemo(() => {
    return {
      display: pieChartDisplay1,
      alignItems: pieChartAlignItems1,
    };
  }, [pieChartDisplay1, pieChartAlignItems1]);

  const tooltipStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.pieChart}>
      <div className={styles.title}>
        <div className={styles.componentName}>{componentName}</div>
      </div>
      <div className={styles.pieChart1}>
        <div className={styles.label}>
          <div className={styles.color}>
            <div className={styles.rectangle} />
            <div className={styles.label1} style={labelStyle}>
              Label
            </div>
          </div>
          <div className={styles.color}>
            <div className={styles.rectangle1} />
            <div className={styles.label1} style={label1Style}>
              Label
            </div>
          </div>
          <div className={styles.color}>
            <div className={styles.rectangle2} />
            <div className={styles.label1} style={label2Style}>
              Label
            </div>
          </div>
          <div className={styles.color}>
            <div className={styles.rectangle3} />
            <div className={styles.label1} style={label3Style}>
              Label
            </div>
          </div>
        </div>
        <div className={styles.label5}>Label</div>
        <div className={styles.label6}>Label</div>
        <div className={styles.label7}>Label</div>
        <div className={styles.label8}>Label</div>
        <img className={styles.pieChartIcon} alt="" src={pieChart} />
        <img className={styles.pieChartIcon1} alt="" src={pieChart1} />
        <img className={styles.pieChartIcon2} alt="" src={pieChart2} />
        <img className={styles.pieChartIcon3} alt="" src={pieChart3} />
        <img className={styles.pieChartIcon4} alt="" src={pieChart4} />
        <div className={styles.tooltip} style={tooltipStyle}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
          <div className={styles.tooltip1}>
            <div className={styles.loremIpsumDolor}>Label</div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Mi consectetur scelerisque
              sit ultricies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartContainer;
