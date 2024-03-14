FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app .
COPY . .

EXPOSE 3000
# ENV HOST=0.0.0.0
# ENV PORT=3010

CMD ["node", "./build"]
