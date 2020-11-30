# FruitFlyBrain.org website
<center>
| <a href='#development'>Development</a> | <a href='#deployment'>Deployment</a> |
</center>

## Setup
```bash
conda create -n ffbo_website python=3.6 nodejs -c conda-forge
conda activate ffbo_website
pip install Django django-cors-headers djangorestframework django-filter markdown Pillow
npm install @angular/cli@9.1.1
```

## Development
### Start and Configure Django
```bash
# cd ffbo_django
# conda activate ffbo_website
python manage.py migrate  # only required before first start-up to populate sqlite3 database
python manage.py runserver 0.0.0.0:4201
```

Create super-user admin account:
```bash
# cd ffbo_django
# conda activate ffbo_website
python manage.py runsslserver --certificate serve/server.crt --key serve/server.key 0.0.0.0:4201 --settings ffbo.settings.dev
```

Afterwards, go to `localhost:4201/admin`, type in the super-user admin username/password created above to access content page.

### Start Angular
The following line will build angular project, watch for changes and serve webpack server on port 4200.
The `--open` flag will automatically open browser on `localhost:4200` once the source code is built.
```bash
# in a separate terminal
# cd ffbo_angular
# conda activate ffbo_website
ng serve --port 4200 --ssl true --ssl-cert ../ffbo_django/stunnel/server.crt --ssl-key ../ffbo_django/stunnel/server.key
```

## Deployment
In order to deploy the platform securely, we need to configure Django to serve static and media files using standalone servers.

To be more specific, a given web server (e.g. Apache or Nginx) can handle HTTP request coming from the Angular front-end, which then talks to the Django's running python processing using either WSGI or ASGI protocols implemented by tools such as Uvicorn to execute python commands. 

Additionally, to serve static files, a ASGI MiddleWare called Whitenoise is used to route HTTP request matching static file URLs directly to the local storage of static files instead of invoking python calls via Uvicorn. This can successfully serve all static files (including all text contents)

However, as of Nov. 30th 2020, media files (images, videos) cannot be served locally. 


### Start and Configure Django
The deployment of danjo uses the `ffbo.settings.prod` settings file.

```bash
# cd ffbo_django
uvicorn ffbo.asgi:application --port 4201 --host 0.0.0.0 --ssl-keyfile ./serve/server.key --ssl-certfile serve/server.crt
```

### Start Angular
The following line will build angular project, watch for changes and serve webpack server on port 4200.
The `--open` flag will automatically open browser on `localhost:4200` once the source code is built.
```bash
# in a separate terminal
# cd ffbo_angular
ng serve --port 4200 --ssl true --ssl-cert ../ffbo_django/stunnel/server.crt --ssl-key ../ffbo_django/stunnel/server.key --prod=true
```
