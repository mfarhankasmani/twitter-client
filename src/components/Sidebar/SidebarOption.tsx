import React from "react";
import "./SidebarOption.css";

interface ISidebarOption {
  text: string;
  Icon: React.FunctionComponent;
  onClick?: any;
  active?: boolean;
}

const SidebarOption: React.FunctionComponent<ISidebarOption> = ({
  text,
  Icon,
  onClick,
  active,
}) => {
  return (
    <div
      id={text}
      className={`sidebarOption ${active && "sidebarOption--active"}`}
      onClick={onClick}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
