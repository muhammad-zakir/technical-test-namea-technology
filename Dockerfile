FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
RUN npm pkg delete scripts.prepare
RUN npm install
RUN npm run build

FROM node:lts-alpine
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
ENV LOG_LEVEL=warn
ENV NODE_ENV=production
COPY package*.json ./
COPY --from=builder ./app/dist ./dist
RUN npm pkg delete scripts.prepare
RUN npm ci --only=production --quiet

EXPOSE 3000
CMD ["node", "-r", "dotenv/config", "./dist/web/server.js"]
