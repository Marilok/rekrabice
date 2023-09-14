import { Polygon } from "react-leaflet";

import HEART_LOCATION_DATA from "./data/heartData";

export default function EasterEggShapes() {
  const shapes = [HEART_LOCATION_DATA];

  return shapes.map((shape: any) => (
    <Polygon
      key={`${shape.lng} + ${shape.lat}`}
      pathOptions={{ color: "green" }}
      positions={shape}
    />
  ));
}
