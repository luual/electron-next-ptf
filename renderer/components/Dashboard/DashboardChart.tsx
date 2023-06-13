import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    d: new Date(2023, 0, 1).toISOString(),
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    d: new Date(2023, 0, 2).toISOString(),
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    d: new Date(2023, 0, 3).toISOString(),
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    d: new Date(2023, 0, 4).toISOString(),
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    d: new Date(2023, 0, 5).toISOString(),
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    d: new Date(2023, 0, 6).toISOString(),
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    d: new Date(2023, 0, 7).toISOString(),
  },
];

export default function DashboardChart() {
  const [dataset, setDataset] = useState(data);  
  return (
    <div>
      <div
        className="border-2 border-white rounded-[4px] p-1
      h-[60vh]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={600} height={300} data={dataset}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="pv" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
