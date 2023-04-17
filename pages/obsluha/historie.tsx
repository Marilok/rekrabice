import { Table } from "@mantine/core";
import ObsluhaWrapper from "../../components/Layouts/Obsluha/ObsluhaWrapper";

export default function History() {
  const rows = [
    {
      id: 1,
      date: "2023-04-15",
      transactionType: "Vrácení ReKrabice",
      additionalInfo: "Vyplaceno v hotovosti",
    },
    {
      id: 2,
      date: "2023-04-15",
      transactionType: "Vrácení ReKrabice",
      additionalInfo: "",
    },
    {
      id: 3,
      date: "2023-04-17",
      transactionType: "Odeslání odměn",
      additionalInfo: "Celkem 100 Kč za 50 ReKrabic",
    },
  ];

  return (
    <ObsluhaWrapper title="Historie operací">
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Datum</th>
            <th>Typ transakce</th>
            <th>Další info</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.date}</td>
              <td>{row.transactionType}</td>
              <td>{row.additionalInfo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ObsluhaWrapper>
  );
}
