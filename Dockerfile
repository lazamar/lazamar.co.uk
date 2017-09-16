FROM node:7.5

COPY ./ /home/app/

WORKDIR /home/app

RUN npm install -g yarn@latest

RUN yarn install

EXPOSE 8080

# Start server and redirect stdout and stderr
CMD yarn start
