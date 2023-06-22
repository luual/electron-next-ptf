interface TimeSeries {
    time: string | number;
}

export type SerieData = TimeSeries & {
    value: number;
  };

  export type OHLC = TimeSeries & { 
    open: number;
    high: number;
    low: number;
    close: number;
  }