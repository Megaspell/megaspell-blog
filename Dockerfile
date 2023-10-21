FROM nginx

ADD nginx_deploy /nginx_deploy

COPY public /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD cp -r /nginx_deploy /etc/nginx/deploy_conf
CMD nginx -g "daemon off;"