import { Title } from "@mantine/core";
import translations from "translations/login";

export default function UpperText() {
  return (
    <div className="relative">
      <Title ta="center" className="font-extrabold">
        {translations.heading}
      </Title>
    </div>
  );
}
