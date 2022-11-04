FROM node:16-bullseye

WORKDIR /usr/app

COPY ./todoapp-react/. .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
