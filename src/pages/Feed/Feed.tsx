import React, { useEffect, useState } from "react";
import locationPng from "../../images/location.png";
import emptyPng from "../../images/icons/Empty.png";
import {
  MapContainer as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import L, {
  Icon,
  LeafletMouseEvent,
  LeafletEvent,
  circle,
  polyline,
  rectangle,
} from "leaflet";
import { Flex } from "antd";
import { SideMenu } from "../../components/SideMenu";

import { CustomIcon } from "../../temp/iconPool";
import { FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  const [currentIcon, setCurrentIcon] = useState<CustomIcon | undefined>({
    name: "location",
    path: emptyPng,
    category: 1,
  });
  // * sabit yapı
  const getPopupContent = (icon?: CustomIcon) => {
    return (
      <Flex vertical gap={"middle"}>
        {icon && (
          <div>
            Category: {icon.category}, Name: {icon.name}
          </div>
        )}
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
      <Popup>{getPopupContent(currentIcon)}</Popup>
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
        <Popup>{getPopupContent(currentIcon)}</Popup>
      </Marker>,
    ]);
  };

  // * Mouse Event Atamaları
  const ClickControl = () => {
    useMapEvents({
      click: addMarker,
    });
    return null;
  };

  const _onCreate = (e: LeafletEvent) => {
    console.log("data --> ", e);
  };

  const _onEdited = (e: LeafletEvent) => {
    console.log(e);
  };

  const _onDeleted = (e: LeafletEvent) => {
    console.log(e);
  };

  return (
    <>
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
          <FeatureGroup>
            <EditControl
              position="bottomleft"
              onCreated={_onCreate}
              onEdited={_onEdited}
              onDeleted={_onDeleted}
              draw={{
                rectangle: rectangle,
                circle: circle,
                polyline: polyline,
                circlemarker: false,

                marker: false,
              }}
            />
          </FeatureGroup>
        </LeafletMap>
        <SideMenu setIcon={setCurrentIcon} setMarkers={setMarkers} />
      </div>
    </>
  );
};

export default Feed;
