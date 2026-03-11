import type { TrendItem } from "../../features/analytics/types";

interface TrendChartProps {
  items: TrendItem[] | undefined;
  isLoading: boolean;
  error: string | null;
}

export function TrendChart({ items, isLoading, error }: TrendChartProps) {
  if (isLoading) return <div className="card">Loading trend chart...</div>;
  if (error) return <div className="card">Failed to load trends: {error}</div>;
  if (!items?.length) return <div className="card">No trend data available.</div>;

  return (
    <div className="card">
      <h3>Trend Chart (placeholder)</h3>
      <pre>{JSON.stringify(items.slice(0, 5), null, 2)}</pre>
    </div>
  );
}

