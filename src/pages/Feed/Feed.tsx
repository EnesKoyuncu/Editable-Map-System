import React, { useEffect, useState } from "react";
import locationPng from "../../images/location.png";
import {
  MapContainer as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { Icon, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Flex } from "antd";
import { SideMenu } from "../../components/SideMenu";

import { MainContext } from "../../context";
import { useContext } from "react";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  // * sabit yapı
  const PopupContent = () => {
    return (
      <Flex vertical gap={"middle"}>
        <div>Here is your location.</div>
      </Flex>
    );
  };
  // * sabit yapı
  const [markers, setMarkers] = useState<JSX.Element[]>([
    <Marker
      position={[41.015137, 28.97953]}
      draggable={true}
      icon={new Icon({ iconUrl: locationPng, iconSize: [40, 50] })}
    >
      <Popup>
        <PopupContent />
      </Popup>
    </Marker>,
  ]);

  // * Marker ekleme yapısı
  const addMarker = (event: LeafletMouseEvent) => {
    setMarkers([
      ...markers,
      <Marker
        position={[event.latlng.lat, event.latlng.lng]}
        draggable={true}
        icon={new Icon({ iconUrl: currentIcon?.iconPath, iconSize: [40, 50] })}
      >
        <Popup>
          <PopupContent />
        </Popup>
      </Marker>,
    ]);
  };
  interface selectedIconI {
    iconName: string;
    iconPath?: string;
    iconCategory?: string;
  }

  const [currentIcon, setCurrentIcon] = useState<selectedIconI>();
  const { selectedIcon, icons, deneme1 }: any = useContext(MainContext);
  console.log("Feed'te selectedIcon --> ", selectedIcon);
  console.log("Feed'te icons --> ", icons);
  console.log("Feed'te deneme1 --> ", deneme1);

  useEffect(() => {
    try {
      if (icons && icons.length > 0) {
        const temp: selectedIconI | undefined = icons.find(
          (icons: selectedIconI) => selectedIcon === icons.iconName
        );
        setCurrentIcon(temp);
        console.log("currentIcon --> ", currentIcon);
      } else {
        console.log("icons dizisi tanımlı değil veya boş.");
        // icons dizisi tanımlı değil veya boşsa, buna uygun bir işlem yapın
      }
    } catch (e) {
      console.log("Hata Tipi --> ", e);
    }

    console.log(currentIcon?.iconPath, " --> currentIcon?.iconPath");
  }, [selectedIcon, icons]);

  // * Mouse Event Atamaları
  const ClickControl = () => {
    useMapEvents({
      click: addMarker,
    });
    return null;
  };

  const data = {};
  return (
    <MainContext.Provider value={data}>
      <div>
        <LeafletMap
          center={[41.015137, 28.97953]}
          zoom={16}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true} // ! Yukarıdaki Mouse Event'i ile çakışıyor
          scrollWheelZoom={true}
          dragging={true}
          style={{ width: "100vw", height: "100vh" }} // ! Burada % mi yoksa vh-vw mi kullanılacak?
        >
          <TileLayer
            attribution='&copy; <a href="https://www.youtube.com/@historylegends">@History Legends</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ClickControl /> {/*Mouse Eventleri Default Eklendi*/}
          {markers} {/*Default Marker'ı Haritada Göstermek için eklendi*/}
        </LeafletMap>
        <SideMenu />
      </div>
    </MainContext.Provider>
  );
};

export default Feed;
