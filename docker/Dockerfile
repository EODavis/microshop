FROM node:22-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci --omit=dev
COPY common ./common

COPY services ./services
ENV NODE_ENV=production

USER node

