import { HomeIcon } from "@radix-ui/react-icons";
import TooltipCard from "./ui/TooltipCard";
import { BuildingLibrary } from "assets/Icons";
import { sendToast } from "@features/ToastEnabler";


export default function Footer() {
  const sendToastMessage = () => {
    console.log("send toast")
    sendToast({
      message: "test",
      status: "OK",
      enable: true,
      time: 3
    })
  }
  return (
    <div className="h-full w-full bg-black flex items-center justify-between px-2">
      <div>
        <button className="footer-icon" onClick={() => location.href = '/'}>
          <HomeIcon />
        </button>
        <button className="footer-icon" onClick={() => location.href = '/stocks'}>
          <HomeIcon />
        </button>
        <button className="footer-icon" onClick={() => location.href = '/transactions'}>
          <BuildingLibrary />
        </button>
        {/* <button className="footer-icon" onClick={sendToastMessage}>
          <TooltipCard />
        </button> */}
      </div>
      <div className="text-white">
        <span className="animate-slideLeft">Italian oil major Eni buys Neptune Energy for $4.9bn</span>
      </div>
      <div></div>
    </div>
  );
}
