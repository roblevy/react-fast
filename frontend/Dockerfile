FROM node:20-alpine AS base

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY ./src ./src
COPY ./www ./www

FROM base AS local

EXPOSE 8000
CMD npm run serve
