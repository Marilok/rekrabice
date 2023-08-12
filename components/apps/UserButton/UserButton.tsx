"use server";

import {
  Avatar,
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from "@mantine/core";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { IconChevronRight } from "@tabler/icons-react";
import { cookies } from "next/headers";
import React from "react";
import classes from "./UserButton.module.css";

interface UserButtonProps extends UnstyledButtonProps {
  image?: string;
  icon?: React.ReactNode;
}

export default async function UserButton({
  image,
  icon,
  ...others
}: UserButtonProps) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const email = user?.email;
  const name = user?.id;

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <Avatar radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
      </Group>
    </UnstyledButton>
  );
}
