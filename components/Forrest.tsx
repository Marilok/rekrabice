import { Container, Text } from "@mantine/core";

interface ForrestProps {
  treesCount: number;
}

export default function Forrest({ treesCount = 0 }: ForrestProps) {
  return (
    <Container>
      <Text align="center" size="xl">
        Ušetříili jste {treesCount} stromů! 🥳
      </Text>
      {[...Array(treesCount)].map((x, i) => (
        <span key={i}>🌲</span>
      ))}
    </Container>
  );
}
