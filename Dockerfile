FROM node:14

ENV PORT 5000

WORKDIR /usr/app

COPY --chown=node:node . .

COPY package*.json ./

RUN npm install

EXPOSE 5000

USER node

CMD [ "npm", "start" ]