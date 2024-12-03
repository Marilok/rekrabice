"use client";

import { Button, NumberInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import assignLoopToBox from "utils/supabase_helpers/assignLoopToBox";
import createLoopUpdate from "utils/supabase_helpers/createLoopUpdate";
import createNewLoop from "utils/supabase_helpers/createNewLoop";
import addBatchToPallete from "../_functions/addBatchToPallete";
import getBoxesFromBatch from "../_functions/getBoxesFromBatch";

export default function AddBatchForm() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      batchId: 0,
      palleteId: 0,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        await addBatchToPallete(values.palleteId, values.batchId);
        const boxes = await getBoxesFromBatch(values.batchId);
        boxes.forEach(async (box: any) => {
          const newLoopId = await createNewLoop(box.box_id);
          await assignLoopToBox(box.box_id, newLoopId);
          await createLoopUpdate(newLoopId, 102);
        });

        notifications.show({
          title: "Šarže přidána na paletu",
          message: `Šarže ${values.batchId} byla přidána na paletu ${values.palleteId}`,
          color: "green",
        });
        form.reset();
        router.refresh();
      })}
    >
      <Stack mt="xl">
        <NumberInput
          label="ID šarže"
          required
          {...form.getInputProps("batchId")}
        />
        <NumberInput
          label="ID palety"
          required
          min={1001}
          max={9999}
          {...form.getInputProps("palleteId")}
        />
        <Button
          leftSection={<IconPlus />}
          variant="outline"
          type="submit"
          color="blue"
        >
          Přidat šarži na paletu
        </Button>
      </Stack>
    </form>
  );
}
