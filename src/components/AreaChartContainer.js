import TooltipContainer from "./TooltipContainer";
import styles from "./AreaChartContainer.module.css";
const AreaChartContainer = () => {
  return (
    <div className={styles.areaChart}>
      <div className={styles.title}>
        <div className={styles.componentName}>Area Chart</div>
      </div>
      <div className={styles.lineChart}>
        <div className={styles.line} />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <div className={styles.line4} />
        <div className={styles.line5} />
        <div className={styles.label}>Label</div>
        <div className={styles.label1}>Label</div>
        <div className={styles.label2}>Label</div>
        <div className={styles.label3}>Label</div>
        <div className={styles.label4}>Label</div>
        <div className={styles.label5}>Label</div>
        <div className={styles.label6}>Label</div>
        <div className={styles.label7}>Label</div>
        <div className={styles.label8}>Label</div>
        <div className={styles.label9}>Label</div>
        <div className={styles.label10}>Label</div>
        <div className={styles.label11}>Label</div>
        <div className={styles.label12}>Label</div>
        <div className={styles.label13}>Label</div>
        <div className={styles.label14}>Label</div>
        <div className={styles.line6} />
        <div className={styles.line7} />
        <div className={styles.line8} />
        <div className={styles.line9} />
        <div className={styles.line10} />
        <div className={styles.line11} />
        <div className={styles.line12} />
        <div className={styles.line13} />
        <div className={styles.line14} />
        <div className={styles.label15}>
          <div className={styles.color}>
            <div className={styles.rectangle} />
            <div className={styles.label16}>Label</div>
          </div>
          <div className={styles.color}>
            <div className={styles.rectangle1} />
            <div className={styles.label16}>Label</div>
          </div>
        </div>
        <img className={styles.lineChartIcon} alt="" src="/line-chart1.svg" />
        <img className={styles.lineChartIcon1} alt="" src="/line-chart.svg" />
        <TooltipContainer tooltipContainerTooltipTop="calc(50% - 84.5px)" />
      </div>
    </div>
  );
};

export default AreaChartContainer;
