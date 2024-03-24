import jetFighter from "../images/icons/fighter-jet2.png";
import torpedo from "../images/icons/torpedo.png";
import missile from "../images/icons/missile.png";
import pistol from "../images/icons/pistol.png";
import sniper from "../images/icons/sniper.png";
import soldier from "../images/icons/soldier.png";
import warningRed from "../images/icons/warning-red.png";
import warningBlack from "../images/icons/warning-black.png";
import skullAndBones from "../images/icons/skull-and-bones.png";

export interface Icon {
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

const icons: Icon[] = [
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
];

export default icons;
