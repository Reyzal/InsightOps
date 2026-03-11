import { useQuery } from "@tanstack/react-query";

import { fetchKpis } from "../api/analyticsApi";
import type { DashboardFilters } from "../types";

export function useKpisQuery(filters: DashboardFilters) {
  return useQuery({
    queryKey: ["kpis", filters],
    queryFn: () => fetchKpis(filters),
  });
}

