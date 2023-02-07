import { Box, createStyles, Stack, Text, ThemeIcon } from "@mantine/core";
import {
  IconAt,
  IconMapPin,
  IconPhone,
  IconSectionSign,
  IconSun,
} from "@tabler/icons";

type ContactIconVariant = "white" | "gradient" | "legal";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: variant === "gradient" || variant === "white" ? theme.white : "",
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : variant === "legal"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : "none",
    backgroundColor: "transparent",
    color: theme.white,
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : variant === "white"
        ? theme.colors[theme.primaryColor][0]
        : "",
  },

  description: {
    color:
      variant === "gradient"
        ? theme.black
        : variant === "white"
        ? theme.white
        : "",
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  type?: "mail" | "phone" | "place";
  description: React.ReactNode;
  variant?: ContactIconVariant;
}
// TODO: make hrefs to contact info (mail, phone, place)
function ContactIcon({
  icon: Icon,
  title,
  type,
  description,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : variant === "legal" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text
          size="xs"
          className={classes.title}
          color={variant === "legal" ? "dimmed" : ""}
        >
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: "Email", description: "kontakt@zelenakrabice.cz", icon: IconAt },
  { title: "Telefon", description: "(+420) 777 777 777", icon: IconPhone },
  { title: "Sídlo", description: "844 Morris Park avenue", icon: IconMapPin },
  { title: "Pracovní doba", description: "8:00 – 12!00", icon: IconSun },
  { title: "IČO", description: "87654321", icon: IconSectionSign },
];

export function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

// export function ContactIcons() {
//   return (
//     <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
//       <Box
//         sx={(theme) => ({
//           padding: theme.spacing.xl,
//           borderRadius: theme.radius.md,
//           backgroundColor: theme.white,
//         })}
//       >
//         <ContactIconsList />
//       </Box>

//       <Box
//         sx={(theme) => ({
//           padding: theme.spacing.xl,
//           borderRadius: theme.radius.md,
//           backgroundImage: `linear-gradient(135deg, ${
//             theme.colors[theme.primaryColor][6]
//           } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
//         })}
//       >
//         <ContactIconsList variant="white" />
//       </Box>
//     </SimpleGrid>
//   );
// }
