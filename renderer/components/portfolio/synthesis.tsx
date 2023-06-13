type Synthesis = {
  id: number;
  name: string;
};


const PortfolioElement = () => {
    return <div className="flex justify-between">
        <div>Name 1</div>
        <div>$123</div>
    </div>
}

export default function PortfolioSynthesis() {
  return (
    <div className="px-2 bg-slate-700 border rounded-md">
      <div>
        <h2>Portfolio #1</h2>
      </div>
      <div>
        <PortfolioElement />
        <PortfolioElement />
        <PortfolioElement />
        <PortfolioElement />
        <PortfolioElement />
      </div>
    </div>
  );
}
