FROM node:16

WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@2.1.3 -g

COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]