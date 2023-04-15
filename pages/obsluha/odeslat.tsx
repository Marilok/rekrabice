
import { Anchor, Button, CopyButton, List, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from '@tabler/icons-react';
import ObsluhaWrapper from "../../components/Layouts/Obsluha/ObsluhaWrapper";

export default function Obsluha() {
    const RETURN_CODE = "970 32 390";
    return (
        <ObsluhaWrapper title="Obsluha">
            <List type="ordered">
                <List.Item>
                Zavřete přepravku s uskladněnými ReKrabicemi
                </List.Item>
                <List.Item>
                Do&nbsp;
                    <Anchor href="https://admin.packeta.com/sign/in" target="_blank">
systému Zásilkovny
                        </Anchor>&nbsp;
                        zadejte kód
                <span className="font-bold"></span>
                  <CopyButton value={RETURN_CODE} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Kopírováno' : 'Kopírovat kód'} withArrow position="right">
            <Button variant="subtle" color={copied ? 'green' : 'gray'}  rightIcon={copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />} onClick={copy}>
{RETURN_CODE}
            </Button>
        </Tooltip>
      )}
    </CopyButton>
                </List.Item>
                <List.Item>
                Nalepte štítek na přepravku
                </List.Item>
            </List>
            </ObsluhaWrapper>
    );
    }