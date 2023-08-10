"use client";

// @ts-nocheck
import { AspectRatio } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { useState } from "react";
import {
  MapContainer,
  Marker,
  Polygon,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import HEART_LOCATION_DATA from "./EasterEggData/heartData";

export default function CustomMap({ apiKey }: { apiKey: string }) {
  const supabase = createClientComponentClient();
  const [locations, setLocations] = useState<any>([]);

  function LocationsProvider() {
    const map = useMapEvents({
      moveend: async () => {
        const northEast = map.getBounds().getNorthEast();
        const southWest = map.getBounds().getSouthWest();
        const { data, error } = await supabase.rpc("por_in_view", {
          min_lat: northEast.lat,
          min_long: northEast.lng,
          max_lat: southWest.lat,
          max_long: southWest.lng,
        });
        if (error) throw error;
        setLocations(data);
      },
    });
    return null;
  }

  return (
    <AspectRatio ratio={16 / 9} mah={400} className="rounded overflow-hidden">
      <MapContainer id="map" center={[49.1930642, 16.6099019]} zoom={13}>
        <TileLayer
          attribution='<a href="https://licence.mapy.cz/?doc=mapy_pu#api" target="_blank">&copy; Seznam.cz a.s. a další</a>'
          url={`https://api.mapy.cz/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${apiKey}&lang=cs`}
          className="color-red decoration-none hoaver:color-blue"
        />
        <LocationsProvider />
        <Markers locations={locations} />
        <MapyLogo />

        <EasterEggShapes />
      </MapContainer>
    </AspectRatio>
  );
}

function EasterEggShapes() {
  return shapes.map((shape: any) => (
    <Polygon
      key={`${shape.lng} + ${shape.lat}`}
      pathOptions={{ color: "green" }}
      positions={shape}
    />
  ));
}

function MapyLogo() {
  return (
    <div className="leaflet-bottom leaflet-left">
      <div className="le">
        <Image
          src="https://api.mapy.cz/img/api/logo.svg"
          alt="Mapy.cz logo"
          height={28}
          width={93}
        />
      </div>
    </div>
  );
}
const shapes = [HEART_LOCATION_DATA];

function Markers({ locations }: { locations: any }) {
  const markers = locations.map(
    (place: any) => (
      <Marker
        key={place.location_id}
        position={[place.lat, place.lng]}
        // icon="/images/map/markerIcon.svg"
      >
        {/* <CustomPopup
          title={place.name}
          logo={place.favicon}
          subsidiary={place.subsidiary}
        /> */}
        Hello
      </Marker>
    ),
    // <Text>Hi</Text>)
  );
  return markers;
}
