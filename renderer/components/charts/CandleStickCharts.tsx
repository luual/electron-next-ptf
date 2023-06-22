import { useEffect, useRef } from "react";
import { createChart, ColorType } from 'lightweight-charts';

export const CandlestickChart = (props) => {
    const {
      data,
      colors: {
        backgroundColor = "white",
        textColor = "black",
        upColor = "#26a69a",
        downColor = "#ef5350",
        wickUpColor = "#26a69a",
        wickDownColor = "#ef5350"
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
  
      const newSeries = chart.addCandlestickSeries({
        upColor: upColor,
        downColor: downColor,
        wickDownColor: wickDownColor,
        wickUpColor: wickUpColor
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
      textColor,
    ]);
  
    return <div {...props} ref={chartContainerRef} />;
  };

  export default CandlestickChart;