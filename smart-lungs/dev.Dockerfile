#syntax=docker/dockerfile:1.4
FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.js .

ENV NEXT_TELEMETRY_DISABLED 1

CMD npm run dev