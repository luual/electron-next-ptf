import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { ReactNode, useState } from "react";
import { Avatars } from "./Avatar";

type DropdownMenuProps = {
  image: string;
  children: ReactNode;
};

export const DropdownImageButton = ({ image, children }: DropdownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] 
          inline-flex items-center justify-center
          text-violet11 bg-white shadow-[0_2px_10px] 
          shadow-blackA7 outline-none
          focus:shadow-[0_0_0_2px] 
          focus:shadow-black"
          aria-label="Customise options"
        >
          <Avatars
          className="hover:border-0"
            users={[
              {
                iconUrl: `${image}`,
                name: "tom",
              },
            ]}
          />{" "}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>{children}</DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};