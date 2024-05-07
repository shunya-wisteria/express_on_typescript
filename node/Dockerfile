FROM node:lts-alpine

ENV NODE_ENV=development

WORKDIR /app

RUN apk update && \
    apk add git && \
    apk add openssh && \
    npm install -g express-generator

ENV HOST 0.0.0.0
EXPOSE 3000