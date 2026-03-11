export interface DashboardFilters {
  startDate?: string;
  endDate?: string;
  region?: string;
  category?: string;
  channel?: string;
}

export interface Kpis {
  total_revenue: number;
  total_orders: number;
  avg_order_value: number;
  units_sold: number;
}

export interface TrendItem {
  period: string;
  revenue: number;
  orders: number;
}

export interface TransactionItem {
  order_id: string;
  order_date: string;
  region: string;
  product_name: string;
  quantity: number;
  net_sales: number;
}

