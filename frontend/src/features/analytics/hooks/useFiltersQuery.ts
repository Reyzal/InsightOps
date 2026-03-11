import { useQuery } from "@tanstack/react-query";

import { httpGet } from "../../../lib/http";

interface FilterValues {
  regions: string[];
  categories: string[];
  channels: string[];
}

export function useFiltersQuery() {
  return useQuery({
    queryKey: ["filters"],
    queryFn: async () => {
      const payload = await httpGet<{ data: FilterValues }>("/filters");
      return payload.data;
    },
  });
}

