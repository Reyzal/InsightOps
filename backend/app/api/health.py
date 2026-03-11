from . import api_bp


@api_bp.get("/health")
def health() -> tuple[dict[str, str], int]:
    return {"status": "ok"}, 200
