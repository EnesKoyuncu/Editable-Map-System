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
import { CustomIcon } from "../../temp/iconPool";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  const [currentIcon, setCurrentIcon] = useState<CustomIcon | undefined>({
     name: 'location', path: locationPng, category: 1
  });
  // * sabit yapı
  const getPopupContent = (icon?: CustomIcon) => {
    return (
      <Flex vertical gap={"middle"}>
        {
          icon && <div>Category: {icon.category}, Name: {icon.name}</div>
        }
        
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
        {getPopupContent(currentIcon)}
      </Popup>
    </Marker>,
  ]);

  // * Marker ekleme yapısı
  const addMarker = (event: LeafletMouseEvent) => {
    console.log(currentIcon);

    setMarkers([
      ...markers,
      <Marker
        position={[event.latlng.lat, event.latlng.lng]}
        draggable={true}
        icon={new Icon({ iconUrl: currentIcon?.path, iconSize: [40, 40] })}
      >
        <Popup>
        {getPopupContent(currentIcon)}
        </Popup>
      </Marker>,
    ]);
  };


  const { selectedIcon, icons, deneme1 }: any = useContext(MainContext);
  console.log("Feed'te selectedIcon --> ", selectedIcon);
  console.log("Feed'te icons --> ", icons);
  console.log("Feed'te deneme1 --> ", deneme1);
  useEffect(() => {
    console.log(currentIcon);
  }, [currentIcon])

  useEffect(() => {
    try {
      if (icons && icons.length > 0) {
        const temp: CustomIcon | undefined = icons.find(
          (icons: CustomIcon) => selectedIcon === icons
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

    console.log(currentIcon?.path, " --> currentIcon?.iconPath");
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
        <SideMenu setIcon={setCurrentIcon}/>
      </div>
    </MainContext.Provider>
  );
};

export default Feed;
