"""
Develop Setting
"""

from .base import *

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

SECRET_KEY = get_secret_setting('SECRET_KEY')

MIDDLEWARE.insert(1,'whitenoise.middleware.WhiteNoiseMiddleware')

# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'fmz#(dtv29czr%t!tk!o+=67#mp$cl0o$dv2n3z*l^pggxlsfu'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    "amacrine.ee.columbia.edu",
    "neuronlp.fruitflybrain.org",
    "localhost"
]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:4200",
    "https://localhost:4200",
    "http://amacrine.ee.columbia.edu:4200",
    "http://amacrine.ee.columbia.edu:4202",
    "http://amacrine.ee.columbia.edu:4203",
    "http://lab.neuronlp.fruitflybrain.org",
    "http://www.fruitflybrain.org",
    "http://fruitflybrain.org",
    "https://dev.fruitflybrain.org",
    "https://amacrine.ee.columbia.edu:4200",
    "https://amacrine.ee.columbia.edu:4202",
    "https://amacrine.ee.columbia.edu:4203",
    "https://lab.neuronlp.fruitflybrain.org",
    "https://www.fruitflybrain.org",
    "https://fruitflybrain.org",
]

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS =  (
  os.path.join(BASE_DIR, 'static'),
)

# Media files (Images, Videos)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

MEDIA_URL = '/images/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/media')
