"use client";

import {
  Container,
  Flex,
  Grid,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { CONTACT } from "../../../../data/CONTACT_DATA";
import logoSrc from "../../../../public/logo_text.svg";
import formatDate from "../../../../utils/formatters/formatDate";
import formatInvoiceNumber from "../../../../utils/formatters/formatInvoiceNumber";
import StatsRingCard from "./FirmCard";
import classes from "./styles.module.css";

export default function UI({ data }: any) {
  const rows = data.products.map((product: any) => (
    //   TODO: change the key
    <TableTr key={product.dimensions}>
      <TableTd>{product.count}</TableTd>
      <TableTd>{`ReKrabice (${product.dimensions} mm)`}</TableTd>
      <TableTd>{product.price} Kč</TableTd>
      <TableTd>{product.price * product.count} Kč</TableTd>
    </TableTr>
  ));

  return (
    <div className="w-full h-auto">
      <Flex align="center" justify="space-between" h="60" px="md" my="md">
        <Image alt="logo" src={logoSrc} height="50" />
        <Text fw="bold" size="xl">
          {data.status_id === 1 ? "PROFORMA FAKTURA " : "VYÚČTOVACÍ FAKTURA "}
          {formatInvoiceNumber(data.invoice_number)}
        </Text>
      </Flex>
      <Grid p="md" className={classes.wrapper}>
        {data.status_id !== 1 && (
          <Grid.Col
            span="auto"
            className="flex flex-col justify-center items-center"
            p="xl"
          >
            <Text c="white">Celkem bylo zaplaceno</Text>
            <Text fw="bold" fz="40" c="white">
              {data.total_price} Kč
            </Text>
          </Grid.Col>
        )}
        {data.status_id === 1 && (
          <>
            <Grid.Col
              span="auto"
              className="flex justify-center items-center flex-col"
            >
              <Text c="white">Prosíme o zaplacení částky</Text>
              <Text fw="bold" fz="40" c="white">
                {data.total_price} Kč
              </Text>
            </Grid.Col>
            <Grid.Col span="auto" className="flex justify-center items-center">
              <Image
                alt="QR payment code"
                width="150"
                height="150"
                className="rounded"
                // eslint-disable-next-line max-len
                src={`https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=${CONTACT.bankAccountNumber}&bankCode=${CONTACT.bankAccountBank}&amount=${data.total_price}&currency=CZK&vs=${data.invoice_number}&message=Platba%20za%20objednavku}`}
              />
            </Grid.Col>
            <Grid.Col
              span="auto"
              className="flex justify-center items-center flex-col"
            >
              <Grid>
                <Grid.Col span="auto">
                  <Stack align="flex-end" gap="0" w={120}>
                    <Text c="white">Způsob platby</Text>
                    <Text c="white">Bankovní účet</Text>
                    <Text c="white">Variabilní symbol</Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col span="auto">
                  <Stack justify="center" align="flex-start" gap="0">
                    <Text c="white">Převodem</Text>
                    <Text fw="bold" c="white">
                      {CONTACT.bankAccountFull}
                    </Text>
                    <Text fw="bold" c="white">
                      {data.invoice_number}
                    </Text>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Grid.Col>{" "}
          </>
        )}
      </Grid>
      <Grid
        grow
        align="center"
        px="md"
        className="border-0 border-t border-white border-solid bg-slate-300"
      >
        <Grid.Col
          span="auto"
          py="md"
          border-0
          className="border-0 border-r border-white border-solid"
        >
          <Text ta="center">
            Datum vystavení
            <br />
            {formatDate(data.issue_date)}
          </Text>
        </Grid.Col>
        <Grid.Col span="auto" className="border-0" py="md">
          <Text ta="center">
            Datum splatnosti
            <br />
            <span className="font-bold">{formatDate(data.maturity_date)}</span>
          </Text>
        </Grid.Col>
        {data.taxable_date && (
          <Grid.Col
            py="md"
            span="auto"
            className="border-0 border-l border-white border-solid"
          >
            <Text ta="center">
              Datum zdanitelného plnění
              <br />
              {formatDate(data.taxable_date)}
            </Text>
          </Grid.Col>
        )}
      </Grid>
      <Container mx="sm">
        <Flex gap="xl" my="xl">
          <StatsRingCard
            title={data.retailer_id.legal_name}
            favicon={data.retailer_id.favicon_url}
            address={data.retailer_id.address}
            city={data.retailer_id.city}
            zip={data.retailer_id.zip}
            ico={data.retailer_id.ico}
            dic={data.retailer_id.dic}
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
        <Table>
          <TableThead>
            <TableTr>
              <TableTh> </TableTh>
              <TableTh>Produkt</TableTh>
              <TableTh>Cena za MJ</TableTh>
              <TableTh>Celkem</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
          <TableTfoot>
            <TableTr className="border-none">
              <TableTd> </TableTd>
              <TableTd> </TableTd>
              <TableTd> </TableTd>
              <TableTd className="font-bold">
                Celkem{" "}
                {data.products.reduce(
                  (accumulator: number, element: any) =>
                    accumulator + element.count * element.price,
                  0,
                )}{" "}
                Kč
              </TableTd>
            </TableTr>
          </TableTfoot>
        </Table>
      </Container>
      <Text
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full -translate-y-2"
        c="dimmed"
        ta="center"
      >
        {CONTACT.platce}
        <br />
        {CONTACT.vlozka}
      </Text>
    </div>
  );
}
