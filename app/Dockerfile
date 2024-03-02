FROM node:20-alpine
RUN npm install -g nodemon
RUN npm install -g knex
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:nodemon"]