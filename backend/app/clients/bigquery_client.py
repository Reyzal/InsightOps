from pathlib import Path
from typing import Any


class BigQueryClient:
    def __init__(self, project_id: str, dataset: str) -> None:
        self.project_id = project_id
        self.dataset = dataset
        self._queries_dir = Path(__file__).resolve().parents[1] / "queries"

    def load_query(self, filename: str) -> str:
        path = self._queries_dir / filename
        return path.read_text(encoding="utf-8")

    def execute(self, query: str, params: dict[str, Any] | None = None) -> list[dict[str, Any]]:
        _ = (query, params)
        # Phase 1 scaffold. Real BigQuery execution is added in Phase 2.
        return []

