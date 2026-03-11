from dataclasses import dataclass
from datetime import date
from enum import StrEnum

from werkzeug.datastructures import MultiDict

from ..utils.errors import ValidationError


class TrendGranularity(StrEnum):
    DAILY = "daily"
    MONTHLY = "monthly"


@dataclass(frozen=True)
class AnalyticsQueryParams:
    start_date: date | None = None
    end_date: date | None = None
    region: str | None = None
    category: str | None = None
    channel: str | None = None

    @classmethod
    def from_request_args(cls, args: MultiDict[str, str]) -> "AnalyticsQueryParams":
        start_date = _parse_date(args.get("start_date"))
        end_date = _parse_date(args.get("end_date"))
        if start_date and end_date and start_date > end_date:
            raise ValidationError("start_date must be less than or equal to end_date")

        return cls(
            start_date=start_date,
            end_date=end_date,
            region=args.get("region"),
            category=args.get("category"),
            channel=args.get("channel"),
        )


def _parse_date(value: str | None) -> date | None:
    if not value:
        return None

    try:
        return date.fromisoformat(value)
    except ValueError as exc:
        raise ValidationError("Date values must be ISO format YYYY-MM-DD") from exc

