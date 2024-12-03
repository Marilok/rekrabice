"use client";

import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import addPallete from "../_functions/addPallete";

export default function AddButton({ palletes }: { palletes: any[] }) {
  const router = useRouter();

  return (
    <Button
      leftSection={<IconPlus />}
      mt="xl"
      variant="outline"
      onClick={async () => {
        await addPallete(palletes[palletes.length - 1].pallete_id);
        router.refresh();
      }}
    >
      Přidat novou prázdnou paletu
    </Button>
  );
}
