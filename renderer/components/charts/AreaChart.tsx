import { useEffect, useRef } from "react";
import { createChart, ColorType } from 'lightweight-charts';

export const AreaChart = (props) => {
    const {
      data,
      colors: {
        backgroundColor = "white",
        lineColor = "#2962FF",
        textColor = "black",
        areaTopColor = "#2962FF",
        areaBottomColor = "rgba(41, 98, 255, 0.28)",
      } = {},
    } = props;
  
    const chartContainerRef = useRef(null);
  
    useEffect(() => {
      const handleResize = () => {
        chart.applyOptions({
          //@ts-ignore
          width: chartContainerRef.current.clientWidth,
          autoSize: true,
        });
      };
  
      //@ts-ignore
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },
        //@ts-ignore
        width: chartContainerRef.current.clientWidth,
        //@ts-ignore
        height: 0,
      });
      chart.timeScale().fitContent();
  
      const newSeries = chart.addAreaSeries({
        lineColor,
        topColor: areaTopColor,
        bottomColor: areaBottomColor,
      });
      newSeries.setData(data);
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
  
        chart.remove();
      };
    }, [
      data,
      backgroundColor,
      lineColor,
      textColor,
      areaTopColor,
      areaBottomColor,
    ]);
  
    return <div {...props} ref={chartContainerRef} />;
  };

  export default AreaChart;