import L from "leaflet";
import "leaflet/dist/leaflet.css";

// @ts-ignore
const myIcon = new L.divIcon({
  html: `
<svg
   xmlns="http://www.w3.org/2000/svg"
   height="32px"
   width="32px"
   viewBox="0 0 24 24"
   fill="green"
   version="1.1"
   id="svg6">
  <defs
     id="defs10" />
  <path
     d="M0 0h24v24H0z"
     fill="none"
     id="path2" />
  <path
     d="M 12,2 C 8.13,2 5,5.13 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.87 -3.13,-7 -7,-7 z"
     id="path4" />
</svg>
`,
  popupAnchor: [0, -10],
  iconSize: [32, 32],
  className: "transparent border-none",
});

export default myIcon;
