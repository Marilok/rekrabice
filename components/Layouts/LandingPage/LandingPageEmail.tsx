// import { createStyles } from "@mantine/core";

// const useStyles = createStyles((theme) => ({
//   inner: {
//     display: "flex",
//     justifyContent: "space-between",
//     paddingTop: theme.spacing.xl * 4,
//     paddingBottom: theme.spacing.xl * 4,
//   },

//   content: {
//     maxWidth: 480,
//     marginRight: theme.spacing.xl * 3,

//     [theme.fn.smallerThan("md")]: {
//       maxWidth: "100%",
//       marginRight: 0,
//     },
//   },

//   title: {
//     color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontSize: 44,
//     lineHeight: 1.2,
//     fontWeight: 900,

//     [theme.fn.smallerThan("xs")]: {
//       fontSize: 28,
//     },
//   },

//   control: {
//     [theme.fn.smallerThan("xs")]: {
//       flex: 1,
//     },
//   },

//   image: {
//     flex: 1,
//     maxWidth: 400,

//     [theme.fn.smallerThan("md")]: {
//       display: "none",
//     },
//   },

//   highlight: {
//     position: "relative",
//     backgroundColor: theme.fn.variant({
//       variant: "light",
//       color: theme.primaryColor,
//     }).background,
//     borderRadius: theme.radius.sm,
//     padding: "4px 12px",
//   },
// }));

// export default function HeroBullets() {
//   const { classes } = useStyles();
//   return (
//     <div>
//       <Container>
//         <div className={classes.inner}>
//           <div className={classes.content}>
//             <Title className={classes.title}>
//               Začni používat pro své nákupy{" "}
//               <span className={classes.highlight}>vratné</span> krabice.
//             </Title>
//             <Text color="dimmed" mt="md">
//               Už nemusíš zbytečně plnit svůj domov kartónovými krabicemi.
//               Všechny ReKrabice můžeš vrátit a ušetřit tím kus lesa. 🌲
//             </Text>

//             <Group mt={30}>
//               <Button
//                 radius="xl"
//                 size="md"
//                 component={Link}
//                 href="/kontakt"
//                 className={classes.control}
//               >
//                 Začni používat ReKrabice
//               </Button>
//             </Group>
//           </div>
//           <Image
//             src={boox}
//             className={classes.image}
//             alt="me"
//             // width={"2000"}
//             // height="64"
//           />
//         </div>
//       </Container>
//     </div>
//   );
// }
