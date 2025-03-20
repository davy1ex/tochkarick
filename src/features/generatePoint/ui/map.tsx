import React, {useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Marker, useMap } from 'react-leaflet';
import '../../../../node_modules/leaflet/dist/leaflet.css';

import "./Map.css";

interface MapProps {
    pointCoordinates: [number, number] | null;
    showRadius: boolean;
    radius: number;
    centerPosition: [number, number];
}

export const Map: React.FC<MapProps> = ({ pointCoordinates, showRadius, radius, centerCoordinates}) => {
    const UpdateMapPosition: React.FC<{ position: [number, number] }> = ({ position }) => {
        const map = useMap();

        useEffect(() => {
            if (position) {
                map.setView(position, map.getZoom());
            }
        }, [position, map]);

        return null;
    };

    return (
        <div className="map-component">
            <div className="map-container">
                <MapContainer center={centerCoordinates} zoom={13}>
                    <TileLayer
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {centerCoordinates && <UpdateMapPosition position={centerCoordinates} />}
                    {showRadius && centerCoordinates && <Circle center={centerCoordinates} radius={radius} />}
                    {pointCoordinates && <Marker position={pointCoordinates} />}
                </MapContainer>
            </div>
        </div>
    );
};
