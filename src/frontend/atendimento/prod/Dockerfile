FROM node:alpine as build

ARG PUBLIC_URL
ENV PUBLIC_URL=$PUBLIC_URL

WORKDIR /app
COPY ./package.json ./
RUN npm install

COPY ./ ./
RUN npm run build

FROM nginx:alpine as publish
COPY --from=build /app/build /usr/share/nginx/html
COPY ./prod/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80