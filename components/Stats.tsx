import Forrest from "./Forrest";

interface Props {
  data: any;
  stats_boxes_used?: number;
  stats_saved_co2?: number;
  stats_saved_trees?: number;
}

export default function Stats({ data }: Props) {
  console.log(data);
  return (
    <div>
      {/* <StatsGrid
        data={[
          {
            title: "Použitých krabic",
            icon: "package",
            value: props.data.stats_boxes_used,
            diff: 13,
          },
          { title: "Úspor", icon: "coin", value: "4444 Kč", diff: 20 },
          {
            title: "Ušetřeného CO2",
            icon: "cloud",
            value: props.data.stats_saved_co2,
            diff: 1,
          },
        ]}
      /> */}
      <Forrest treesCount={10} />
    </div>
  );
}
