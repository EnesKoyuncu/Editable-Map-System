import React, { useEffect, useState } from "react";
import "../style/sideMenu.css";
import { Menu, Switch } from "antd";
import type { MenuTheme } from "antd/es/menu";
import maps from "../data/mapPool";
import { iconCategory, addIcon } from "../data/iconPool";
import { IconContainerComponent } from "./IconContainerComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import {
  faSun,
  faPencil,
  faMap,
  faTrash,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";

import { Space, Select } from "antd";
import { Button, Modal } from "antd";
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
  const [addIconTitle, setAddIconTitle] = useState<any>("Add Icon");

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [inputCategoryValue, setInputCategoryValue] = useState<iconCategory>(
    iconCategory.Symbol
  );
  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputPathValue, setInputPathValue] = useState<any>();

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
    setSideMenuDesign(value ? true : false);
    setIsChecked(value);
  };

  // * Ekran genişliğini dinle ve güncelle
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
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
        setAddIconTitle(
          <FontAwesomeIcon
            icon={faIcons}
            className="fontAwesomeIcons"
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
        setAddIconTitle(
          <FontAwesomeIcon
            icon={faIcons}
            color="light"
            className="fontAwesomeIcons"
          />
        );
      }
    } else {
      setIconSubMenuTitle("Icons");
      setDrawSubMenuTitle("Draw Options");
      setMapsSubMenuTitle("Maps");
      setClearMarkerBtnState("Clear All Markers");
      setAddIconTitle("Add Icon");
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

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      addIcon(inputNameValue, inputPathValue, inputCategoryValue);
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

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

        <Menu.Item className="addIconSection">
          <div>
            <Button type="primary" onClick={showModal} className="addIconBtn">
              {addIconTitle}
            </Button>
            <Modal
              open={open}
              title="Add Icon Page"
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Back to Map
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={handleOk}
                >
                  Confirm
                </Button>,
                <Button
                  key="link"
                  href="https://fontawesome.com/"
                  type="primary"
                  loading={loading}
                  onClick={handleOk}
                >
                  Find More Icon!
                </Button>,
              ]}
              className="addIconModal"
            >
              <div>
                <label htmlFor="name" id="lblName">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={inputNameValue}
                  onChange={(e) => setInputNameValue(e.target.value)}
                  required
                  className="input1"
                />
              </div>
              <div>
                <label htmlFor="category" id="lblCategory">
                  Category:
                </label>
                <Select
                  defaultValue="Symbol"
                  style={{ width: 120 }}
                  onChange={undefined} // TODO: Fonksiyon Yaz
                  options={[
                    { value: "Symbol", label: "Symbol" },
                    { value: "Hava", label: "Hava" },
                    { value: "Kara", label: "Kara" },
                    { value: "Deniz", label: "Deniz" },
                  ]}
                />
              </div>
              <div>
                <label htmlFor="iconUrl" id="lblUrl">
                  Icon Url:
                </label>
                <input
                  type="text"
                  id="iconUrl"
                  value={inputPathValue}
                  onChange={(e) => setInputPathValue(e.target.value)}
                  required
                  className="input1"
                />
              </div>
            </Modal>
          </div>
        </Menu.Item>

        <Menu.Item className="clearMarkerBtn">
          <div onClick={clearMarkers} id="clearMarkers">
            {clearMarkerBtnState}
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};
