FROM node:6-slim

WORKDIR /usr/src/app

copy package.json .


RUN npm install &&  npm cache clean

copy . .

EXPOSE 5000

CMD ["npm","build"] && 
CMD ["npm","start"]
