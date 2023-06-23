function OptionCalculator() {
  return (
    <div>
      <form className="flex gap-2 h-[30px]">
        <input
          className="bg-blackA5 shadow-blackA9 inline-flex w-[150px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
          type="number"
          defaultValue="0"
        />
        <input
          className="bg-blackA5 shadow-blackA9 inline-flex w-[150px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
          type="number"
          defaultValue="0"
        />
        <input
          className="bg-blackA5 shadow-blackA9 inline-flex w-[150px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
          type="number"
          defaultValue="0"
        />
        <input
          className="bg-blackA5 shadow-blackA9 inline-flex w-[150px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
          type="number"
          defaultValue="0"
        />
      </form>
      
    </div>
  );
}

export default function OptionsWidget() {
  return (
    <div>
      <div className="flex gap-2">
        <span>Vol: 12.2%</span>
        <span>Delta: 2.8%</span>
        <span>Gamma: 4.5%</span>
        <span>Vega: 1.7%</span>
      </div>
      <div>
        <OptionCalculator />
        <OptionCalculator />
        <OptionCalculator />
        <OptionCalculator />
      </div>
    </div>
  );
}
