import os


class Config:
    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    BIGQUERY_PROJECT_ID = os.getenv("BIGQUERY_PROJECT_ID", "")
    BIGQUERY_DATASET = os.getenv("BIGQUERY_DATASET", "insightops_analytics")

