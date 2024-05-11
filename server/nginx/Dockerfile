FROM nginx

RUN mkdir /etc/nginx/logs
RUN touch /etc/nginx/logs/error.log
RUN touch /etc/nginx/logs/nginx.pid

COPY ./ca/certificate.crt /etc/ssl/certificate.crt
COPY ./ca/private.key /etc/ssl/private.key

RUN chmod +w /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443