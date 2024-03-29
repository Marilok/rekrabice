import { Container, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import classes from "./FeaturesAsymmetrical.module.css";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text fw={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

interface FeaturesAsymmetricalProps {
  icon: React.FC<any>;
  title: string;
  description: string;
}

export default function FeaturesAsymmetrical({
  data,
}: {
  data: FeaturesAsymmetricalProps[];
}) {
  const items = data.map((item: any) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 1, md: 3 }} verticalSpacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
