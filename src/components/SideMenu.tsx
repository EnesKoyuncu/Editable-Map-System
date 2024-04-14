import React, { useEffect, useState } from "react";
import "../style/sideMenu.css";
import { Menu, Switch } from "antd";
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

import { Space } from "antd";

interface SideMenuProps {
  setIcon: any;
  setMarkers: any;
  setCurrentTileLayerUrl: any;
  setCurrentTileLayerAttr: any;
  currentIcon: any;
  setClearSingleMarker: any;
  // screenWidth: number;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  setIcon,
  setMarkers,
  setCurrentTileLayerUrl,
  setCurrentTileLayerAttr,
  currentIcon,
  setClearSingleMarker,
  // screenWidth,
}) => {
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");
  const [sideMenuDesign, setSideMenuDesign] = useState<boolean>(false);
  const [iconSubMenuTitle, setIconSubMenuTitle] = useState<any>("Icons");
  const [drawSubMenuTitle, setDrawSubMenuTitle] = useState<any>("Draw Options");
  const [mapsSubMenuTitle, setMapsSubMenuTitle] = useState<any>("Maps");
  const [clearMarkerBtnState, setClearMarkerBtnState] =
    useState<any>("Clear All Markers");

  const [clearSingleMarkerMode, setClearSingleMarkerMode] =
    useState<boolean>(false);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  // const [screenAutoChange, setScreenAutoChange] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // * SideMenu Mode Değişikliği
  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
    setSideMenuDesign(value ? true : false);
    setIsChecked(value);
  };

  // useEffect(() => {
  //   if (screenWidth <= 1025) {
  //     setScreenAutoChange(true);
  //   } else {
  //     setScreenAutoChange(false);
  //   }
  // }, [screenWidth]);

  // useEffect(() => {
  //   if (isChecked === false) {
  //     if (screenAutoChange) {
  //       console.log("küçük ekran");
  //       setMode("vertical");
  //       setSideMenuDesign(true);
  //       setIsChecked(true);
  //     } else {
  //       console.log("büyük ekran");
  //       setMode("inline");
  //       setSideMenuDesign(false);
  //       setIsChecked(false);
  //     }
  //   }
  // }, [screenAutoChange]);

  // * Ekran genişliğini dinle ve güncelle
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      console.log("screenWidth: ", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // * Ekran genişliğine göre yan menü modunu değiştir
  useEffect(() => {
    changeMode(screenWidth <= 1025);
  }, [screenWidth]);

  // * SideMenu Mode Değişikliği
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

  // * Tema Değiştirme
  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  // * İkon Seçme
  function selectIcon(icon: any) {
    if (clearSingleMarkerMode) {
      alert("Please turn off clear single marker mode to add new markers.");
    } else {
      if (currentIcon === icon || icon.name === "empty") {
        setIcon(undefined);
      } else {
        setIcon(icon);
      }
    }
  }

  // * Tek Markerı Temizleme
  const clearSingleMarkersMode = () => {
    setClearSingleMarkerMode(!clearSingleMarkerMode);
    setClearSingleMarker(!clearSingleMarkerMode);
  };

  // * Markersı Temizleme
  function clearMarkers() {
    setMarkers([]);
  }

  // * Map Değiştirme
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
            checked={isChecked}
          />{" "}
          <div>Mode</div>
          <Switch onChange={changeTheme} /> <div>Style</div>
          {/* <Switch onChange={clearSingleMarkersMode} /> <div>Clear</div> */}
        </div>

        <Menu.SubMenu title={iconSubMenuTitle}>
          <Menu.SubMenu title="Symbol">
            <Space direction="vertical" size={64}>
              <IconContainerComponent
                categoryName={iconCategory.Symbol}
                selectIcon={selectIcon}
                currentIcon={currentIcon}
              />
            </Space>
          </Menu.SubMenu>

          <Menu.SubMenu title="Hava">
            <Space direction="vertical" size={64}>
              <IconContainerComponent
                categoryName={iconCategory.Hava}
                selectIcon={selectIcon}
                currentIcon={currentIcon}
              />
            </Space>
          </Menu.SubMenu>

          <Menu.SubMenu title="Kara">
            <Space direction="vertical" size={64}>
              <IconContainerComponent
                categoryName={iconCategory.Kara}
                selectIcon={selectIcon}
                currentIcon={currentIcon}
              />
            </Space>
          </Menu.SubMenu>

          <Menu.SubMenu title="Deniz">
            <Space direction="vertical" size={64}>
              <IconContainerComponent
                categoryName={iconCategory.Deniz}
                selectIcon={selectIcon}
                currentIcon={currentIcon}
              />
            </Space>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu title={drawSubMenuTitle}>
          <Menu.Item>Import Draws</Menu.Item>
          <Menu.Item>Export Current Draw</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={mapsSubMenuTitle}>
          <Menu.SubMenu title="Maps">
            <Menu.Item>
              <span onClick={() => changeMap("Default")}>Default</span>
            </Menu.Item>
            <Menu.Item>
              <span onClick={() => changeMap("CadastreSatellite")}>
                Cadastre Satellite
              </span>
            </Menu.Item>
            <Menu.Item>
              <span onClick={() => changeMap("StadiaLight")}>Stadia Light</span>
            </Menu.Item>
            <Menu.Item>
              <span onClick={() => changeMap("StadiaDark")}>Stadia Dark</span>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>Radars</Menu.Item>
          <Menu.Item>H</Menu.Item>
        </Menu.SubMenu>

        <Menu.Item className="clearMarkerBtn">
          <div onClick={clearMarkers} id="clearMarkers">
            {clearMarkerBtnState}
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};
