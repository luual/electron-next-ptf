import { LinkNone1Icon } from "@radix-ui/react-icons";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ReactNode } from "react";

type ContainerProps = {
  title: string;
  children: ReactNode;
};

export default function PortfolioContainer(props: ContainerProps) {
  return (
    <div>
      <ScrollArea.Root className="w-[200px] h-[270px] rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA7 bg-white">
        <ScrollArea.Viewport className="w-full h-full rounded">
          <div className="py-[15px] px-5">
            <div className="title">{props.title}</div>
            {props.children}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>

        <ScrollArea.Corner className="bg-blackA8" />
      </ScrollArea.Root>
    </div>
  );
}