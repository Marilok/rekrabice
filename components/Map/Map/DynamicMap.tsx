import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("./CustomMap"), {
  ssr: false,
});

export default function DynamicMap() {
  return <CustomMap />;
}
