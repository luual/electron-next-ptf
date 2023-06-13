import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

type PerformanceWidgetProps = {
  title: string;
  percentage: number;
  name: string;
  value: number;
  currency: string;
};

const PositiveNegativeIcon = (value: number): ReactNode => {
  if (value == 0) return <div></div>;
  return value < 0 ? (
    <ArrowDownIcon className="text-red-700" />
  ) : (
    <ArrowUpIcon className="text-green-700" />
  );
};

export const PerformanceWidget = (props: PerformanceWidgetProps) => {
  return (
    <div className="grid content-between bg-[#D9D9D9] border-2 border-black rounded-[4px] h-[74px] p-1 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="title">{props.title}</div>
        <div className="flex items-center">
          {PositiveNegativeIcon(props.percentage)}
          <span>{props.percentage}</span>
        </div>
      </div>
      <div className="flex justify-between ">
        <span>{props.name}</span>
        <span>
          {props.value}
          {props.currency}
        </span>
      </div>
    </div>
  );
};
