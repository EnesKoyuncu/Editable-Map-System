import React, { useEffect, useState } from "react";
import "../style/sideMenu.css";
import IconComponent from "./IconComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../context";
import { Menu } from "antd";

interface SideMenuProps {
  setIcon: any;
}
export const SideMenu: React.FC<SideMenuProps> = ({ setIcon }) => {
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

  function selectIcon(icon: any) {
    setIcon(icon);
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
                    <IconComponent iconName="jetFighter"  selectIcon={selectIcon}/>
                    <IconComponent iconName="torpedo"  selectIcon={selectIcon}/>
                    <IconComponent iconName="missile"  selectIcon={selectIcon}/>
                    <IconComponent iconName="pistol"  selectIcon={selectIcon}/>
                    <IconComponent iconName="sniper"  selectIcon={selectIcon}/>
                    <IconComponent iconName="soldier"  selectIcon={selectIcon}/>
                    <IconComponent iconName="warningRed"  selectIcon={selectIcon}/>
                    <IconComponent iconName="warningBlack"  selectIcon={selectIcon}/>
                    <IconComponent iconName="skullAndBones"  selectIcon={selectIcon}/>
                </div>
              </div>
            </div>
            <div className="iconAir  subIconPool">
              Air Force Icons
                    <IconComponent iconName="jetFighter"  selectIcon={selectIcon}/>
                    <IconComponent iconName="torpedo"  selectIcon={selectIcon}/>
                    <IconComponent iconName="missile"  selectIcon={selectIcon}/>
                    <IconComponent iconName="pistol"  selectIcon={selectIcon}/>
                    <IconComponent iconName="sniper"  selectIcon={selectIcon}/>
                    <IconComponent iconName="soldier"  selectIcon={selectIcon}/>
                    <IconComponent iconName="warningRed"  selectIcon={selectIcon}/>
                    <IconComponent iconName="warningBlack"  selectIcon={selectIcon}/>
                    <IconComponent iconName="skullAndBones"  selectIcon={selectIcon}/>
            </div>
            <div className="iconNavy  subIconPool">
              Navy Icons
                    <IconComponent iconName="jetFighter"  selectIcon={selectIcon}/>
                    <IconComponent iconName="torpedo"  selectIcon={selectIcon}/>
                    <IconComponent iconName="missile"  selectIcon={selectIcon}/>
                    <IconComponent iconName="pistol"  selectIcon={selectIcon}/>
                    <IconComponent iconName="sniper"  selectIcon={selectIcon}/>
                    <IconComponent iconName="soldier"  selectIcon={selectIcon}/>
                    <IconComponent iconName="warningRed"  selectIcon={selectIcon}/>
                    <IconComponent iconName="warningBlack"  selectIcon={selectIcon}/>
                    <IconComponent iconName="skullAndBones"  selectIcon={selectIcon}/>
            </div>
          </div>
        </div>
        <div className="section drawSection">Draw</div>
        <div className="section settingsSection">Map Settings</div>
      </div>
    </MainContext.Provider>
  );
};
