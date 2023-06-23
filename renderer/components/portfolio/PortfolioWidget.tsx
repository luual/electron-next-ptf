import * as Tabs from "@radix-ui/react-tabs";
import OptionsWidget from "components/widgets/Options";
import React, { useState } from "react";
import { selectCount } from "store/features/slices";
import { sendToast } from "store/features/ToastEnabler";
import { useAppDispatch, useAppSelector } from "store/hook";

/**
 * TODO: Rename
 * @returns
 */
export function PortfolioWidget() {
  const count = useAppSelector(selectCount);
  const dispatcher = useAppDispatch();

  const triggerMessage = () => {
    dispatcher(sendToast({
      enable: true,
      message: 'trigger by dashboard ',
      status: "OK",
      time: new Date().getTime()
    }))
  }
  return (
    <div>
      <Tabs.Root defaultValue="options">
        <Tabs.List className="border-b-2">
          <Tabs.Trigger
            className="w-[120px] text-center px-2
            hover:text-teal-50
            rounded-tl-[4px]
            data-[state=active]:bg-red-400"
            value="options"
          >
            <div>Options</div>
          </Tabs.Trigger>
          <Tabs.Trigger
            className="w-[120px] text-center px-2
            hover:text-teal-50
            data-[state=active]:bg-red-400"
            value="RFQ"
          >
            <div>RFQ</div>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="options" className="p-2">
          <OptionsWidget />
        </Tabs.Content>
        <Tabs.Content value="RFQ">
          <button onClick={() => triggerMessage()}>Trigger Toast</button>
          <div>count: {count}</div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

