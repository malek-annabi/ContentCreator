FROM ubuntu
RUN apt-get update
RUN apt-get install nodejs -y 
RUN apt-get install npm -y
RUN apt-get install apt-utils -y
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
CMD {"npm","start"}
