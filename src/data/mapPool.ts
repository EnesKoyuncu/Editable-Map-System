export interface mapType {
  name: string;
  url: string;
  attribution: string;
}

const maps: mapType[] = [
  {
    name: "Default",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.youtube.com/@historylegends">@History Legends</a>',
  },
  {
    name: "GoogleMaps",
    url: "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
    attribution: "",
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

export default maps;
