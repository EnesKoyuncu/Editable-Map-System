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
import type { MenuProps, MenuTheme } from "antd/es/menu";
import IconComponent from "./IconComponent";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: ""
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

interface SideMenuProps {
  setIcon: any;
  setMarkers: any;
}

export const SideMenu: React.FC<SideMenuProps> = ({ setIcon, setMarkers }) => {
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
          <Menu.Item>Maps</Menu.Item>
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
