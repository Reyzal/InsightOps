from app import create_app


def test_trends_invalid_granularity_returns_400() -> None:
    app = create_app()
    client = app.test_client()

    response = client.get("/api/v1/trends?granularity=yearly")
    payload = response.get_json()

    assert response.status_code == 400
    assert payload["error"]["code"] == "INVALID_QUERY_PARAM"

