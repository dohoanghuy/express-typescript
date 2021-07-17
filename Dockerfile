FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY src src

ENV PORT=8080

EXPOSE 8080

CMD [ "yarn", "start" ]