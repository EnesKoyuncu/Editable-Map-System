import React, { useState } from "react";

interface IconProps {
  icon: any;
  selectIcon: any;
  highlight?: boolean;
}

const IconComponent: React.FC<IconProps> = ({
  selectIcon,
  highlight,
  icon,
}) => {
  return (
    <div
      className={`grid-item ${highlight ? "active" : ""}`}
      onClick={() => {
        selectIcon(icon);
      }}
    >
      <img
        src={icon.path}
        alt={icon.name}
        style={{ maxHeight: "34px", maxWidth: "34px" }}
      />
    </div>
  );
};

export default IconComponent;
