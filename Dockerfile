FROM node:slim
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
EXPOSE 4200 8000
CMD npm run start
