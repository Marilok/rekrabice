export const data = [
  {
    date: "01.09.2024",
    income: 420,
    balance: 526.12,
    expenses: 2948.91,
    liabilities: 18000,
  },
  {
    date: "01.10.2024",
    income: 420,
    balance: 526.12,
    expenses: 533.98,
    liabilities: 20000,
  },
];

export interface FinancialRecord {
  date: string;
  income: number;
  balance: number;
  expenses: number;
  liabilities: number;
}

export const financialData: FinancialRecord[] = data;
