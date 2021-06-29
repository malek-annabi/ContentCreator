FROM ubuntu
RUN apt-get update
RUN apt-get install nodejs -y 
RUN apt-get install npm -y
RUN apt-get install apt-utils -y
WORKDIR /app
COPY . /
COPY package*.json ./
RUN npm install
COPY . /
EXPOSE 3500
CMD [“node”, “server.js”]