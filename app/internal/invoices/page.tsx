"use client";

import { Button, Grid, Stack, Text } from "@mantine/core";
import { jsPDF } from "jspdf";
import Image from "next/image";
import { CONTACT } from "../../../data/CONTACT_DATA";

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
        <Image
          alt="QR payment code"
          width="80"
          height="80"
          src={`https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=${CONTACT.bankAccountNumber}&bankCode=${CONTACT.bankAccountBank}&amount=${data.sum}&currency=CZK&vs=${data.number}&message=Platba%20za%20objednavku}`}
        />
        <Text>Faktura</Text>
        <Text>
          {String(data.number).replace(/(\d{4})(\d{2})(\d{4})/, "$1-$2-$3")}
        </Text>
        <div>
          <Text>Prosíme o zaplacení částky</Text>
          <Text fw="bold">{data.sum} Kč</Text>
        </div>
        <Grid>
          <Grid.Col span="auto">
            <Stack>Způsob platby</Stack>
            <Stack>Bankovní účet</Stack>
            <Stack>Variabilní symbol</Stack>
          </Grid.Col>
          <Grid.Col span="auto">
            <Stack>Převodem</Stack>
            <Stack>{CONTACT.bankAccountFull}</Stack>
            <Stack>{data.number}</Stack>
          </Grid.Col>
        </Grid>

        <Grid grow align="center">
          <Grid.Col
            span="auto"
            className="flex justify-center align-left"
            p="md"
          >
            <Text align="left">
              Datum vystavení
              <br />
              {formatedDate}
            </Text>
          </Grid.Col>
          <Grid.Col
            span="auto"
            className="flex justify-center align-left"
            p="md"
          >
            <Text align="left">
              Datum splatnosti
              <br />
              <span className="font-bold">{maturityDate}</span>
            </Text>
          </Grid.Col>
          <Grid.Col
            span="auto"
            className="flex justify-center align-left"
            p="md"
          >
            <Text align="left">
              Datum zdanitelného plnění
              <br />
              {formatedDate}
            </Text>
          </Grid.Col>
        </Grid>
        <div>
          <Text>Odběratel</Text>
          <Text>{data.legalName}</Text>
          <Text>{data.street}</Text>
          <Text>
            {data.zip.replace(/(\d{3})(\d{2})/, "$1 $2")}
            &nbsp;&nbsp;
            {data.city}
          </Text>
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
