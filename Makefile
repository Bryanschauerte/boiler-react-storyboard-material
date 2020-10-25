


start: build
	docker run -it  --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true client:dev

dev-build:
	docker-compose build app

build:
	docker build -t client:dev .