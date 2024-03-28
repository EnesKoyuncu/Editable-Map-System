import React from "react";
import icons from "../data/iconPool";

interface IconProps {
  iconName: string;
  selectIcon: any;
  iconPath?: string;
  iconCategory?: string;
}

const IconComponent: React.FC<IconProps> = ({ iconName, selectIcon }) => {
  const icon = icons.find((icon) => icon.name === iconName);

  if (!icon) {
    console.log("Icon not found");
    return <div>Error</div>;
  }

  return (
    <div
      className="grid-item"
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
