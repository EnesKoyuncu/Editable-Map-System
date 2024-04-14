import jetFighter from "../images/icons/fighter-jet2.png";
import torpedo from "../images/icons/torpedo.png";
import missile from "../images/icons/missile.png";
import pistol from "../images/icons/pistol.png";
import sniper from "../images/icons/sniper.png";
import soldier from "../images/icons/soldier.png";
import warningRed from "../images/icons/warning-red.png";
import warningBlack from "../images/icons/warning-black.png";
import skullAndBones from "../images/icons/skull-and-bones.png";
import emptyIcon from "../images/icons/Empty.png";
import attention from "../images/icons/attention.png";
import bomb from "../images/icons/bomb.png";
import danger from "../images/icons/danger.png";
import noWeapons from "../images/icons/no-weapons.png";
import ukraine from "../images/icons/ukraine.png";
export interface CustomIcon {
  name: string;
  path: any;
  category: iconCategory;
}

export enum iconCategory {
  Hava,
  Kara,
  Deniz,
  Symbol,
}

const icons: CustomIcon[] = [
  {
    name: "jetFighter",
    path: jetFighter,
    category: iconCategory.Hava,
  },
  {
    name: "torpedo",
    path: torpedo,
    category: iconCategory.Hava,
  },
  {
    name: "missile",
    path: missile,
    category: iconCategory.Hava,
  },
  {
    name: "pistol",
    path: pistol,
    category: iconCategory.Kara,
  },
  {
    name: "sniper",
    path: sniper,
    category: iconCategory.Kara,
  },
  {
    name: "soldier",
    path: soldier,
    category: iconCategory.Kara,
  },
  {
    name: "warningRed",
    path: warningRed,
    category: iconCategory.Symbol,
  },
  {
    name: "warningBlack",
    path: warningBlack,
    category: iconCategory.Symbol,
  },
  {
    name: "skullAndBones",
    path: skullAndBones,
    category: iconCategory.Symbol,
  },
  {
    name: "empty",
    path: emptyIcon,
    category: iconCategory.Symbol,
  },
  {
    name: "attention",
    path: attention,
    category: iconCategory.Symbol,
  },
  {
    name: "bomb",
    path: bomb,
    category: iconCategory.Symbol,
  },
  {
    name: "danger",
    path: danger,
    category: iconCategory.Symbol,
  },
  {
    name: "noWeapons",
    path: noWeapons,
    category: iconCategory.Symbol,
  },
  {
    name: "ukraine",
    path: ukraine,
    category: iconCategory.Symbol,
  },
];

export default icons;
