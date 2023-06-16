import { TickerData } from "interfaces/Tickers";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardChart({
  dataset,
  ticker,
}: {
  dataset: TickerData[];
  ticker: string;
}) {
  return (
    <div className="min-h-0">
      <div className="border-2 border-white rounded-[4px] p-1">
        <ResponsiveContainer width="100%" height="100%">
          <div>
            <div className="mx-4 my-1 flex gap-2 justify-between content-center">
              <span className="text-white text-lg font-medium">{ticker}</span>
              <div>
                <div className="flex gap-2 text-white">
                  <span>Open: 13$</span>
                  <span>Close: 1$</span>
                  <span>High: 3$</span>
                  <span>Low: 34$</span>

                </div>
              </div>
            </div>
            <LineChart width={800} height={400} data={dataset}>
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
