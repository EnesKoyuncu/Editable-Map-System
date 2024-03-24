import React, { useEffect, useState } from "react";
import "../style/sideMenu.css";
import IconComponent from "./IconComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../context";

export const SideMenu = () => {
  // * SideMenu açma kapama
  const [sideMenuDisplay, setSideMenuDisplay] = useState(true);
  function toggleSideMenu() {
    var sideMenu = document.getElementById("sideMenu");
    var hidedBack = document.getElementById("hidedBack");
    if (sideMenuDisplay) {
      setSideMenuDisplay(false);
      if (sideMenu != null) {
        sideMenu.style.display = "none";
        if (hidedBack != null) {
          hidedBack.style.display = "block";
        } else {
          console.log("hidedBack is null - hidedBack Bulunamadi");
        }
      } else {
        console.log("sideMenu is null - Side Menu Bulunamadi");
      }
    } else {
      setSideMenuDisplay(true);
      if (sideMenu != null) {
        sideMenu.style.display = "flex";
        if (hidedBack != null) {
          hidedBack.style.display = "none";
        } else {
          console.log("hidedBack is null - hidedBack Bulunamadi");
        }
      } else {
        console.log("sideMenu is null - Side Menu Bulunamadi");
      }
    }
  }
  // * Icon Section açma kapama
  const [iconSectionDisplay, setIconSectionDisplay] = useState(false);
  function hideIconSection() {
    var subMenusSection = document.getElementById("subIconMenus");

    if (iconSectionDisplay === false) {
      if (subMenusSection != null) {
        subMenusSection.style.display = "flex";
        setIconSectionDisplay(true);
      }
    } else {
      if (subMenusSection != null) {
        subMenusSection.style.display = "none";
        setIconSectionDisplay(false);
      }
    }
  }

  // * Icon seçme
  const [selectedIcon, setSelectedIcon] = useState<string>("random");
  // const [selectedIcon, setSelectedIcon] = useState<string| null>(null);

  function selectIcon(iconName: string) {
    setSelectedIcon(iconName); // Seçilen iconu state'e kaydet
  }

  // useEffect(() => {
  //   data();
  // }, [selectedIcon]);

  // const data = () => {
  //   return selectedIcon;
  // };

  console.log("sideMenu içi selectedIcon: ", selectedIcon);
  return (
    <MainContext.Provider value={selectedIcon}>
      <button
        name="hidedBtn"
        className="hidedBack"
        id="hidedBack"
        onClick={toggleSideMenu}
      >
        Aç
      </button>
      <div className="container" id="sideMenu">
        <div className="section buttonSection">
          <button className="back" name="backBtn" onClick={toggleSideMenu}>
            Kapa
          </button>
          <button>rand1</button>
          <button>rand1</button>
          <button>rand1</button>
        </div>
        <div className="section iconSection">
          <div className="iconMainMenu cursorPointer" onClick={hideIconSection}>
            Icons
            <span className="iconFixer">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
          <div className="subIconMenus" id="subIconMenus">
            <div className="iconLand  subIconPool">
              Land Force Icons
              <div className="dropdown-content">
                <div className="grid-container">
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("jetFighter")}
                  >
                    <IconComponent iconName="jetFighter" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("torpedo")}
                  >
                    <IconComponent iconName="torpedo" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("missile")}
                  >
                    <IconComponent iconName="missile" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("pistol")}
                  >
                    <IconComponent iconName="pistol" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("sniper")}
                  >
                    <IconComponent iconName="sniper" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("soldier")}
                  >
                    <IconComponent iconName="soldier" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("warningRed")}
                  >
                    <IconComponent iconName="warningRed" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("warningBlack")}
                  >
                    <IconComponent iconName="warningBlack" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("skullAndBones")}
                  >
                    <IconComponent iconName="skullAndBones" />
                  </div>
                </div>
              </div>
            </div>
            <div className="iconAir  subIconPool">
              Air Force Icons
              <div className="dropdown-content">
                <div className="grid-container">
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("jetFighter")}
                  >
                    <IconComponent iconName="jetFighter" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("torpedo")}
                  >
                    <IconComponent iconName="torpedo" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("missile")}
                  >
                    <IconComponent iconName="missile" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("pistol")}
                  >
                    <IconComponent iconName="pistol" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("sniper")}
                  >
                    <IconComponent iconName="sniper" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("soldier")}
                  >
                    <IconComponent iconName="soldier" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("warningRed")}
                  >
                    <IconComponent iconName="warningRed" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("warningBlack")}
                  >
                    <IconComponent iconName="warningBlack" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("skullAndBones")}
                  >
                    <IconComponent iconName="skullAndBones" />
                  </div>
                </div>
              </div>
            </div>
            <div className="iconNavy  subIconPool">
              Navy Icons
              <div className="dropdown-content">
                <div className="grid-container">
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("jetFighter")}
                  >
                    <IconComponent iconName="jetFighter" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("torpedo")}
                  >
                    <IconComponent iconName="torpedo" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("missile")}
                  >
                    <IconComponent iconName="missile" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("pistol")}
                  >
                    <IconComponent iconName="pistol" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("sniper")}
                  >
                    <IconComponent iconName="sniper" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("soldier")}
                  >
                    <IconComponent iconName="soldier" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("warningRed")}
                  >
                    <IconComponent iconName="warningRed" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("warningBlack")}
                  >
                    <IconComponent iconName="warningBlack" />
                  </div>
                  <div
                    className="grid-item"
                    onClick={() => selectIcon("skullAndBones")}
                  >
                    <IconComponent iconName="skullAndBones" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section drawSection">Draw</div>
        <div className="section settingsSection">Map Settings</div>
      </div>
    </MainContext.Provider>
  );
};
