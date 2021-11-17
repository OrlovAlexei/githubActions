FROM nginx:1.17
COPY ./build /usr/share/nginx/html
RUN ls -la
ENV JSFOLDER=/usr/share/nginx/html/static/js/*.js
COPY ./start-nginx.sh /usr/bin/start-nginx.sh
RUN chmod +x /usr/bin/start-nginx.sh
WORKDIR /usr/share/nginx/html

ENTRYPOINT [ "start-nginx.sh" ]

# docker build -t multifrontend .
# docker run -d -p 8081:80 --rm --name insmfront -e ENV=SUperENV -e BASE_URL=https://dev.oprosso.ru/api  multifrontend