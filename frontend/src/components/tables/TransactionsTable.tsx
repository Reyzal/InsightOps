import type { TransactionItem } from "../../features/analytics/types";

interface TransactionsTableProps {
  rows: TransactionItem[] | undefined;
  isLoading: boolean;
  error: string | null;
}

export function TransactionsTable({ rows, isLoading, error }: TransactionsTableProps) {
  if (isLoading) return <div className="card">Loading transactions...</div>;
  if (error) return <div className="card">Failed to load transactions: {error}</div>;
  if (!rows?.length) return <div className="card">No transactions found.</div>;

  return (
    <div className="card">
      <h3>Transactions (first 10)</h3>
      <pre>{JSON.stringify(rows.slice(0, 10), null, 2)}</pre>
    </div>
  );
}

