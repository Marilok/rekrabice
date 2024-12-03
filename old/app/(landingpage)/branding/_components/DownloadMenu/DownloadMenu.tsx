"use client";

import { ActionIcon, Menu, rem } from "@mantine/core";
import { IconDownload, IconPhoto, IconSvg } from "@tabler/icons-react";
import Link from "next/link";

interface DownloadMenuProps {
  svg: string;
  png: string;
  isWhite?: boolean;
}

export default function DownloadMenu({ svg, png, isWhite }: DownloadMenuProps) {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400} position="left">
      <Menu.Target>
        <ActionIcon
          download={svg}
          href={svg}
          target="_top"
          component={Link}
          variant="outline"
          color={isWhite ? "white" : undefined}
          size="xl"
          className="!absolute bottom-0 right-0"
          m="sm"
        >
          <IconDownload />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          component={Link}
          download={svg}
          href={`branding/${svg}`}
          target="_top"
          leftSection={<IconSvg style={{ width: rem(14), height: rem(14) }} />}
        >
          SVG
        </Menu.Item>
        <Menu.Item
          component={Link}
          download={png}
          href={`branding/${png}`}
          target="_top"
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }
        >
          PNG
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
