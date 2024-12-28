import { PieChart } from "@mui/x-charts/PieChart";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styles from "./Appchart.module.css"; // Import the CSS Module
import './global.css'
function AppPieChart() {
  const series = [
    {
      data: [
        { id: 0, value: 60, label: "20 below", color: "#FFCB45" },
        { id: 1, value: 30, label: "20 - 25", color: "#FFDA7B" },
        { id: 2, value: 8, label: "25 - 30", color: "#EFF4FB" },
        { id: 3, value: 2, label: "30 & above", color: "#FFB904" },
      ],
      backgroundColor: ["#FFCB45", "#FFDA7B", "#EFF4FB", "#FFB904"],
    },
  ];

  const valueofpiechart = series[0].data.map((items) => items.value);
  const labelofpiechart = series[0].data.map((items) => items.label);

  return (
    <>
      <PieChart className={styles.alignpiechart} series={series} width={240} height={170} />
      <div className="d-flex">
        {valueofpiechart.map((value, index) => (
          <span style={{ margin: "5px" }} key={index}>
            <span id={`${styles[`colorId${index}`]}`}> {}</span>
            <span className={styles.pieChartLabel}>
              {labelofpiechart[index]}
            </span>
            <div
              className={`${styles[`percentageId${index}`]} ${styles.percentage}`}
            >
              {value}%
            </div>
          </span>
        ))}
      </div>
    </>
  );
}

export default AppPieChart;
