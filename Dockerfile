FROM node:11 as builder

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn -s

COPY . /app
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/public /usr/share/nginx/html
