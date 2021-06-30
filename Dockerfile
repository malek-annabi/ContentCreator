FROM node:14.7

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN apt-get install gnupg
RUN tee /etc/apt/sources.list.d/mongodb.list | echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse"
RUN sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list | echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" 
RUN apt-get update
RUN apt-get install mongodb -y

EXPOSE 3500
CMD [ "node", "server.js" ]