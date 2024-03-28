import React, { useEffect, useState } from "react";
import "../style/sideMenu.css";

import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import type { MenuTheme } from "antd/es/menu";
import IconComponent from "./IconComponent";

interface SideMenuProps {
  setIcon: any;
  setMarkers: any;
  setCurrentTileLayerUrl: any;
  setCurrentTileLayerAttr: any;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  setIcon,
  setMarkers,
  setCurrentTileLayerUrl,
  setCurrentTileLayerAttr,
}) => {
  const maps = [
    {
      name: "Default",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="https://www.youtube.com/@historylegends">@History Legends</a>',
    },
    {
      name: "GoogleMaps",
      url: "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
      attribution: null,
    },
    {
      name: "StadiaLight",
      url: "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
    {
      name: "StadiaDark",
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
    {
      name: "CadastreSatellite",
      url: "https://api.maptiler.com/maps/cadastre-satellite/256/{z}/{x}/{y}.png?key=UGpYs28p7lHHzFYxJeRn",
      attribution:
        "https://api.maptiler.com/maps/cadastre-satellite/256/tiles.json?key=UGpYs28p7lHHzFYxJeRn",
    },
  ];

  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");

  // const [markerRemoveState, setMarkerRemoveState] = useState<boolean>(false);
  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  function selectIcon(icon: any) {
    setIcon(icon);
  }

  function clearMarkers() {
    setMarkers([]);
  }

  function changeMap(name: string) {
    let map = maps.find((m) => m.name === name);
    setCurrentTileLayerUrl(map?.url);
    setCurrentTileLayerAttr(map?.attribution);
  }

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
        // items={items}
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
              <IconComponent iconName="empty" selectIcon={selectIcon} />
              <IconComponent iconName="torpedo" selectIcon={selectIcon} />
              <IconComponent iconName="missile" selectIcon={selectIcon} />
              <IconComponent iconName="pistol" selectIcon={selectIcon} />
              <IconComponent iconName="sniper" selectIcon={selectIcon} />
              <IconComponent iconName="soldier" selectIcon={selectIcon} />
              <IconComponent iconName="warningRed" selectIcon={selectIcon} />
              <IconComponent iconName="warningBlack" selectIcon={selectIcon} />
              <IconComponent iconName="skullAndBones" selectIcon={selectIcon} />
            </div>
          </Menu.SubMenu>
          <Menu.SubMenu title="Airforce Icons">
            <div className="grid-container">
              <IconComponent iconName="jetFighter" selectIcon={selectIcon} />
              <IconComponent iconName="torpedo" selectIcon={selectIcon} />
              <IconComponent iconName="missile" selectIcon={selectIcon} />
              <IconComponent iconName="pistol" selectIcon={selectIcon} />
              <IconComponent iconName="sniper" selectIcon={selectIcon} />
              <IconComponent iconName="soldier" selectIcon={selectIcon} />
              <IconComponent iconName="warningRed" selectIcon={selectIcon} />
              <IconComponent iconName="warningBlack" selectIcon={selectIcon} />
              <IconComponent iconName="skullAndBones" selectIcon={selectIcon} />
            </div>
          </Menu.SubMenu>
          <Menu.SubMenu title="Landforce Icons">
            <div className="grid-container">
              <IconComponent iconName="jetFighter" selectIcon={selectIcon} />
              <IconComponent iconName="torpedo" selectIcon={selectIcon} />
              <IconComponent iconName="missile" selectIcon={selectIcon} />
              <IconComponent iconName="pistol" selectIcon={selectIcon} />
              <IconComponent iconName="sniper" selectIcon={selectIcon} />
              <IconComponent iconName="soldier" selectIcon={selectIcon} />
              <IconComponent iconName="warningRed" selectIcon={selectIcon} />
              <IconComponent iconName="warningBlack" selectIcon={selectIcon} />
              <IconComponent iconName="skullAndBones" selectIcon={selectIcon} />
              <IconComponent iconName="warningRed" selectIcon={selectIcon} />
              <IconComponent iconName="warningBlack" selectIcon={selectIcon} />
              <IconComponent iconName="skullAndBones" selectIcon={selectIcon} />
              <IconComponent iconName="warningRed" selectIcon={selectIcon} />
              <IconComponent iconName="warningBlack" selectIcon={selectIcon} />
              <IconComponent iconName="skullAndBones" selectIcon={selectIcon} />
            </div>
          </Menu.SubMenu>
          <Menu.SubMenu title="Navy Icons">
            <div className="grid-container">
              <IconComponent iconName="jetFighter" selectIcon={selectIcon} />
              <IconComponent iconName="torpedo" selectIcon={selectIcon} />
              <IconComponent iconName="missile" selectIcon={selectIcon} />
              <IconComponent iconName="pistol" selectIcon={selectIcon} />
              <IconComponent iconName="sniper" selectIcon={selectIcon} />
              <IconComponent iconName="soldier" selectIcon={selectIcon} />
              <IconComponent iconName="warningRed" selectIcon={selectIcon} />
              <IconComponent iconName="warningBlack" selectIcon={selectIcon} />
              <IconComponent iconName="skullAndBones" selectIcon={selectIcon} />
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

        <Menu.Item style={{ position: "absolute", bottom: "50px", right: "0" }}>
          <a onClick={clearMarkers}>Clear All Markers</a>
        </Menu.Item>

        <Menu.Item style={{ position: "absolute", bottom: "0", right: "0" }}>
          <a
            href="https://www.linkedin.com/in/erdem-kepenek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codezy Web
          </a>
          , "link",
          <LinkOutlined />
        </Menu.Item>
      </Menu>
    </div>
  );
};
