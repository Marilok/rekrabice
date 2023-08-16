// import {
//   Checkbox,
//   Combobox,
//   Group,
//   //   TextInput,
//   useCombobox,
// } from "@mantine/core";
// // import { IconChevronRight } from "@tabler/icons-react";
// import { useState } from "react";
// import classes from "./TransferList.module.css";

// const mock = [{ name: "Apples" }, { name: "Bananas" }];

// // interface RenderListProps {
// //   options: { name: string }[];
// //   onTransfer(options: { name: string }[]): void;
// //   type: "forward" | "backward";
// // }

// // function RenderList({ options, onTransfer, type }: RenderListProps) {
// //   const combobox = useCombobox();
// //   const [value, setValue] = useState<{ name: string }[]>([]);
// //   const [search, setSearch] = useState("");

//   //   const handleValueSelect = (val: string) =>
//   //     setValue((current) =>
//   //       current.includes(val)
//   //         ? current.filter((v) => v !== val)
//   //         : [...current, val],
//   //     );

// //   const items = options
// //     .filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()))
// //     .map((item) => (
// //       <Combobox.Option
// //         value={item.name}
// //         key={item.name}
// //         active={value.includes(item)}
// //         onMouseOver={() => combobox.resetSelectedOption()}
// //       >
// //         <Group gap="sm">
// //           <Checkbox
// //             checked={value.includes(item.name)}
// //             onChange={() => {}}
// //             aria-hidden
// //             tabIndex={-1}
// //             style={{ pointerEvents: "none" }}
// //           />
// //           <span>{item.name}</span>
// //         </Group>
// //       </Combobox.Option>
// //     ));

//   return (
//     <div className={classes.renderList} data-type={type}>
//       {/* <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
//         <Combobox.EventsTarget>
//           <Group wrap="nowrap" gap={0} className={classes.controls}>
//             <TextInput
//               placeholder="Search groceries"
//               classNames={{ input: classes.input }}
//               value={search}
//               onChange={(event) => {
//                 setSearch(event.currentTarget.value);
//                 combobox.updateSelectedOptionIndex();
//               }}
//             />
//             <ActionIcon
//               radius={0}
//               variant="default"
//               size={36}
//               className={classes.control}
//               onClick={() => {
//                 onTransfer(value);
//                 setValue([]);
//               }}
//             >
//               <IconChevronRight className={classes.icon} />
//             </ActionIcon>
//           </Group>
//         </Combobox.EventsTarget>

//         <div className={classes.list}>
//           <Combobox.Options>
//             {items.length > 0 ? (
//               items
//             ) : (
//               <Combobox.Empty>Nothing found....</Combobox.Empty>
//             )}
//           </Combobox.Options>
//         </div>
//       </Combobox> */}
//     </div>
//   );
// }

// export default function TransferList({
//   palletes,
//   form,
// }: {
//   palletes: any;
//   form: any;
// }) {
//   const [data, setData] = useState<[any[], any[]]>([[], mock]);

//   const handleTransfer = (transferFrom: number, options: any[]) =>
//     setData((current) => {
//       const transferTo = transferFrom === 0 ? 1 : 0;

//       console.log(options);

//       const transferFromData = current[transferFrom].filter((item) => !options.includes(item.name));
//       const transferToData = [...current[transferTo], ...options];
//       const result = [[{ name: "hi" }], [{ name: "hey" }]];
//       //   result[transferFrom] = transferFromData;
//       //   result[transferTo] = transferToData;
//       //   console.log("result");
//       //   console.log(result);
//       return result as [any[], any[]];

//       //! produces [string, Arra(2)] instead of [Array(1), Array(1)]
//     });

//   return (
//     <div className={classes.root}>
//       <RenderList
//         type="forward"
//         options={data[0]}
//         onTransfer={(options) => {
//           handleTransfer(0, options);
//         }}
//       />
//       <RenderList
//         type="backward"
//         options={data[1]}
//         onTransfer={(options) => {
//           handleTransfer(1, options);
//         }}
//       />
//     </div>
//   );
// }

export default function TransferList() {
  return <>Hi</>;
}
