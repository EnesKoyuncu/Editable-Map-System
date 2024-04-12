import React, { useEffect, useState } from "react";
import {
  MapContainer as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import {
  Icon,
  LeafletMouseEvent,
  LeafletEvent,
  circle,
  polyline,
  rectangle,
} from "leaflet";
import { Flex } from "antd";
import { SideMenu } from "../../components/SideMenu";
import { CustomIcon } from "../../data/iconPool";
import { FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  const [currentIcon, setCurrentIcon] = useState<CustomIcon | undefined>(
    undefined
  );

  const [markers, setMarkers] = useState<{ id: number; marker: JSX.Element }[]>(
    []
  );

  const [clearSingleMarker, setClearSingleMarker] = useState<boolean>();

  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // // * Ekran Genişliği Ayarı
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    console.log("Clear Single Marker: ", clearSingleMarker);
  }, [clearSingleMarker]);

  const getPopupContent = (markerId: number, icon?: CustomIcon) => {
    const removeMarker = () => {
      setMarkers((prev) => prev.filter((marker) => marker.id !== markerId));
    };

    return (
      <Flex vertical gap={"middle"}>
        {icon && (
          <div>
            Category: {icon.category}, Name: {icon.name}{" "}
            <button onClick={removeMarker}> Remove Icon </button>
          </div>
        )}
      </Flex>
    );
  };

  const uniqueNumbers: number[] = [];
  function generateUniqueNumber(min: number, max: number): number {
    let randomNumber: number;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (uniqueNumbers.includes(randomNumber));
    uniqueNumbers.push(randomNumber);
    return randomNumber;
  }

  // * Marker ekleme yapısı
  const addMarker = (event: LeafletMouseEvent) => {
    if (currentIcon === undefined) {
      return;
    }
    const markerId = generateUniqueNumber(1, 10000);
    const markerKey = `marker-${markerId}`;
    const marker = (
      <Marker
        position={[event.latlng.lat, event.latlng.lng]}
        draggable={true}
        key={markerKey}
        icon={new Icon({ iconUrl: currentIcon?.path, iconSize: [40, 40] })}
        bubblingMouseEvents={true}
        eventHandlers={{
          click: removeMarker(markerId),
        }}
      >
        <Popup>{getPopupContent(markerId, currentIcon)}</Popup>
      </Marker>
    );
    setMarkers([...markers, { id: markerId, marker }]);
  };

  const removeMarker = React.useCallback(
    (markerId: number) => {
      console.log("Clear Single Marker test -->: ", clearSingleMarker);
      if (!clearSingleMarker) {
        setMarkers((prev) => prev.filter((marker) => marker.id !== markerId));
      }
      return undefined;
    },
    [clearSingleMarker]
  );

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

  const [currentTileLayerUrl, setCurrentTileLayerUrl] = useState<any>(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  const [currentTileLayerAttr, setCurrentTileLayerAttr] = useState<any>(
    '&copy; <a href="https://www.youtube.com/@historylegends">@History Legends</a>'
  );

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
          style={{ width: "100vw", height: "100vh" }}
          keyboardPanDelta={240} // Arrow Key ile harita kaydırma hızı
        >
          <TileLayer
            attribution={currentTileLayerAttr}
            url={currentTileLayerUrl}
          />
          <ClickControl />

          {markers.map((item) => item.marker)}

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
        <SideMenu
          setIcon={setCurrentIcon}
          setMarkers={setMarkers}
          setCurrentTileLayerUrl={setCurrentTileLayerUrl}
          setCurrentTileLayerAttr={setCurrentTileLayerAttr}
          currentIcon={currentIcon}
          setClearSingleMarker={setClearSingleMarker}
          // screenWidth={screenWidth}
        />
      </div>
    </>
  );
};

export default Feed;
