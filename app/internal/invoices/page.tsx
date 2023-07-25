"use client";

import { Button, Flex, Grid, Stack, Table, Text } from "@mantine/core";
import { jsPDF } from "jspdf";
import Image from "next/image";
import { CONTACT } from "../../../data/CONTACT_DATA";
import brandSrc from "../../../public/images/logos/aktin.svg";
import logoSrc from "../../../public/logo_text.svg";

export default function Page() {
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.html(document.getElementById("id")!, {
      callback(doc) {
        doc.save();
      },
      width: 180,
      html2canvas: {
        scale: 0.7,
      },
    });
  };

  const handleClick = async () => {
    generatePdf();
  };

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

  const data = {
    retailer: "Aktin",
    sum: 3000.3,
    number: 2023110001,
    ico: 11111,
    dic: 1111,
    street: "Česká 90/22",
    zip: "90888",
    city: "Brno",
    legalName: "Ullis s.r.o.",
  };

  return (
    <>
      <div id="id" className="w-[800px]">
        <Flex align={"center"} justify={"space-between"} h={"120"} p={"md"}>
          <Image alt="logo" src={logoSrc} height={"60"} />
          <Text fw={"bold"}>
            FAKTURA&nbsp;
            {String(data.number).replace(/(\d{4})(\d{2})(\d{4})/, "$1-$2-$3")}
          </Text>
        </Flex>
        <Grid h={120} p={"md"} bg="var(--mantine-color-green-6)">
          <Grid.Col span={"auto"}>
            <div>
              <Text>Prosíme o zaplacení částky</Text>
              <Text fw="bold" size={"xl"}>
                {data.sum} Kč
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col span={"auto"}>
            <Grid>
              <Grid.Col span="auto">
                <Stack justify="center" align="flex-end" spacing={"0"}>
                  <Text>Způsob platby</Text>
                  <Text>Bankovní účet</Text>
                  <Text>Variabilní symbol</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span="auto">
                <Stack justify="center" align="flex-start" spacing={"0"}>
                  <Text>Převodem</Text>
                  <Text fw={"bold"}>{CONTACT.bankAccountFull}</Text>
                  <Text fw={"bold"}>{data.number}</Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>

        <Grid
          grow
          align="center"
          bg="var(--mantine-color-green-5)"
          px="md"
          className="border-t border-x-0 border-white border-solid"
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
        <Image
          alt="QR payment code"
          width="80"
          height="80"
          src={`https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=${CONTACT.bankAccountNumber}&bankCode=${CONTACT.bankAccountBank}&amount=${data.sum}&currency=CZK&vs=${data.number}&message=Platba%20za%20objednavku}`}
        />
        <div>
          <Text>Odběratel</Text>
          <Image alt="logo" src={brandSrc} width="70" height={"60"} />
          <Text>{data.legalName}</Text>
          <Text>{data.street}</Text>
          <Text>
            {data.zip.replace(/(\d{3})(\d{2})/, "$1 $2")}
            &nbsp;&nbsp;
            {data.city}
          </Text>
        </div>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Cena za MJ</th>
              <th>Celkem</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
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
        <div>
          <Text>Děkujeme Vám, že s námi šetříte naše lesy!</Text>
          <Text>{CONTACT.legalName}</Text>
          <Text>{CONTACT.address}</Text>
          <Text>
            {CONTACT.zip.replace(/(\d{3})(\d{2})/, "$1 $2")}
            &nbsp;&nbsp;
            {CONTACT.city}
          </Text>
          <Text>IČ {CONTACT.ico}</Text>
          <Text>DIČ {CONTACT.dic}</Text>
        </div>
      </div>
      <Button
        onClick={handleClick}
        className="absolute top-1/2 left-1/2 -translate-x-1/2"
      >
        Generovat fakturu
      </Button>
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
