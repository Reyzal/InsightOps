import { useQuery } from "@tanstack/react-query";

import { fetchTransactions } from "../api/analyticsApi";
import type { DashboardFilters } from "../types";

export function useTransactionsQuery(filters: DashboardFilters, page: number) {
  return useQuery({
    queryKey: ["transactions", filters, page, 25],
    queryFn: () => fetchTransactions(filters, page),
  });
}

