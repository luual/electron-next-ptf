import * as Toast from "@radix-ui/react-toast";
import { useAppSelector } from "store/hook";
import { toastInfo } from "store/features/ToastEnabler";
import { useEffect, useRef, useState } from "react";

type ToastProps = {
  message: string;
  time: number;
}

const ToastDemo = ({trigger}: {trigger: boolean}) => {
  const info = useAppSelector(toastInfo);
  const [open, setOpen] = useState(trigger);
  const [data, setData] = useState<ToastProps>();
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);
  
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    setOpen(true);
    setData({
      message: info.message,
      time: info.time
    })
    timerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 5000)
  }, [info])

  useEffect(() => {
    setOpen(trigger);
  }, [trigger])

  return (
    <div>
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
            Scheduled: Catch up
          </Toast.Title>
          <Toast.Description asChild>
            <time
              className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
              dateTime={eventDateRef.current.toISOString()}
            >
              {new Date(data?.time ?? 0).toLocaleString()}: {data?.message}
            </time>
          </Toast.Description>
          <Toast.Action
            className="[grid-area:_action]"
            asChild
            altText="Goto schedule to undo"
          >
            <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
              Undo
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
      </Toast.Provider>
    </div>
  );
};

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export default ToastDemo;
