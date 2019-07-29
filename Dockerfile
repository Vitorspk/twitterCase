FROM node:10.16.0-jessie-slim

RUN apt-get update && npm install twitter mysql-json inquirer --save

COPY ./package*.json ./

WORKDIR /app

EXPOSE 3000

CMD [ "node" ]