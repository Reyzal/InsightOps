interface RankingTableProps {
  title: string;
  items: unknown[] | undefined;
  isLoading: boolean;
  error: string | null;
}

export function RankingTable({ title, items, isLoading, error }: RankingTableProps) {
  if (isLoading) return <div className="card">Loading {title}...</div>;
  if (error) return <div className="card">Failed to load {title}: {error}</div>;
  if (!items?.length) return <div className="card">No {title.toLowerCase()} data.</div>;

  return (
    <div className="card">
      <h3>{title}</h3>
      <pre>{JSON.stringify(items.slice(0, 10), null, 2)}</pre>
    </div>
  );
}

