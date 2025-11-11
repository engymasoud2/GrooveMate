FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Ensure Python can find the /app folder (so it can import "api")
ENV PYTHONPATH=/app

# Copy dependencies and install
COPY ./api/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app
COPY ./api ./api

# Expose the port for FastAPI
EXPOSE 8000

# Start the FastAPI app
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
