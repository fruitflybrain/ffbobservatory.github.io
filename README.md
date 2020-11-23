# FruitFlyBrain.org website

## Setup
```bash
conda create -n ffbo_website python=3.6 nodejs -c conda-forge
conda activate ffbo_website
pip install Django django-cors-headers djangorestframework django-filter markdown Pillow
npm install @angular/cli@9.1.1
```

## Start and Configure Django
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
python manage.py createsuperuser
```

Afterwards, go to `localhost:4201/admin`, type in the super-user admin username/password created above to access content page.

## Start Angular
The following line will build angular project, watch for changes and serve webpack server on port 4200.
The `--open` flag will automatically open browser on `localhost:4200` once the source code is built.
```bash
# in a separate terminal
# cd ffbo_angular
# conda activate ffbo_website
ng serve --open --port=4200
```