import { LinkNone1Icon } from "@radix-ui/react-icons";

const ELEMENTS = [
  {
    name: "Air Liquid",
    value: 213.2,
  },
  {
    name: "Total",
    value: 92.2,
  },
  {
    name: "CA",
    value: 213.2,
  },
  {
    name: "Ford",
    value: 213.2,
  },
  {
    name: "Ford",
    value: 213.2,
  },
  {
    name: "Ford",
    value: 213.2,
  },
  {
    name: "Ford",
    value: 213.2,
  },
  {
    name: "Ford",
    value: 213.2,
  },
];

type PortfolioItemProps = {
  name: string;
  value: number;
};

function PortfolioDetailsItem({ item }: { item: PortfolioItemProps }) {
  return (
    <div
      className="
      flex
      justify-between
      text-mauve12 text-[13px] 
      leading-[18px] 
      mt-2.5 pt-2.5 
      border-t 
    border-t-mauve6"
      key={item.name}
    >
      <LinkNone1Icon />
      <div>{item.name}</div>
      <span>{item.value}</span>
    </div>
  );
}

export function PortfolioDetailsGenerator() {
  return (
    <div>
      {ELEMENTS.map((tag: PortfolioItemProps, i) => (
        <PortfolioDetailsItem key={i} item={tag} />
      ))}
    </div>
  );
}
