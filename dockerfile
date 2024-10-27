FROM node:18-alpine3.20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "build" ]

FROM node:18-alpine3.20 AS runner
