import { Avatar, Card, Flex, Text } from "@mantine/core";
import formatZipCode from "utils/formatters/formatZipCode";
import classes from "./styles.module.css";

interface StatsRingCardProps {
  title: string;
  favicon: string;
  address: string;
  city: string;
  zip: string;
  ico: any;
  dic: any;
  subtitle: string;
}

export default function StatsRingCard({
  title,
  favicon,
  address,
  city,
  zip,
  ico,
  dic,
  subtitle,
}: StatsRingCardProps) {
  return (
    <Card withBorder className={`${classes.card} w-1/2`}>
      <div className="flex justify-between items-center">
        <div>
          <Text
            className={classes.label}
            size="xs"
            c="dimmed"
            tt="uppercase"
            mb="xs"
          >
            {subtitle}
          </Text>
          <Text fz="xl" className={classes.label} fw="bold">
            {title}
          </Text>
          <Text mt="xs">{address}</Text>
          <Text>
            {formatZipCode(zip)}, {city}
          </Text>
          <Flex gap="sm" align="center" mt="xs">
            <Text size="xs" c="dimmed">
              IČ&nbsp;&nbsp;
            </Text>
            <Text size="md">{ico}</Text>
          </Flex>
          <Flex gap="sm" align="center">
            <Text size="xs" c="dimmed">
              DIČ
            </Text>
            <Text>{dic}</Text>
          </Flex>
        </div>
        <Avatar size={100} src={favicon} />
      </div>
    </Card>
  );
}
