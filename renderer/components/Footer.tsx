import { HomeIcon } from "@radix-ui/react-icons";
import TooltipCard from "./ui/TooltipCard";
import { useState } from "react";

export default function Footer() {
    const [websocket, setWebsocket] = useState<WebSocket>(null);
    const connect = () => {
      const ws = new WebSocket("ws://localhost:5000/rd");
      ws.onmessage = (event) => {
        console.log(event.data);
      }
  
      setWebsocket(ws);
    };

    const close = () => {
        if (websocket != null) {
            websocket.close();
        }
    }
    return <div className="h-full w-full bg-black flex items-center px-2">
        <button className="footer-icon" onClick={() => close()}>
            <HomeIcon />
        </button>
        <button className="footer-icon" onClick={() => connect()}>
            <HomeIcon />
        </button>
        <TooltipCard />
    </div>
}