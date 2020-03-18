FROM node:10
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8000
CMD ["node", "server"]