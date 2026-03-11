import { useQuery } from "@tanstack/react-query";

import { httpGet } from "../../../lib/http";
import type { DashboardFilters } from "../types";

export function useTopProductsQuery(filters: DashboardFilters) {
  return useQuery({
    queryKey: ["top-products", filters],
    queryFn: async () => {
      const payload = await httpGet<{ data: { items: unknown[] } }>("/top-products");
      return payload.data.items;
    },
  });
}

