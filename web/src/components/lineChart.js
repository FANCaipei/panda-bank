import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const CustomLineChart = () => {
  const [chartOption, setChartOption] = useState();

  useEffect(() => {
    const option = {
      grid: {
        top: 30,
        right: 30,
        bottom: 0,
        left: 20,
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: "#000000A5",
        confine: "true",
        borderWidth: 0,
        borderColor: "transparent",
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
        formatter: (params) => {
          const circleStyle =
            "display: inline-block; margin-right: 3px; width: 8px; height: 8px; border-radius: 100%; border: 2px solid #2396F3;";
          const domStr =
            params.map((p) => {
              return `<span><i style="${circleStyle}"></i>${p.data[0]}：${p.data[1]}</span>`;
            }) ?? [];
          return domStr.join(" ");
        },
      },
      xAxis: {
        type: "time",
        // boundaryGap: ["20%", "20%"],
        axisLine: {
          lineStyle: {
            color: "#C8CACE",
          },
        },
        axisTick: {
          lineStyle: {
            color: "#C8CACE",
          },
        },
        axisLabel: {
          color: "#797A7D",
          fontSize: 12,
          showMinLabel: true,
          showMaxLabel: true,
          // formatter: function (value) {
          //     const displayValue = timeDisplay(sliceNum, value);
          //     console.log(displayValue);
          //     console.log(
          //         "includes: ",
          //         displayedLabel.includes(displayValue)
          //     );
          //     if (displayedLabel.includes(displayValue)) {
          //         return "-";
          //     } else {
          //         displayedLabel.push(displayValue);
          //         console.log("show: ", displayValue);
          //         return displayValue;
          //     }
          // },
          formatter: {
            second: "{HH}:{mm}",
            millisecond: "{hh}:{mm}",
          },
        },
      },
      yAxis: {
        type: "value",
        nameTextStyle: {
          color: "#A9AAAE",
          fontSize: 12,
        },
        splitLine: {
          lineStyle: {
            color: "#F3F5F8",
          },
        },
        axisLabel: {
          color: "#797A7D",
          fontSize: 12,
        },
      },
      series: [
        {
          type: "line",
          name: "Example",
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 2,
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(45, 150, 235, 0.2)",
                },
                {
                  offset: 1,
                  color: "rgba(92, 172, 240, 0)",
                },
              ],
              global: false,
            },
          },
          emphasis: {},
          data: [],
        },
      ],
    };

    const seriesData = [
      [1711329180000, 31],
      [1711329240000, 43],
      [1711329300000, 31],
      [1711329360000, 31],
      [1711329420000, 103],
    ];

    option.series[0].data = seriesData;

    setChartOption(option);
    console.log("... chart option: ", option);
  }, []);

  return (
    <div>
      <div>Line Chart</div>
      {chartOption != null ? <ReactECharts option={chartOption} /> : null}
    </div>
  );
};

export default CustomLineChart;
