import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import boox from "../../../public/boox.png";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: 400,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Zálohovaná a{" "}
              <span className={classes.highlight}>vratná</span> krabice pro
              eshopové zásilky.
            </Title>
            <Text color="dimmed" mt="md">
              Rozlučte se s jednorázovými kartónovými krabicemi a přivítejte
              udržitelnost s naší znovupoužitelnou krabicí.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Ekologická</b> – už to není žádný greenwashing, ale
                skutečná změna. Za život krabice celkově ušetří 70 % CO2 oproti těm kartónovým
              </List.Item>
              <List.Item>
                <b>Recyklovatelná</b> – po skončení životnosti krabice (okolo 100 cest)
                se dají recyklovat a vytvořit z nich tak nové
              </List.Item>
              <List.Item>
                <b>Žádné nové náklady</b> – vratné krabice Vás budou stát stejně, v některých případech i méně než ty kartónové
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                component={Link}
                href="/kontakt"
                className={classes.control}
              >
                Kontaktujte nás
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                component={Link}
                href="/o-nas"
                className={classes.control}
              >
                O nás
              </Button>
            </Group>
          </div>
          <Image
            src={boox}
            className={classes.image}
            alt="me"
            // width={"2000"}
            // height="64"
          />
        </div>
      </Container>
    </div>
  );
}
