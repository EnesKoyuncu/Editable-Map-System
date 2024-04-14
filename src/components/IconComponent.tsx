import React from "react";
import { Avatar } from "antd";
interface IconComponentProps {
  icon: any;
  selectIcon: any;
  highlight?: boolean;
}

const IconComponent: React.FC<IconComponentProps> = ({
  selectIcon,
  highlight,
  icon,
}) => {
  return (
    <Avatar
      shape="square"
      size={60}
      icon={icon}
      onClick={() => {
        selectIcon(icon);
      }}
      src={icon.path}
      className={`grid-item ${highlight ? "active" : ""}`}
    />
  );
};

export default IconComponent;
