import React, { useEffect, useState } from "react";
import "../style/sideMenu.css";

import { Divider, Menu, Switch } from "antd";
import type { MenuTheme } from "antd/es/menu";
import IconComponent from "./IconComponent";
import maps from "../data/mapPool";
import icons from "../data/iconPool";
import { iconCategory } from "../data/iconPool";
interface SideMenuProps {
  setIcon: any;
  setMarkers: any;
  setCurrentTileLayerUrl: any;
  setCurrentTileLayerAttr: any;
  currentIcon: any;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  setIcon,
  setMarkers,
  setCurrentTileLayerUrl,
  setCurrentTileLayerAttr,
  currentIcon,
}) => {
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  function selectIcon(icon: any) {
    console.log("Current Icon From Feed: ", currentIcon);
    console.log("Selected Icon: ", icon);

    if (currentIcon === icon || icon.name === "empty") {
      setIcon(undefined);
    } else {
      setIcon(icon);
    }
  }

  function clearMarkers() {
    setMarkers([]);
  }

  function changeMap(name: string) {
    let map = maps.find((m) => m.name === name);
    setCurrentTileLayerUrl(map?.url);
    setCurrentTileLayerAttr(map?.attribution);
  }

  useEffect(() => {
    console.log("Current Icon From Feed: ", currentIcon);
  }, [currentIcon]);

  return (
    <div className="container" id="sideMenu">
      <Menu
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          top: "0",
          flexDirection: "column",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme={theme}
      >
        <div className="options">
          <Switch
            onChange={changeMode}
            style={{ width: "28px", height: "22px" }}
          />{" "}
          <div>Change Mode</div>
          <Divider type="vertical" />
          <Switch onChange={changeTheme} /> <div>Change Style</div>
        </div>
        <Menu.SubMenu title="Icons">
          <Menu.SubMenu title="Symbol Icons">
            <div className="grid-container">
              {icons
                .filter((icon) => icon.category === iconCategory.Symbol)
                .map((icon) => (
                  <IconComponent
                    icon={icon}
                    selectIcon={selectIcon}
                    highlight={currentIcon?.name === icon.name}
                  />
                ))}
            </div>
          </Menu.SubMenu>
          <Menu.SubMenu title="Airforce Icons">
            <div className="grid-container">
              {icons
                .filter((icon) => icon.category === iconCategory.Hava)
                .map((icon) => (
                  <IconComponent
                    icon={icon}
                    selectIcon={selectIcon}
                    highlight={currentIcon?.name === icon.name}
                  />
                ))}
            </div>
          </Menu.SubMenu>
          <Menu.SubMenu title="Landforce Icons">
            <div className="grid-container">
              {icons
                .filter((icon) => icon.category === iconCategory.Kara)
                .map((icon) => (
                  <IconComponent
                    icon={icon}
                    selectIcon={selectIcon}
                    highlight={currentIcon?.name === icon.name}
                  />
                ))}
            </div>
          </Menu.SubMenu>
          <Menu.SubMenu title="Navy Icons">
            <div className="grid-container">
              {icons
                .filter((icon) => icon.category === iconCategory.Deniz)
                .map((icon) => (
                  <IconComponent
                    icon={icon}
                    selectIcon={selectIcon}
                    highlight={currentIcon?.name === icon.name}
                  />
                ))}
            </div>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu title="Draw Options">
          <Menu.Item>Import Draws</Menu.Item>
          <Menu.Item>Export Current Draw</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Map Options">
          <Menu.SubMenu title="Maps">
            <Menu.Item>
              <a onClick={() => changeMap("Default")}>Default</a>
            </Menu.Item>
            <Menu.Item>
              <a onClick={() => changeMap("CadastreSatellite")}>
                Cadastre Satellite
              </a>
            </Menu.Item>
            <Menu.Item>
              <a onClick={() => changeMap("StadiaLight")}>Stadia Light</a>
            </Menu.Item>
            <Menu.Item>
              <a onClick={() => changeMap("StadiaDark")}>Stadia Dark</a>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>Radars</Menu.Item>
          <Menu.Item>H</Menu.Item>
        </Menu.SubMenu>

        <Menu.Item style={{ position: "absolute", bottom: "0px", right: "0" }}>
          <a onClick={clearMarkers}>Clear All Markers</a>
        </Menu.Item>
      </Menu>
    </div>
  );
};
