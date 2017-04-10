# getmusic.live (server)

## Local Setup
1. Clone repo and `npm i`
  - This will automatically build and start the server

## Commands
- `npm run start` - start the server
- `npm run build` - bundle via Webpacl
- `npm run build:serve` - build and then start the server

## Docker build/run
1. `docker build -t shinobi881/getmusiclive-server .`
2. `docker run -p 49160:80 -d shinobi881/getmusiclive-server`

## Docker componse
1. `docker-compose up [-d]` - '-d' is the option for detached mode
2. `docker-compose down` - This command is if you've run in detached mode