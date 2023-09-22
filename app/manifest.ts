import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ReKrabice applikace",
    short_name: "ReKrabice",
    description: "Aplikace pro správu ReKrabicí",
    start_url: "/login/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#168523",
    orientation: "portrait",
    icons: [
      {
        src: "brand/manifest-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
