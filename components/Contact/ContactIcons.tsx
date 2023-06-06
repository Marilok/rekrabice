import {
  Box, createStyles, Stack, Text, ThemeIcon,
} from "@mantine/core";
import React from "react";
import { IMPRESSUM_DATA } from "../../data/impressumData";

type ContactIconVariant = "white" | "gradient" | "legal";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

function getColorVariant(variant: any, theme: any) {
  if (variant === "gradient") {
    return theme.colors.gray[6];
  } if (variant === "white") {
    return theme.colors[theme.primaryColor][0];
  }
  return "";
}

function getBgVariant(variant: any, theme: any) {
  if (variant === "gradient") {
    return `linear-gradient(135deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][6]} 100%)`;
  } if (variant === "legal") {
    return `linear-gradient(135deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][6]} 100%)`;
  }
  return "none";
}

function getDescriptionColorVariant(variant: any, theme: any) {
  if (variant === "gradient") {
    return theme.black;
  } if (variant === "white") {
    return theme.white;
  }
  return "";
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: variant === "gradient" || variant === "white" ? theme.white : "",
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage: getBgVariant(variant, theme),
    backgroundColor: "transparent",
    color: theme.white,
  },

  title: {
    color: getColorVariant(variant, theme),
  },

  description: {
    color: getDescriptionColorVariant(variant, theme),
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: string;
  type?: "mail" | "phone" | "place";
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

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
  function GradientVariant() {
    return (
      <ThemeIcon size={40} radius="md" className={classes.icon}>
        <Icon size={24} />
      </ThemeIcon>
    );
  }

  function LegalVariant() {
    return (
      <ThemeIcon size={40} radius="md" className={classes.icon}>
        <Icon size={24} />
      </ThemeIcon>
    );
  }

  function FallbackVariant() {
    return (
      <Box mr="md">
        <Icon size={24} />
      </Box>
    );
  }
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" && <GradientVariant />}
      {variant === "legal" && <LegalVariant />}
      {!variant && <FallbackVariant />}

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

export default function ContactIconsList({
  data = IMPRESSUM_DATA,
  variant,
}: {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}) {
  const items = data.map((item) => (
    <ContactIcon key={item.title} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
