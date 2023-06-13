import * as Popover from '@radix-ui/react-popover';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
}

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent">
        Some content
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export const PopoverButton = ({children, title} : Props) => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">{title}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent">
        { children }
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
