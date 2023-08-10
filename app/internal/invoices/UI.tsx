"use client";

import { Grid, Stack, Table, Text } from "@mantine/core";
import Image from "next/image";
import { CONTACT } from "../../../data/CONTACT_DATA";
import formatDate from "../../../utils/formatDate";
import classes from "./styles.module.css";

export default function UI({ data }: any) {
  const rows = data.products.map((product: any) => (
    //   TODO: change the key
    <tr key={product.width}>
      <td>{product.count}</td>
      <td>{`ReKrabice ${product.width}x${product.depth}x${product.height}`}</td>
      <td>{product.price} Kč</td>
      <td>{product.price} Kč</td>
      <td>{product.price * product.count} Kč</td>
    </tr>
  ));

  return (
    <div id="invoice-id">
      {/* <Flex align="center" justify="space-between" h="120" px="md" py={40}>
        <Image alt="logo" src={logoSrc} height="60" />
        <Text fw="bold" size="xl">
          Proforma faktura &nbsp;
          {formatInvoiceNumber(data.invoice_number)}
        </Text>
      </Flex> */}
      <Grid p="md" className={classes.wrapper} grow>
        <Grid.Col
          span={1}
          className="flex justify-center items-center flex-col"
        >
          <Text c="white">Prosíme o zaplacení částky</Text>
          <Text fw="bold" size="40" c="white">
            {data.total_price} Kč
          </Text>
        </Grid.Col>
        <Grid.Col span={1} className="flex justify-center items-center">
          <Image
            alt="QR payment code"
            width="150"
            height="150"
            // eslint-disable-next-line max-len
            src={`https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=${CONTACT.bankAccountNumber}&bankCode=${CONTACT.bankAccountBank}&amount=${data.total_price}&currency=CZK&vs=${data.invoice_number}&message=Platba%20za%20objednavku}`}
          />
        </Grid.Col>
        <Grid.Col
          span={1}
          className="flex justify-center items-center flex-col"
        >
          <Grid>
            <Grid.Col span="auto">
              <Stack align="flex-end" gap="0" w={120}>
                <Text c="white">Způsob platby</Text>
                <Text c="white">Bankovní účet</Text>
                <Text c="white">VS</Text>
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
        </Grid.Col>
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
      {/* <Flex gap="xl" mt={40}>
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
      </Flex> */}
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
              {data.products.reduce(
                (accumulator: number, element: any) =>
                  accumulator + element.count * element.price,
                0,
              )}{" "}
              Kč
            </td>
          </tr>
        </tfoot>
      </Table>
      <Text className="absolute bottom-0 right-1/2 -translate-1/2" c="dimmed">
        údaj o zápisu včetně oddílu a vložky (u právnických osob);
      </Text>
    </div>
  );
}
