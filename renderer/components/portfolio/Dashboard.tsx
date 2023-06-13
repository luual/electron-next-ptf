import { PerformanceWidget } from "components/widgets/PerformanceWidget";

export default function Dashboard() {
  return (
    <div className="mt-8 h-[80vh]">
      <div className="grid gap-2 grid-cols-4">
        <PerformanceWidget
          title="Best Performance"
          percentage={12.34}
          currency="$"
          name="Netflix"
          value={432.19}
        />
        <PerformanceWidget
          title="Worst Performance"
          percentage={-12.34}
          currency="$"
          name="Meta"
          value={272.23}
        />
        <PerformanceWidget
          title="Title"
          percentage={12.34}
          currency="$"
          name="Apple"
          value={183.08}
        />
        <PerformanceWidget
          title="Portfolio"
          percentage={12.34}
          currency="$"
          name="Value"
          value={432.19}
        />
      </div>
    </div>
  );
}
