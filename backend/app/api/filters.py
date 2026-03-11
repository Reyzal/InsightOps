from ..services.analytics_service import AnalyticsService
from . import api_bp


@api_bp.get("/filters")
def get_filters() -> tuple[dict[str, dict[str, list[str]]], int]:
    service = AnalyticsService.from_app_config()
    filters = service.get_filters()
    return {"data": filters}, 200
