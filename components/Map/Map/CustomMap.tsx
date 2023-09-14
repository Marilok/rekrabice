"use client";

// @ts-nocheck
import { AspectRatio } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import EasterEggShapes from "../EasterEgg/EasterEggShapes";
import Markers from "../Marker/Markers";
import MapyLogo from "./MapyLogo";

export default function CustomMap({ apiKey }: { apiKey: string }) {
  const supabase = createClientComponentClient();
  const [locations, setLocations] = useState<any>([]);

  function LocationsProvider() {
    const map = useMapEvents({
      moveend: async () => {
        const northEast = map.getBounds().getNorthEast();
        const southWest = map.getBounds().getSouthWest();
        const { data, error } = await supabase.rpc("por_in_view", {
          min_lat: northEast.lng, // TODO: please someone fix this naming lat/lng, look in supabase/postgis and leaflet docs
          min_long: northEast.lat,
          max_lat: southWest.lng,
          max_long: southWest.lat,
        });
        console.log(data || error);
        if (error) throw error;
        setLocations(data);
      },
    });
    return null;
  }

  return (
    <AspectRatio
      ratio={16 / 9}
      mah={400}
      className="rounded overflow-hidden"
      mt="xl"
      mx="md"
    >
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
