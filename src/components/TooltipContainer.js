import { useMemo } from "react";
import styles from "./TooltipContainer.module.css";
const TooltipContainer = ({ tooltipContainerTooltipTop }) => {
  const tooltip1Style = useMemo(() => {
    return {
      top: tooltipContainerTooltipTop,
    };
  }, [tooltipContainerTooltipTop]);

  return (
    <div className={styles.tooltip} style={tooltip1Style}>
      <div className={styles.tooltip1}>
        <div className={styles.label}>Label</div>
        <div className={styles.label}>
          Lorem ipsum dolor sit amet consectetur. Mi consectetur scelerisque sit
          ultricies.
        </div>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
    </div>
  );
};

export default TooltipContainer;
