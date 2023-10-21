FROM nginx

COPY dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx_deploy /etc/nginx/deploy_conf

EXPOSE 80

CMD nginx -g "daemon off;"