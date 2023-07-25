import {
    IconGavel,
    IconMapPin,
    IconSectionSign
} from "@tabler/icons-react";

export const street = "Nové sady 2"

export const legalData = [
    {
      title: "Sídlo",
      description: "Čermákova 2040/55, Velké Meziříčí, 59401",
      icon: IconMapPin,
      // type: "place",
    },
    { title: "IČO", description: "17455235", icon: IconSectionSign },
    // {
    //   title: "Zápis do OR",
    //   description:
    //     "Společnost Zelená firma s.r.o. je zapsána v OR vedeném Krajským soudem v Brně, oddíl A, vložka 00000.",
    //   icon: IconGavel,
    // },
    {
      title: "Zápis",
      description:
          "Zapsaný v živnostenském rejstříku u Městského úřadu Velké Meziříčí",
      icon: IconGavel,
    },
  ];
