"use client";

import { Affix, Button, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowDown } from "@tabler/icons-react";

export default function AffixHint() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }} visibleFrom="md">
      <Transition transition="slide-up" mounted={scroll.y === 0}>
        {(transitionStyles) => (
          <Button
            leftSection={
              <IconArrowDown style={{ width: rem(16), height: rem(16) }} />
            }
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            size="lg"
          >
            Rádi uslyšíme tvůj názor
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
