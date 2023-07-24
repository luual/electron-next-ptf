import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import React from "react";
import { Stock } from "interfaces/Tickers";
import { updateStock } from "@features/StockSlice";
import { useAppDispatch } from "store/hook";

type SearchBarProps = {
  stocks: Stock[];
};

export const SearchBar = ({ stocks }: SearchBarProps) => {
  const dispatch = useAppDispatch();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <input
          className="mx-4 bg-blackA5
          shadow-blackA9 
            inline-flex h-[35px]
            min-w-[75px] 
            max-w-[200px] 
            appearance-none 
            items-center justify-center 
            rounded-[4px] px-[10px] text-[15px] 
            leading-none text-white shadow-[0_0_0_1px] 
            outline-none focus:shadow-[0_0_0_2px_black] 
            selection:color-white selection:bg-blackA9"
          type="text"
          defaultValue="Search... (Ctrl + K)"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0">
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[40vh] w-[90vw] max-w-[55vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <div className="grid grid-cols-3">
              <div>asdasdasdas</div>
              <div className="col-span-2">
                <input
                  type="text"
                  className="border h-[2rem] w-full rounded-sm"
                  defaultValue="Search ..."
                />
                <div>
                  <div className="overflow-y-auto flex-auto h-[calc(40vh-2rem-30px)] py-2">
                    <ul>
                      {stocks?.map((item) => (
                        <li
                          key={item._id}
                          className="border border-purple-300 rounded-[4px] my-1 hover:bg-slate-200"
                        >
                          <button
                            className="w-full"
                            onClick={() => dispatch(updateStock(item))}
                          >
                            <div className="flex justify-between font-medium text-xs">
                              <div>{item.symbol}</div>
                              <div>{item.mic}</div>
                            </div>
                            <div className="font-normal">
                              {item.description}
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
