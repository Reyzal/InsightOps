import { useQuery } from "@tanstack/react-query";

import { httpGet } from "../../../lib/http";
import type { DashboardFilters } from "../types";

export function useTopRegionsQuery(filters: DashboardFilters) {
  return useQuery({
    queryKey: ["top-regions", filters],
    queryFn: async () => {
      const payload = await httpGet<{ data: { items: unknown[] } }>("/top-regions");
      return payload.data.items;
    },
  });
}

