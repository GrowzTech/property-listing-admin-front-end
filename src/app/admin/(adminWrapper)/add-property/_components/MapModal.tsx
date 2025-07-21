import React, { useState, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { Modal } from "@/components/block/Modal";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 40.7128, // Default to New York, change as needed
  lng: -74.006,
};

interface MapModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (location: { lat: number; lng: number }) => void;
}

const MapModal: React.FC<MapModalProps> = ({ open, onClose, onSelect }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Set this in your .env
  });

  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    }
  }, []);

  const handleSelect = () => {
    if (marker) {
      onSelect(marker);
    }
  };

  if (!open) return null;

  return (
    <Modal open={open} onOpenChange={onClose} title="Select Address on Map">
      <div style={{ width: "100%", height: "400px" }}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={marker || defaultCenter}
            zoom={marker ? 15 : 10}
            onClick={handleMapClick}
          >
            {marker && <Marker position={marker} />}
          </GoogleMap>
        ) : (
          <div>Loading map...</div>
        )}
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleSelect}
          disabled={!marker}
        >
          Select
        </button>
      </div>
    </Modal>
  );
};

export default MapModal;
