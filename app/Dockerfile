FROM node:20-alpine
COPY . /usr/src/
WORKDIR /usr/src/
RUN npm install
RUN npm install -g nodemon
RUN npm install -g knex
EXPOSE 3000
CMD ["npm", "run", "start:nodemon"]