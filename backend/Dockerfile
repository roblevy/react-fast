FROM python:3.10-alpine AS base

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

COPY . /app

FROM base AS local

ENV PYTHONDONTWRITEBYTECODE=1
EXPOSE 8000
CMD uvicorn main:app --reload --host 0.0.0.0
