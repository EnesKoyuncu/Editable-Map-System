import React, { useEffect, useState } from "react";
import "../style/sideMenu.css";
import { Divider, Menu, Switch } from "antd";
import type { MenuTheme } from "antd/es/menu";
import maps from "../data/mapPool";
import { iconCategory } from "../data/iconPool";
import { IconContainerComponent } from "./IconContainerComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import {
  faSun,
  faPencil,
  faMap,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

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
  const [sideMenuDesign, setSideMenuDesign] = useState<boolean>(false);
  const [iconSubMenuTitle, setIconSubMenuTitle] = useState<any>("Icons");
  const [drawSubMenuTitle, setDrawSubMenuTitle] = useState<any>("Draw Options");
  const [mapsSubMenuTitle, setMapsSubMenuTitle] = useState<any>("Maps");
  const [clearMarkerBtnState, setClearMarkerBtnState] =
    useState<any>("Clear All Markers");

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
    setSideMenuDesign(value ? true : false);
    console.log("SideMenuDesign: ", sideMenuDesign);
    console.log("Mode: ", mode);
  };

  useEffect(() => {
    if (sideMenuDesign) {
      if (theme === "light") {
        setIconSubMenuTitle(
          <FontAwesomeIcon icon={faSun} className="fontAwesomeIcons" />
        );
        setDrawSubMenuTitle(
          <FontAwesomeIcon icon={faPencil} className="fontAwesomeIcons" />
        );
        setMapsSubMenuTitle(
          <FontAwesomeIcon icon={faMap} className="fontAwesomeIcons" />
        );
        setClearMarkerBtnState(
          <FontAwesomeIcon
            icon={faTrash}
            style={{ width: "20px", height: "22px", marginBottom: "-4px" }}
          />
        );
      } else {
        setIconSubMenuTitle(
          <FontAwesomeIcon
            icon={faSun}
            color="light"
            className="fontAwesomeIcons"
          />
        );
        setDrawSubMenuTitle(
          <FontAwesomeIcon
            icon={faPencil}
            color="light"
            className="fontAwesomeIcons"
          />
        );
        setMapsSubMenuTitle(
          <FontAwesomeIcon
            icon={faMap}
            color="light"
            className="fontAwesomeIcons"
          />
        );
        setClearMarkerBtnState(
          <FontAwesomeIcon
            icon={faTrash}
            style={{ width: "20px", height: "22px", marginBottom: "-4px" }}
            color="light"
          />
        );
      }
    } else {
      setIconSubMenuTitle("Icons");
      setDrawSubMenuTitle("Draw Options");
      setMapsSubMenuTitle("Maps");
      setClearMarkerBtnState("Clear All Markers");
    }
  }, [sideMenuDesign]);

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  function selectIcon(icon: any) {
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

  return (
    <div className={clsx("container", mode == "vertical" && "sideMenuDesign")}>
      <Menu
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          top: "0",
          flexDirection: "column",
        }}
        mode={mode}
        theme={theme}
        expandIcon={mode == "vertical" ? <></> : undefined}
      >
        <div className={clsx("options", mode == "vertical" && "optionsDesign")}>
          <Switch
            onChange={changeMode}
            style={{ width: "28px", height: "22px" }}
          />{" "}
          <div>Mode</div>
          <Divider type="vertical" />
          <Switch onChange={changeTheme} /> <div>Style</div>
        </div>
        <Menu.SubMenu title={iconSubMenuTitle}>
          <Menu.SubMenu title="Symbol">
            <IconContainerComponent
              categoryName={iconCategory.Symbol}
              selectIcon={selectIcon}
              currentIcon={currentIcon}
            />
          </Menu.SubMenu>

          <Menu.SubMenu title="Hava">
            <IconContainerComponent
              categoryName={iconCategory.Hava}
              selectIcon={selectIcon}
              currentIcon={currentIcon}
            />
          </Menu.SubMenu>

          <Menu.SubMenu title="Kara">
            <IconContainerComponent
              categoryName={iconCategory.Kara}
              selectIcon={selectIcon}
              currentIcon={currentIcon}
            />
          </Menu.SubMenu>

          <Menu.SubMenu title="Deniz">
            <IconContainerComponent
              categoryName={iconCategory.Deniz}
              selectIcon={selectIcon}
              currentIcon={currentIcon}
            />
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu title={drawSubMenuTitle}>
          <Menu.Item>Import Draws</Menu.Item>
          <Menu.Item>Export Current Draw</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={mapsSubMenuTitle}>
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
        <Menu.Item className="clearSingleMarker">Clear Single Marker</Menu.Item>
        <Menu.Item className="clearMarkerBtn">
          <div onClick={clearMarkers} id="clearMarkers">
            {clearMarkerBtnState}
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};
