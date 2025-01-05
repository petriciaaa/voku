FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

EXPOSE 3000

# Добавляем nodemon
RUN npm install -g nodemon

# Изменяем команду запуска
CMD ["sh", "-c", "npm run migrate && nodemon -L --watch src --ext ts,js --exec npm run start:dev"]