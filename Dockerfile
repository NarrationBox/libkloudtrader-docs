FROM node:8.11.4

WORKDIR /kloudtrader-docs/website

EXPOSE 3000 35729
COPY ./docs /kloudtrader-docs/docs
COPY ./website /kloudtrader-docs/website
RUN yarn install

CMD ["yarn", "start"]
