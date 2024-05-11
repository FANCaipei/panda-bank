FROM node:16

WORKDIR /wonder-wallet

COPY ./ /wonder-wallet

RUN npm install
EXPOSE 8686

CMD [ "node", "server.js" ]