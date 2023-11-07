FROM --platform=linux/amd64 node:16.15.1-alpine

WORKDIR /app
COPY src/Acrisure/ /app/
RUN npm install

EXPOSE 3000

# CMD ["npm", "run", "start:connected"]
CMD ["npm", "run", "start:production"]