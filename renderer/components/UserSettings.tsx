import { ChevronRightIcon } from "@radix-ui/react-icons";
import { DropdownImageButton } from "./ui/DropdownButton";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAppDispatch, useAppSelector } from "store/hook";
import { updateUser, userInfo } from "@features/userSlice";
import axios from "axios";
import {
  Portfolio,
  clearPortfolio,
  updatePortfolio,
  updateUserIdPortfolio,
} from "@features/portofolioManager";
import { User } from "interfaces/users";
import { useEffect } from "react";

export default function UserSettings() {
  const user = useAppSelector(userInfo);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData != null && userData != "") {
      const deserializedUser: User = JSON.parse(userData);
      dispatcher(updateUser(deserializedUser));
      requestPortfolioData(deserializedUser.id);
    }
  }, []);

  const requestUser = async () => {
    const result = await axios.get("http://192.168.0.14:5000/user/random");
    const userData: User = result.data;
    dispatcher(updateUser(userData));
    dispatcher(updateUserIdPortfolio(userData.id));
    localStorage.setItem("user", JSON.stringify(userData));
    await requestPortfolioData(userData.id);
  };

  const disconnectUser = () => {
    dispatcher(updateUser(null));
    localStorage.removeItem("user");
    dispatcher(clearPortfolio());
  };

  const requestPortfolioData = async (userId: string) => {
    const result = await axios.get(
      `http://192.168.0.14:5000/users/${userId}/portfolio`
    );
    const portfolios: Portfolio[] = result.data;
    portfolios.forEach((x) => dispatcher(updatePortfolio(x)));
  };

  return (
    <DropdownImageButton image={user?.userIcon}>
      <DropdownMenu.Content
        className="min-w-[220px]
         bg-white rounded-md 
         p-[5px] 
         shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
      >
        {user == null || user.id == "" ? (
          <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <button
              className="flex justify-end w-full cursor-pointer
            hover:border-0"
              onClick={() => requestUser()}
            >
              Connect
              <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘+T
              </div>
            </button>
          </DropdownMenu.Item>
        ) : (
          <></>
        )}

        <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
          <button
            className="flex justify-end w-full cursor-pointer
            hover:border-0"
            onClick={() => (location.href = "/")}
          >
            Home{" "}
            <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </button>
        </DropdownMenu.Item>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1">
            Tests
            <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              <ChevronRightIcon />
            </div>
          </DropdownMenu.SubTrigger>
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent
              className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={2}
              alignOffset={-5}
            >
              <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                <button
                  className="flex justify-end w-full cursor-pointer
                            hover:border-0"
                  onClick={() => (location.href = "/tests")}
                >
                  Responsive{" "}
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    ⌘+T
                  </div>
                </button>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                <button
                  className="flex justify-end w-full cursor-pointer
                            hover:border-0"
                  onClick={() => (location.href = "/components/charts")}
                >
                  Chart{" "}
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    ⌘+T
                  </div>
                </button>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>

        <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
          <button
            className="flex justify-end w-full cursor-pointer
                        hover:border-0"
            onClick={() => window.open("/about")}
          >
            Settings{" "}
            <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </button>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
          <button
            className="flex justify-end w-full cursor-pointer
            hover:border-0"
            onClick={() => (location.href = "/docs")}
          >
            Documentation{" "}
            <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </button>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
          <button
            className="flex justify-end w-full cursor-pointer
            hover:border-0"
            onClick={() => (location.href = "/about")}
          >
            About{" "}
            <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </button>
        </DropdownMenu.Item>
        {user == null || user.id == "" ? (
          <></>
        ) : (
          <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <button
              className="flex justify-end w-full cursor-pointer
            hover:border-0"
              onClick={() => disconnectUser()}
            >
              Disconnect{" "}
              <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘+T
              </div>
            </button>
          </DropdownMenu.Item>
        )}

        <DropdownMenu.Arrow className="fill-white" />
      </DropdownMenu.Content>
    </DropdownImageButton>
  );
}
