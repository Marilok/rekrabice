import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Popup,
  Marker,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import { myIcon } from "./Marker";
import { heartData } from "./heartData";
import { boatData } from "./boatData";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";
import CustomPopup from "./CustomPopup";

//TODO1: Add GeoJSON data to the map
//@ts-ignore
//TODO3: change marker icon
export default function CustomMap() {
  const [locations, setLocations]: any = useState(null);
  useEffect(() => {
    getShopsLocations();
  }, []);
  async function getShopsLocations() {
    try {
      const { data, error } = await supabase.rpc("get_shops_locations");

      if (data) {
        setLocations(data);
        console.log(data);
      }
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    } finally {
    }
  }
  return (
    <MapContainer
      id="map"
      className={"w-full h-[1000px]	"}
      center={[49.1918183, 16.6122742]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.seznam.cz/">Seznam.cz</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://m1.mapserver.mapy.cz/base-m/{z}-{x}-{y}"
        //TODO: fix subdomail to support 1,2,3,4
        //m{s}.mapserver.mapy.cz/base-m/{z}-{x}-{y}
      />
      {locations &&
        locations.map((place: any) => (
          <Marker
            icon={myIcon}
            key={place.subsidiary}
            position={[place.lat, place.lng]}
          >
            <CustomPopup
              title={place.name}
              logo={place.favicon}
              subsidiary={place.subsidiary}
            />
          </Marker>
        ))}
      {shapes.map((shape, index) => (
        <Polygon
          key={index}
          pathOptions={{ color: "green" }}
          //@ts-ignore
          positions={shape}
        />
      ))}
    </MapContainer>
  );
}
const shapes = [heartData];

const places = [
  {
    x: 49.1918183,
    y: 16.6122742,
    title: "Aktin",
    subsidiary: "Letmo",
  },
];
// export async function getServerSideProps() {
//   console.log(supabase);
//   const { data, error } = await supabase.rpc("get_shops_locations");
//   if (error) console.error(error);
//   else console.log(supabase);

//   // Pass data to the page via props
//   return { props: { data } };
// }
