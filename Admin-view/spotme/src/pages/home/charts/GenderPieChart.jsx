import { PieChart } from "@mui/x-charts/PieChart";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styles from "./GenderPieChart.module.css"; // Import the CSS Module
import "./global.css";
function GenderPieChart() {
  const series = [
    {
      data: [
        { id: 0, value: 60, label: "Male", color: "#6048E4" },
        { id: 1, value: 30, label: "Female", color: "#F668D1" },
        { id: 2, value: 2, label: "Transgender", color: "#FAC02A" },
        { id: 3, value: 8, label: "Any", color: "#EFF4FB" },
      ],
    },
  ];

  const valueofpiechart = series[0].data.map((items) => items.value);
  const labelofpiechart = series[0].data.map((items) => items.label);

  return (
    <>
      <PieChart
        className={styles.alignpiechart}
        series={series}
        width={240}
        height={170}
        options={{ legend: { display: false } }}
      />
      <div className="d-flex">
        {valueofpiechart.map((value, index) => (
          <span style={{ margin: "5px" }} key={index}>
            <span className={styles[`colorId${index}`]}> {}</span>
            <span className={styles.pieChartLabel}>
              {labelofpiechart[index]}
            </span>
            <div className={styles[`percentageId${index}`]}>{value}%</div>
          </span>
        ))}
      </div>
    </>
  );
}

export default GenderPieChart;
