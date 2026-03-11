from collections.abc import Sequence
from dataclasses import asdict

from flask import current_app

from ..clients.bigquery_client import BigQueryClient
from ..schemas.analytics import AnalyticsQueryParams, TrendGranularity
from ..utils.errors import ValidationError


class AnalyticsService:
    def __init__(self, bq_client: BigQueryClient) -> None:
        self._bq_client = bq_client

    @classmethod
    def from_app_config(cls) -> "AnalyticsService":
        return cls(
            BigQueryClient(
                project_id=current_app.config["BIGQUERY_PROJECT_ID"],
                dataset=current_app.config["BIGQUERY_DATASET"],
            )
        )

    def get_filters(self) -> dict[str, list[str]]:
        return {
            "regions": ["APAC", "EMEA"],
            "categories": ["Hardware", "Software"],
            "channels": ["Online", "Partner"],
        }

    def get_kpis(self, params: AnalyticsQueryParams) -> dict[str, float | int]:
        _ = asdict(params)
        return {
            "total_revenue": 0.0,
            "total_orders": 0,
            "avg_order_value": 0.0,
            "units_sold": 0,
        }

    def get_trends(self, params: AnalyticsQueryParams, granularity: str) -> list[dict[str, float | int | str]]:
        _ = asdict(params)
        if granularity not in (TrendGranularity.DAILY.value, TrendGranularity.MONTHLY.value):
            raise ValidationError("granularity must be one of: daily, monthly")
        return []

    def get_top_products(
        self, params: AnalyticsQueryParams, limit: int, sort_by: str
    ) -> list[dict[str, float | int | str]]:
        _ = asdict(params)
        if limit < 1 or limit > 100:
            raise ValidationError("limit must be between 1 and 100")
        if sort_by not in {"revenue", "quantity"}:
            raise ValidationError("sort_by must be one of: revenue, quantity")
        return []

    def get_top_regions(self, params: AnalyticsQueryParams) -> list[dict[str, float | int | str]]:
        _ = asdict(params)
        return []

    def get_transactions(
        self,
        params: AnalyticsQueryParams,
        page: int,
        page_size: int,
        sort_by: str,
        sort_order: str,
    ) -> dict[str, Sequence[dict[str, float | int | str]] | int]:
        _ = asdict(params)
        if page < 1:
            raise ValidationError("page must be greater than or equal to 1")
        if page_size < 1 or page_size > 100:
            raise ValidationError("page_size must be between 1 and 100")
        if sort_order not in {"asc", "desc"}:
            raise ValidationError("sort_order must be one of: asc, desc")
        if sort_by not in {"order_date", "net_sales", "quantity", "region", "product_name"}:
            raise ValidationError(
                "sort_by must be one of: order_date, net_sales, quantity, region, product_name"
            )
        return {"items": [], "page": page, "page_size": page_size, "total_items": 0}

