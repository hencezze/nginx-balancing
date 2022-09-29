FROM node:alpine

COPY package.json .
RUN npm install
COPY server.js .

CMD ["npm","start"]
