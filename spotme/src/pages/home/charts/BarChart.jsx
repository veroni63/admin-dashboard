import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,  
  LabelList,
} from "recharts";

// Sample data with daily traffic values
const data = [
  { name: "Monday", uv: 9, pv: 4, amt: 24 },
  { name: "Tuesday", uv: 6, pv: 3, amt: 22 },
  { name: "Wednesday", uv: 4, pv: 9, amt: 23 },
  { name: "Thursday", uv: 7, pv: 4, amt: 20 },
  { name: "Friday", uv: 5, pv: 6, amt: 21 },
  { name: "Saturday", uv: 8, pv: 3, amt: 25 },
  { name: "Sunday", uv: 10, pv: 4, amt: 21 },
];

// Custom shape for curved bars
const CurvedBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 10; // radius for rounded corners
  return (
    <g>
      <path
        d={`M${x},${y + height}
          H${x + width}
          Q${x + width},${y + height} ${x + width},${y + height - radius}
          V${y + radius}
          Q${x + width},${y} ${x + width - radius},${y}
          H${x + radius}
          Q${x},${y} ${x},${y + radius}
          Z`}
        fill={fill}
      />
    </g>
  );
};

const MyBarChart = () => (
  <div style={{ width: "100%", background: "none" }}>
    {" "}
    {/* Remove background from container */}
    <svg width="0" height="0">
      <defs>
        <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAC02A" />
          <stop offset="72%" stopColor="#F668D1" />
          <stop offset="113%" stopColor="#7131D2" />
        </linearGradient>
      </defs>
    </svg>
    <BarChart
      width={400}
      height={250}
      data={data}
      margin={{ top: 17, right: 90, left: -55, bottom: 4 }}
      style={{ background: "none" }}
    >
      <CartesianGrid stroke="none" /> {/* Remove grid lines */}
      <XAxis
        dataKey="name"
        stroke="none" // Remove x-axis line
        tick={{ fill: "none" }} // Remove x-axis ticks
      />
      <YAxis
        stroke="none" // Remove y-axis line
        tick={{ fill: "none" }} // Remove y-axis ticks
      />
      <Tooltip />
      <Bar
        dataKey="uv"
        fill="url(#gradientColor)"
        shape={CurvedBar}
        barSize={13} // Adjust the width of the bars here
      >
        <LabelList
          dataKey="uv"
          position="top"
          formatter={(value) => `${value.toString().padStart(2, "0")}`} // Format labels as '09', '04', etc.
        />
      </Bar>
    </BarChart>
  </div>
);

export default MyBarChart;
