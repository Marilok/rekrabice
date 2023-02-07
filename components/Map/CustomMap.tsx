// @ts-nocheck
import { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
  Popup,
  Marker,
  Polygon,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import "react-leaflet-markercluster/dist/styles.min.css";
import L from 'leaflet';
import { supabase } from '../../lib/supabaseClient';
import MarkerClusterGroup from './MarkerClusterGroup';
import { myIcon } from './Marker';
import { heartData } from './heartData';
import CustomPopup from './CustomPopup';
// TODO1: Add GeoJSON data to the map
// @ts-ignore
// TODO3: change marker icon
export default function CustomMap() {
  const [locations, setLocations]: any = useState(null);
  useEffect(() => {
    getShopsLocations();
  }, []);
  async function getShopsLocations() {
    try {
      const { data, error } = await supabase.rpc('get_shops_locations');

      if (data) {
        setLocations(data);
        // console.log(data);
      }
    } catch (error: any) {
      // console.log(error);
      alert(error.message);
    } finally {
    }
  }
  const createClusterCustomIcon = (cluster: any) => {
    const count = cluster.getChildCount();
    let size = 'LargeXL';

    if (count < 10) {
      size = 'Small';
    } else if (count >= 10 && count < 100) {
      size = 'Medium';
    } else if (count >= 100 && count < 500) {
      size = 'Large';
    }
    const options = {
      cluster: `markerCluster${size}`,
    };

    // return L.divIcon({
    //   html: `<div>
    //     <span class="markerClusterLabel">${count}</span>
    //   </div>`,
    //   className: `${options.cluster}`,
    // });
    return L.divIcon({
      html: `
        <span class="font-bold text-lg text-center">${count}</span>
      `,
      className:
        'bg-primary text-white p-2 rounded-full !flex items-center justify-center',
      iconSize: L.point(44, 44),
    });
  };

  return (
    <MapContainer
      id="map"
      className="w-full h-screen	"
      center={[49.1930642, 16.6099019]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.seznam.cz/">Seznam.cz</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://m1.mapserver.mapy.cz/base-m/{z}-{x}-{y}"
        // TODO: fix subdomail to support 1,2,3,4
        // m{s}.mapserver.mapy.cz/base-m/{z}-{x}-{y}
      />
      <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
        {locations
          && locations.map((place: any) => (
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
      </MarkerClusterGroup>

      {shapes.map((shape, index) => (
        <Polygon
          key={index}
          pathOptions={{ color: 'green' }}
          // @ts-ignore
          positions={shape}
        />
      ))}
    </MapContainer>
  );
}
const shapes = [heartData];

// export async function getServerSideProps() {
//   console.log(supabase);
//   const { data, error } = await supabase.rpc("get_shops_locations");
//   if (error) console.error(error);
//   else console.log(supabase);

//   // Pass data to the page via props
//   return { props: { data } };
// }
