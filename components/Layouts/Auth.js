import { useState } from "react";
import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Space,
  Box,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSend, IconCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

export default function Auth({ supabase }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Chybný email"),
    },
  });

  const { classes } = useStyles();

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      setSuccess(true);
      // alert("Hurá, link už je ve Vaší poště!!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={460} my={30}>
      <Title className={classes.title} align="center">
        Přihlášení do systému
      </Title>
      <Text color="dimmed" size="sm" align="center">
        Zadejte svůj email a do pošty Vám zašleme odkaz na přihlášení
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form
          onSubmit={form.onSubmit((values) => {
            handleLogin(values.email);
          })}
        >
          <TextInput
            label="Email"
            placeholder="krteček@seznam.cz"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            {...form.getInputProps("email")}
          />
          <Space h="xs" />
          {success ? (
            <Button
              variant="gradient"
              type="button"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              className={classes.control}
              rightIcon={<IconCheck size={16} />}
              loading={loading}
              loaderPosition="right"
              fullWidth
              onClick={() => {
                setSuccess(false);
              }}
            >
              Odkaz odeslán
            </Button>
          ) : (
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
              type="submit"
              className={classes.control}
              rightIcon={<IconSend size={16} />}
              loading={loading}
              loaderPosition="right"
              fullWidth
            >
              {loading ? "Odesílání" : "Poslat odkaz"}
            </Button>
          )}
        </form>
      </Paper>
    </Container>
  );
}
