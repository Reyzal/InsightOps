import { httpGet } from "../../../lib/http";
import type { DashboardFilters, Kpis, TrendItem, TransactionItem } from "../types";

interface DataEnvelope<T> {
  data: T;
}

interface TrendsPayload {
  items: TrendItem[];
}

interface TransactionsPayload {
  items: TransactionItem[];
  page: number;
  page_size: number;
  total_items: number;
}

function toQuery(filters: DashboardFilters): Record<string, string | undefined> {
  return {
    start_date: filters.startDate,
    end_date: filters.endDate,
    region: filters.region,
    category: filters.category,
    channel: filters.channel,
  };
}

export async function fetchKpis(filters: DashboardFilters): Promise<Kpis> {
  const payload = await httpGet<DataEnvelope<Kpis>>("/kpis", { query: toQuery(filters) });
  return payload.data;
}

export async function fetchTrends(
  filters: DashboardFilters,
  granularity: "daily" | "monthly" = "daily"
): Promise<TrendItem[]> {
  const payload = await httpGet<DataEnvelope<TrendsPayload>>("/trends", {
    query: { ...toQuery(filters), granularity },
  });
  return payload.data.items;
}

export async function fetchTransactions(
  filters: DashboardFilters,
  page: number
): Promise<TransactionsPayload> {
  const payload = await httpGet<DataEnvelope<TransactionsPayload>>("/transactions", {
    query: { ...toQuery(filters), page, page_size: 25 },
  });
  return payload.data;
}

