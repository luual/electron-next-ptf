import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

type User = {
  iconUrl: string;
  name: string;
};

type Props = {
  users: User[];
  className: any;
};

const AvatarDemo = () => (
  <div style={{ display: "flex", gap: 20 }}>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        JD
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1685998766301-60ab1e051b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt="Fox"
      />
      <Avatar.Fallback className="AvatarFallback">PD</Avatar.Fallback>
    </Avatar.Root>
  </div>
);

const data = [
  {
    iconUrl:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    name: "tom",
  },
];

export function Avatars({ users, className }: Props) {
  return (
    <div>
      {users?.map((user, key) => (
        <Avatar.Root key={key} className="AvatarRoot">
          <Avatar.Image
            className={`AvatarImage ${className}`}
            src={user.iconUrl}
            alt={user.name}
          />
          <Avatar.AvatarFallback className="AvatarFallback">
            {user.name}
          </Avatar.AvatarFallback>
        </Avatar.Root>
      ))}
    </div>
  );
}

export default AvatarDemo;
