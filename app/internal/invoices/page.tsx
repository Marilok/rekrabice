"use client";

/* eslint-disable react/self-closing-comp */

import { Flex, Grid, Stack, Table, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import { CONTACT } from "../../../data/CONTACT_DATA";
import logoSrc from "../../../public/logo_text.svg";
import StatsRingCard from "./FirmCard";

// ! This page is unfinished but can be used to built on top of for future development

export default function Page() {
  // const generatePdf = (data: any) => {
  //   // * The library constructor starts with lowercase, causing eslint error
  //   // eslint-disable-next-line new-cap
  //   const doc = new jsPDF();

  //   console.log(document.getElementById("invoice-id"));

  //   doc.html(document.getElementById("invoice-id")!, {
  //     // TODO: can this be fixed?
  //     // eslint-disable-next-line no-shadow
  //     callback(doc) {
  //       doc.setTextColor("#000000");
  //       doc.save(`Proformová fakturas ${data.number} pro ${data.retailer}`, {
  //         returnPromise: true,
  //       });
  //     },
  //   });
  // };

  const data = {
    retailer: "Decathlon",
    logoUrl:
      "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/retailers_favicons/decathlon.svg",
    sum: 3000.3,
    number: 2023110001,
    ico: 11111,
    dic: 1111,
    street: "Česká 90/22",
    zip: "90888",
    city: "Brno",
    legalName: "Decasport s.r.o.",
  };

  // const handleClick = async () => {
  //   generatePdf(data);
  // };

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  const formatedDate = `${dd}.${mm}.${yyyy}`;

  const fortnightAway = new Date(Date.now() + 12096e5);
  const maturityDD = String(fortnightAway.getDate()).padStart(2, "0");
  const maturityMM = String(fortnightAway.getMonth() + 1).padStart(2, "0"); // January is 0!
  const maturityYYYY = fortnightAway.getFullYear();
  const maturityDate = `${maturityDD}.${maturityMM}.${maturityYYYY}`;

  const { classes } = useStyles();

  return (
    <>
      <div id="invoice-id">
        <Flex align="center" justify="space-between" h="120" px="md" py={40}>
          <Image alt="logo" src={logoSrc} height="60" />
          <Text fw="bold" size="xl">
            Proformová faktura &nbsp;
            {String(data.number).replace(/(\d{4})(\d{2})(\d{4})/, "$1-$2-$3")}
          </Text>
        </Flex>
        <Grid p="md" className={classes.wrapper} grow>
          <Grid.Col
            span={1}
            className="flex justify-center items-center flex-col"
          >
            <Text color="white">Prosíme o zaplacení částky</Text>
            <Text fw="bold" size={40} color="white">
              {data.sum} Kč
            </Text>
          </Grid.Col>
          <Grid.Col span={1} className="flex justify-center items-center">
            <Image
              alt="QR payment code"
              width="150"
              height="150"
              // eslint-disable-next-line max-len
              src={`https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=${CONTACT.bankAccountNumber}&bankCode=${CONTACT.bankAccountBank}&amount=${data.sum}&currency=CZK&vs=${data.number}&message=Platba%20za%20objednavku}`}
            />
          </Grid.Col>
          <Grid.Col
            span={1}
            className="flex justify-center items-center flex-col"
          >
            <Grid>
              <Grid.Col span="auto">
                <Stack align="flex-end" spacing="0" w={120}>
                  <Text color="white">Způsob platby</Text>
                  <Text color="white">Bankovní účet</Text>
                  <Text color="white">VS</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span="auto">
                <Stack justify="center" align="flex-start" spacing="0">
                  <Text color="white">Převodem</Text>
                  <Text fw="bold" color="white">
                    {CONTACT.bankAccountFull}
                  </Text>
                  <Text fw="bold" color="white">
                    {data.number}
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        <Grid
          grow
          align="center"
          px="md"
          className="border-t border-x-0 border-b-0 border-white border-solid bg-slate-300"
        >
          <Grid.Col span="auto" py="md">
            <Text align="center">
              Datum vystavení
              <br />
              {formatedDate}
            </Text>
          </Grid.Col>
          <Grid.Col
            span="auto"
            className="border-x border-y-0 border-white border-solid"
            py="md"
          >
            <Text align="center">
              Datum splatnosti
              <br />
              <span className="font-bold">{maturityDate}</span>
            </Text>
          </Grid.Col>
          <Grid.Col py="md" span="auto">
            <Text align="center">
              Datum zdanitelného plnění
              <br />
              {formatedDate}
            </Text>
          </Grid.Col>
        </Grid>
        <Flex gap="xl" mt={40}>
          <StatsRingCard
            title={data.legalName}
            favicon={data.logoUrl}
            address={data.street}
            city={data.city}
            zip={data.zip}
            ico={data.ico}
            dic={data.dic}
            subtitle="Odběratel"
          />
          <StatsRingCard
            title={CONTACT.legalName}
            favicon={CONTACT.faviconUrl}
            address={CONTACT.address}
            city={CONTACT.city}
            zip={CONTACT.zip}
            ico={CONTACT.ico}
            dic={CONTACT.dic}
            subtitle="Dodavatel"
          />
        </Flex>

        <Table mt={40}>
          <thead>
            <tr>
              <th> </th>
              <th> </th>
              <th>Cena za MJ</th>
              <th>Celkem</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td className="font-bold">
                Celkem{" "}
                {elements.reduce(
                  (acc, element) => acc + element.count * element.price,
                  0,
                )}{" "}
                Kč
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
      {/* <Button onClick={handleClick} className="absolute">
        Generovat fakturu
      </Button> */}
    </>
  );
}

const elements = [
  { count: 1000, price: 7, description: "ReKrabice 100 x 100 x 100" },
  { count: 1000, price: 7, description: "ReKrabice 100 x 100 x 100" },
];

const rows = elements.map((element) => (
  <tr key={element.description}>
    <td>{element.count}</td>
    <td>{element.description}</td>
    <td>{element.price} Kč</td>
    <td>{element.price * element.count} Kč</td>
  </tr>
));

// TODO: make this support colors from partners branding, mix the exisiting gradient with retailers color

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][7]
    } 0%, ${theme.colors[theme.primaryColor][9]} 100%)`,
  },
  dates: {
    backgroundColor: theme.colors[theme.primaryColor][9],
  },
}));
