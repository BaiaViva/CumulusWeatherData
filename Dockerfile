FROM node:14

RUN apt-get update

RUN mkdir /CumulusWeatherData

WORKDIR /CumulusWeatherData

COPY package*.json ./

RUN npm install 

RUN npm install express

ADD . /CumulusWeatherData

RUN npm install axios

RUN npm install xml2json

RUN npm install xml-formatter

EXPOSE 8080

CMD [ "node", "server.js" ]




