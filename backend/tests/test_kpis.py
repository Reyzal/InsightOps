from app import create_app


def test_kpis_returns_data_shape() -> None:
    app = create_app()
    client = app.test_client()

    response = client.get("/api/v1/kpis")
    payload = response.get_json()

    assert response.status_code == 200
    assert "data" in payload
    assert {"total_revenue", "total_orders", "avg_order_value", "units_sold"} <= set(payload["data"])

