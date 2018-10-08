FROM node:8.11

WORKDIR /usr/src/its-not-trivial

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]