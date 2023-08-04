import { Avatar, Card, Flex, Text, createStyles, rem } from "@mantine/core";
import formatZipCode from "../../../lib/formatZipCode";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  label: {
    lineHeight: 1,
  },

  lead: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: rem(22),
    lineHeight: 1,
  },

  ring: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

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
  const { classes } = useStyles();

  return (
    <Card withBorder className={`${classes.card} w-1/2`}>
      <div className="flex justify-between items-center">
        <div>
          <Text
            className={classes.label}
            size="xs"
            color="dimmed"
            transform="uppercase"
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
            <Text size="xs" color="dimmed">
              IČ&nbsp;&nbsp;
            </Text>
            <Text size="md">{ico}</Text>
          </Flex>
          <Flex gap="sm" align="center">
            <Text size="xs" color="dimmed">
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
