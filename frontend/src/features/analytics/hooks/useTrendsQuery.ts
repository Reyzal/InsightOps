import { useQuery } from "@tanstack/react-query";

import { fetchTrends } from "../api/analyticsApi";
import type { DashboardFilters } from "../types";

export function useTrendsQuery(filters: DashboardFilters, granularity: "daily" | "monthly") {
  return useQuery({
    queryKey: ["trends", filters, granularity],
    queryFn: () => fetchTrends(filters, granularity),
  });
}

