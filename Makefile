docker:
	up && build:
		docker compose up --build
	clear:
		docker system prune -a --volumes


prisma:
	npx prisma studio


services:

auth-service:
	docker-compose build auth-service
	docker-compose up auth-service

client:
	npm i
	npm run dev

server:	
	npm i

postgres: