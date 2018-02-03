FROM node:latest as builder

WORKDIR /app
COPY package.json yarn.lock /app
RUN yarn install

COPY . /app
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/public /usr/share/nginx/html
