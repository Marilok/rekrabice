import {
  IconAt,
  IconGavel,
  IconMapPin,
  IconReceipt,
  IconSectionSign,
} from "@tabler/icons-react";

export const CONTACT = {
  bankAccountFull: "109741785/2250",
  bankAccountNumber: 109741785,
  bankAccountBank: 2250,
  legalName: "Awoxo s.r.o.",
  zip: "60200",
  city: "Brno",
  ico: "196 33 122",
  dic: "CZ19633122",
  address: "Nové sady 988/2",
  faviconUrl: "https://rekrabice.cz/favicon.svg",
  vlozka:
    "Společnost Awoxo s.r.o. je zapsána v OR vedeném Krajským soudem v Brně, oddíl C, vložka 135251.",
  platce: "Neplátce DPH",
};

export const CONTACT_US_DATA = [
  {
    title: "Email",
    description: "ahoj@rekrabice.cz",
    link: "mailto:ahoj@rekrabice.cz",
    icon: IconAt,
  },
  // {
  //   title: "Telefon",
  //   description: "+420 777 777 777",
  //   link: "tel:+420777777777",
  //   icon: IconPhone,
  // },
  {
    title: "Sídlo",
    description: "Nové sady 988/2, Brno",
    link: "https://goo.gl/maps/re79poptwbFYxczBA",
    icon: IconMapPin,
  },
];

export const IMPRESSUM_DATA = [
  {
    title: "Sídlo",
    description: "Nové sady 988/2, 602 00 Brno, Česko",
    link: "https://goo.gl/maps/re79poptwbFYxczBA",
    icon: IconMapPin,
  },
  {
    title: "IČ",
    description: "19633122",
    icon: IconSectionSign,
  },
  {
    title: "DIČ",
    description: "0000000",
    icon: IconReceipt,
  },
  {
    title: "Zápis do OR",
    description:
      "Společnost Awoxo s.r.o. je zapsána v OR vedeném Krajským soudem v Brně, oddíl C, vložka 135251.",
    icon: IconGavel,
  },
];
