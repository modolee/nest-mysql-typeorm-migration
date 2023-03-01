FROM node:18-alpine

# curl for healthcheck
RUN apk --update --no-cache add curl

WORKDIR /usr/src/app

COPY package.json ./

CMD ["npm", "run", "start:debug"]