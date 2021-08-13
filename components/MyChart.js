import React, { useState } from "react";

// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function MyChart() {
  const [options, setOptions] = useState({
    chart: {
      id: "line-chart",
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Hours of Sleep",
      data: [4.4, 3.5, 5.0, 4.2, 6.8, 8.1, 8.3],
    },
  ]);
  return (
    <div className="chart">
      <Chart options={options} series={series} type="line" />
      <style jsx>{`
        .chart {
          width: 500px;
          margin: auto;
        }
      `}</style>
    </div>
  );
}
