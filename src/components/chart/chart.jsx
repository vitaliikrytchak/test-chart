import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import jsonData from "../../data.json";
import "./chart.scss";

const data = jsonData
  .map((item) => {
    return Object.values(item);
  })
  .map((el) => [el[0].replaceAll("/", "."), el[1]]);

const Chart = () => {
  const options = {
    chart: {
      width: 800,
      height: 550,
      zoomType: 'x'
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "Patients 2022",
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -90,
      },
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    legend: {
      enabled: false,
    },
    colors: ["#4d4db4"],
    plotOptions: {
      area: {
        lineWidth: 1,
        states: {
          hover: {},
        },
        threshold: null,
      },
      series: {
        marker: {
          enabled: false
        }
      }
    },

    series: [
      {
        name: "value",
        data: data,
      },
    ],
  };

  return (
    <div className="chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
