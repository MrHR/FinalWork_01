FROM node:6-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm install &&  npm cache clean

COPY . .

EXPOSE 3000

CMD ["npm","build"] && 
CMD ["npm", "start"]
