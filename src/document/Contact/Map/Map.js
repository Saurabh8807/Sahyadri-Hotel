import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

import pinIcon from './map2.png'; // Replace with the URL of your custom pin icon

const MapComponent = () => {
  // Replace these coordinates with your default latitude and longitude
  const defaultPosition = [18.9277, 72.8212];

  const locations = [
    { id: 1, name: 'Sahyadri Hotel', position: [18.9277, 72.8212] }, // Replace with your coordinates
    // Add more locations if needed
  ];

  const handleMarkerClick = (lat, lng) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  const customIcon = new L.Icon({
    iconUrl: pinIcon,
    iconSize: [40, 40], // Adjust the size of the icon as needed
    iconAnchor: [20, 40], // Position the icon anchor point
    popupAnchor: [0, -40], // Position the popup relative to the icon
  });

  return (
    <MapContainer center={defaultPosition} zoom={13} className='gMap'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker key={location.id} position={location.position} icon={customIcon}>
          <Popup>
            <div className="popup-content">
              <strong>{location.name}</strong>
              <Link
                to={`https://www.google.com/maps/search/?api=1&query=${location.position[0]},${location.position[1]}`}
                target="_blank"
                onClick={() => handleMarkerClick(location.position[0], location.position[1])}
              >
                View on Google Maps
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
