import { useState } from "react";

import { TrendChart } from "../components/charts/TrendChart";
import { KpiSection } from "../components/dashboard/KpiSection";
import { FilterBar } from "../components/filters/FilterBar";
import { RankingTable } from "../components/tables/RankingTable";
import { TransactionsTable } from "../components/tables/TransactionsTable";
import { useKpisQuery } from "../features/analytics/hooks/useKpisQuery";
import { useTopProductsQuery } from "../features/analytics/hooks/useTopProductsQuery";
import { useTopRegionsQuery } from "../features/analytics/hooks/useTopRegionsQuery";
import { useTransactionsQuery } from "../features/analytics/hooks/useTransactionsQuery";
import { useTrendsQuery } from "../features/analytics/hooks/useTrendsQuery";
import type { DashboardFilters } from "../features/analytics/types";

export function DashboardPage() {
  const [filters, setFilters] = useState<DashboardFilters>({});

  const kpis = useKpisQuery(filters);
  const trends = useTrendsQuery(filters, "daily");
  const topProducts = useTopProductsQuery(filters);
  const topRegions = useTopRegionsQuery(filters);
  const transactions = useTransactionsQuery(filters, 1);

  return (
    <main className="layout">
      <h1>InsightOps Dashboard</h1>

      <FilterBar filters={filters} onChange={setFilters} />

      <KpiSection
        data={kpis.data}
        isLoading={kpis.isLoading}
        error={kpis.error ? kpis.error.message : null}
      />

      <TrendChart
        items={trends.data}
        isLoading={trends.isLoading}
        error={trends.error ? trends.error.message : null}
      />

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <RankingTable
          title="Top Products"
          items={topProducts.data}
          isLoading={topProducts.isLoading}
          error={topProducts.error ? topProducts.error.message : null}
        />
        <RankingTable
          title="Top Regions"
          items={topRegions.data}
          isLoading={topRegions.isLoading}
          error={topRegions.error ? topRegions.error.message : null}
        />
      </div>

      <TransactionsTable
        rows={transactions.data?.items}
        isLoading={transactions.isLoading}
        error={transactions.error ? transactions.error.message : null}
      />
    </main>
  );
}

