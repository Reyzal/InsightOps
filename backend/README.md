# InsightOps Backend (Flask)

This backend is implemented with the **Flask framework** using the application factory pattern.

## Run in PyCharm

1. Open the `backend` folder as project root or set working directory to `backend`.
2. Configure the Python interpreter (Python 3.13+).
3. Install dependencies:
   - `pip install -e .`
4. Create a run configuration:
   - Type: `Python`
   - Script path: `run.py`
   - Working directory: `<repo>/backend`
5. Run configuration.

API base path: `/api/v1`  
Health check: `GET http://127.0.0.1:5000/api/v1/health`

## Flask CLI Option

You can also use:

```bash
cd backend
set FLASK_APP=wsgi:app
flask run --port 5000
```

