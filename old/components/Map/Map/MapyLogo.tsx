import Image from "next/image";

export default function MapyLogo() {
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
