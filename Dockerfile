FROM node:8.12.0-onbuild
COPY . /app/
WORKDIR /app/
RUN npm install -g yarn
RUN yarn install
RUN cd client && yarn && yarn build
EXPOSE 4000
CMD ["node", "index.js" ]
