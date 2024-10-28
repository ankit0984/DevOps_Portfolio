FROM node:20-alpine AS deps
COPY package*.json ./
# RUN npm install --production
RUN npm install --omit=dev --legacy-peer-deps


FROM node:20-alpine AS build
WORKDIR /app
COPY . .
COPY --from=deps /node_modules ./node_modules
RUN npm run build

FROM node:20-alpine AS prod
WORKDIR /app
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]