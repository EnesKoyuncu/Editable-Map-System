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
}

export const SideMenu: React.FC<SideMenuProps> = ({ setIcon }) => {
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  function selectIcon(icon: any) {
    setIcon(icon);
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
        <Menu.SubMenu title="Draw">
          <Menu.Item>Draw Line</Menu.Item>
          <Menu.Item>Draw Polygon</Menu.Item>
          <Menu.Item>Draw Circle</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Map Options">
          <Menu.Item>Draw Line</Menu.Item>
          <Menu.Item>Draw Polygon</Menu.Item>
          <Menu.Item>Draw Circle</Menu.Item>
        </Menu.SubMenu>
        {/* </Menu>
      <Menu> */}
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
