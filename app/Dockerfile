FROM nginx:1.23.3-alpine as build

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "micro-app-angular14: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY ./dist/app/browser .

USER nginx
