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

import CustomPopup from "./CustomPopup";
//TODO1: Add GeoJSON data to the map
//@ts-ignore
//TODO3: change marker icon
const CustomMap = () => {
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
      {places.map((place) => (
        <Marker
          icon={myIcon}
          key={place.subsidiary}
          position={[place.x, place.y]}
        >
          <CustomPopup title={place.title} subsidiary={place.subsidiary} />
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
};
const shapes = [heartData];
export default CustomMap;

const places = [
  {
    x: 49.1918183,
    y: 16.6122742,
    title: "Aktin",
    subsidiary: "Letmo",
  },
];
