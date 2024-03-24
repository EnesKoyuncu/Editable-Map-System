import React from "react";
import icons from "../temp/iconPool";
import { MainContext } from "../context";

interface IconProps {
  iconName: string;
  iconPath?: string;
  iconCategory?: string;
}

const IconComponent: React.FC<IconProps> = ({ iconName }) => {
  const icon = icons.find((icon) => icon.name === iconName);
  const deneme1: string = "deneme1";
  const data = {
    icons,
    deneme1,
  };

  // console.log("icon comp içi icons datası", icons);
  if (!icon) {
    console.log("Icon not found");
    return <div>Error</div>;
  }

  return (
    <MainContext.Provider value={data}>
      <img
        src={icon.path}
        alt={icon.name}
        // className={icon.category}
        style={{ maxHeight: "34px", maxWidth: "34px" }}
      />
    </MainContext.Provider>
  );
};

export default IconComponent;
