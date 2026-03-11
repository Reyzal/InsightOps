from flask import request

from ..schemas.analytics import AnalyticsQueryParams, TrendGranularity
from ..services.analytics_service import AnalyticsService
from ..utils.errors import ValidationError, bad_request
from . import api_bp


def _get_service() -> AnalyticsService:
    return AnalyticsService.from_app_config()


@api_bp.get("/kpis")
def get_kpis() -> tuple[dict[str, dict], int]:
    params = AnalyticsQueryParams.from_request_args(request.args)
    result = _get_service().get_kpis(params)
    return {"data": result}, 200


@api_bp.get("/trends")
def get_trends() -> tuple[dict[str, dict], int]:
    params = AnalyticsQueryParams.from_request_args(request.args)
    granularity = request.args.get("granularity", TrendGranularity.DAILY.value)
    result = _get_service().get_trends(params=params, granularity=granularity)
    return {"data": {"items": result}}, 200


@api_bp.get("/top-products")
def get_top_products() -> tuple[dict[str, dict], int]:
    params = AnalyticsQueryParams.from_request_args(request.args)
    limit = int(request.args.get("limit", "10"))
    sort_by = request.args.get("sort_by", "revenue")
    result = _get_service().get_top_products(params=params, limit=limit, sort_by=sort_by)
    return {"data": {"items": result}}, 200


@api_bp.get("/top-regions")
def get_top_regions() -> tuple[dict[str, dict], int]:
    params = AnalyticsQueryParams.from_request_args(request.args)
    result = _get_service().get_top_regions(params=params)
    return {"data": {"items": result}}, 200


@api_bp.get("/transactions")
def get_transactions() -> tuple[dict[str, dict], int]:
    params = AnalyticsQueryParams.from_request_args(request.args)
    page = int(request.args.get("page", "1"))
    page_size = int(request.args.get("page_size", "25"))
    sort_by = request.args.get("sort_by", "order_date")
    sort_order = request.args.get("sort_order", "desc")
    payload = _get_service().get_transactions(
        params=params,
        page=page,
        page_size=page_size,
        sort_by=sort_by,
        sort_order=sort_order,
    )
    return {"data": payload}, 200


@api_bp.errorhandler(ValidationError)
def handle_validation_error(error: ValidationError) -> tuple[dict[str, dict[str, str]], int]:
    return bad_request(code="INVALID_QUERY_PARAM", message=str(error))

