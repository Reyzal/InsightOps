class ValidationError(ValueError):
    """Raised when request validation fails."""


def bad_request(code: str, message: str) -> tuple[dict[str, dict[str, str]], int]:
    return {"error": {"code": code, "message": message}}, 400

