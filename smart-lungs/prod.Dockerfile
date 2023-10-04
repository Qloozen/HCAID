# See original source https://github.com/vercel/next.js/tree/canary/examples/with-docker-compose
FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.js .

# Environment variables must be present at build time
# ARG NEXT_MY_ENV_VAR
# ENV NEXT_MY_ENV_VAR=${NEXT_MY_ENV_VAR}

# Build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Step 2. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=1001:1001 /app/.next/standalone ./
COPY --from=builder --chown=1001:1001 /app/.next/static ./.next/static

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3002
ENV PORT 3002

CMD ["node", "server.js"]