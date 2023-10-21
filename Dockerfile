FROM nginx

ADD nginx_deploy /nginx_deploy

COPY public /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD cp -a /nginx_deploy/. /etc/nginx/deploy_conf/; nginx -g "daemon off;"