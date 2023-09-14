import L from "leaflet";
import { Marker } from "react-leaflet";
import CustomPopup from "./CustomPopup";

export default function Markers({ locations }: { locations: any }) {
  const customIcon = L.icon({
    iconUrl: "favicon.svg",
    iconSize: [64, 64],
  });

  const markers = locations.map((place: any) => (
    <Marker
      key={place.location_id}
      position={[place.lng, place.lat]}
      icon={customIcon}
    >
      <CustomPopup
        title={place.brand_name}
        city={place.city}
        zip={place.zip}
        street={place.street}
        houseNumber={place.house_number}
        streetNumber={place.street_number}
        link={place.official_url}
      />
    </Marker>
  ));
  return markers;
}

// alternative icon

/* <svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-map-pin-filled"
  width="44"
  height="44"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="#00abfb"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path
    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
    stroke-width="0"
    fill="currentColor"
  />
</svg>; */
