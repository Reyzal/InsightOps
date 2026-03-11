import type { DashboardFilters } from "../../features/analytics/types";

interface FilterBarProps {
  filters: DashboardFilters;
  onChange: (next: DashboardFilters) => void;
}

export function FilterBar({ filters, onChange }: FilterBarProps) {
  return (
    <div className="card">
      <h3>Filters</h3>
      <div className="grid">
        <input
          value={filters.region ?? ""}
          placeholder="Region"
          onChange={(event) => onChange({ ...filters, region: event.target.value || undefined })}
        />
        <input
          value={filters.category ?? ""}
          placeholder="Category"
          onChange={(event) => onChange({ ...filters, category: event.target.value || undefined })}
        />
        <input
          value={filters.channel ?? ""}
          placeholder="Channel"
          onChange={(event) => onChange({ ...filters, channel: event.target.value || undefined })}
        />
      </div>
    </div>
  );
}

