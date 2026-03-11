# InsightOps

Sales and operations analytics portal built with a Flask backend and a React + TypeScript frontend.

## Phase 1 Status

- Backend application factory scaffold is in `backend/`
- Frontend Vite scaffold is in `frontend/`
- API and frontend features are skeletons aligned to the tech spec

## Project Structure

- `backend/` Flask API, service/data layers, SQL query files, pytest tests
- `frontend/` React app with TanStack Query, routing, and dashboard shell

## Run Locally

### Backend

```bash
cd backend
pip install -e .
python run.py
```

Backend URL: `http://127.0.0.1:5000`  
Health endpoint: `GET /api/v1/health`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: `http://127.0.0.1:5173`

## Environment Variables

Copy `.env.example` to `.env` and fill values:

- `BIGQUERY_PROJECT_ID`
- `BIGQUERY_DATASET`
- `FLASK_ENV`

