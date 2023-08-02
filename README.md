# React and FastAPI starter app

Get going with a "full-stack" app with React on the front-end and FastAPI on the backend.

## Getting started

Just start Docker Compose in the usual way, and you're off and running:

```
docker compose up
```

The front-end is available at `localhost:8000` and the backend via `curl localhost:8080`.

## Running the tests

```bash
docker compose exec backend python -m pytest
```

Or, if that's a bit long to type, just do:

```bash
scripts/test  # all your favourite pytest flags can go here too
```

## What's this for?

You might be doing a code test one day, and want to get going with a
"full-stack" app and not want to have to bother getting the basics off the
ground.

This repo is to help you do just that!
