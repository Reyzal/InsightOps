import type { Kpis } from "../../features/analytics/types";

interface KpiSectionProps {
  data: Kpis | undefined;
  isLoading: boolean;
  error: string | null;
}

export function KpiSection({ data, isLoading, error }: KpiSectionProps) {
  if (isLoading) return <div className="card">Loading KPIs...</div>;
  if (error) return <div className="card">Failed to load KPIs: {error}</div>;
  if (!data) return <div className="card">No KPI data available.</div>;

  return (
    <div className="grid kpi">
      <div className="card">Revenue: {data.total_revenue}</div>
      <div className="card">Orders: {data.total_orders}</div>
      <div className="card">AOV: {data.avg_order_value}</div>
      <div className="card">Units: {data.units_sold}</div>
    </div>
  );
}

