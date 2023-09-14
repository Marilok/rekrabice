import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("./CustomMap"), {
  ssr: false,
});

export default function DynamicMap() {
  return <CustomMap apiKey={process.env.MAPY_API_KEY!} />;
}
