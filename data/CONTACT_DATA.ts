import {
  IconAt,
  IconGavel,
  IconMapPin,
  IconPhone,
  IconReceipt,
  IconSectionSign,
} from "@tabler/icons-react";

export const CONTACT = {
  bankAccountFull: "200200/5300",
  bankAccountNumber: 123456796,
  bankAccountBank: 5500,
  legalName: "Awoxo s.r.o.",
  zip: "60200",
  city: "Brno",
  ico: 3000,
  dic: 3000,
  address: "Nové sady 988/2",
  faviconUrl: "https://rekrabice.cz/favicon.svg",
};

export const CONTACT_US_DATA = [
  {
    title: "Email",
    description: "ahoj@rekrabice.cz",
    link: "mailto:ahoj@rekrabice.cz",
    icon: IconAt,
  },
  {
    title: "Telefon",
    description: "+420 777 777 777",
    link: "tel:+420777777777",
    icon: IconPhone,
  },
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
    description: "0000000",
    link: "https://goo.gl/maps/re79poptwbFYxczBA",
    icon: IconSectionSign,
  },
  {
    title: "DIČ",
    description: "0000000",
    link: "https://goo.gl/maps/re79poptwbFYxczBA",
    icon: IconReceipt,
  },
  {
    title: "Zápis do OR",
    link: "https://goo.gl/maps/re79poptwbFYxczBA",
    description:
      "Společnost Awoxo s.r.o. je zapsána v OR vedeném Krajským soudem v Brně, oddíl A, vložka 00000.",
    icon: IconGavel,
  },
];
