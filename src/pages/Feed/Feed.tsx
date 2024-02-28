import React, { useState } from 'react';
import locationPng from "../../images/location.png";
import { MapContainer as LeafletMap, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { Icon, LeafletMouseEvent } from "leaflet";
import 'leaflet/dist/leaflet.css';
import {  Flex } from 'antd';

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
    const PopupContent = () => {
        return (
            <Flex vertical gap={'middle'}><div>Here is your location.</div></Flex>
        );
    }

    const [ markers, setMarkers] = useState<JSX.Element[]>([<Marker position={[41.015137,	28.979530]}
        draggable={true}
        icon={new Icon({ iconUrl: locationPng, iconSize: [40, 50] })}
        >
            <Popup >
                <PopupContent/>
                
            </Popup>

        </Marker>])

    const addMarker = (event: LeafletMouseEvent) => {
        setMarkers([...markers, <Marker position={[event.latlng.lat,	event.latlng.lng]}
            draggable={true}
            icon={new Icon({ iconUrl: locationPng, iconSize: [40, 50] })}
            >
                <Popup >
                    <PopupContent/>
                    
                </Popup>
    
            </Marker>])
    }
    const ClickControl = () => {
        useMapEvents({
            click:addMarker,
            },
        );
        return null;
    }
    return (
            <LeafletMap
                    center={[41.015137,	28.979530]}
                    zoom={16}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    style={{ width: '100%', height: '100%' }}
                >
                <TileLayer
                  attribution='&copy; <a href="https://www.youtube.com/@historylegends">@History Legends</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickControl/>
                {markers}
                </LeafletMap>
    );
};

export default Feed;
