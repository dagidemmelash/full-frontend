import PieChartContainer from "../components/PieChartContainer";
import LineChartContainer from "../components/LineChartContainer";
import AreaChartContainer from "../components/AreaChartContainer";
import MeterChartContainer from "../components/MeterChartContainer";
import styles from "./DataVisualization.module.css";
const DataVisualization = () => {
  return (
    <div className={styles.datavisualization}>
      <div className={styles.logotag}>
        <div className={styles.tag}>
          <div className={styles.visualStyle}>Visual Style</div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
      </div>
      <div className={styles.headline}>
        <div className={styles.componentName}>DataVisualization</div>
        <img className={styles.separateIcon} alt="" src="/separate.svg" />
      </div>
      <img className={styles.separateIcon} alt="" src="/separate.svg" />
      <PieChartContainer
        componentName="Pie Chart"
        pieChart="/pie-chart.svg"
        pieChart1="/pie-chart1.svg"
        pieChart2="/pie-chart2.svg"
        pieChart3="/pie-chart3.svg"
        pieChart4="/pie-chart4.svg"
      />
      <img className={styles.separateIcon} alt="" src="/separate.svg" />
      <PieChartContainer
        componentName="Donat Chart"
        pieChart="/pie-chart5.svg"
        pieChart1="/pie-chart6.svg"
        pieChart2="/pie-chart7.svg"
        pieChart3="/pie-chart8.svg"
        pieChart4="/pie-chart9.svg"
        labelDisplay="inline-block"
        labelAlignItems="unset"
        labelDisplay1="inline-block"
        labelAlignItems1="unset"
        pieChartDisplay="inline-block"
        pieChartAlignItems="unset"
        pieChartDisplay1="inline-block"
        pieChartAlignItems1="unset"
        propTop="calc(50% - 150px)"
        propLeft="calc(50% - 148px)"
      />
      <img className={styles.separateIcon} alt="" src="/separate.svg" />
      <LineChartContainer />
      <img className={styles.separateIcon} alt="" src="/separate.svg" />
      <AreaChartContainer />
      <img className={styles.separateIcon} alt="" src="/separate.svg" />
      <MeterChartContainer />
    </div>
  );
};

export default DataVisualization;
