"""
Deploy Setting
"""

import os
from .base import *

SECRET_KEY = get_secret_setting('SECRET_KEY')

MIDDLEWARE.insert(1,'whitenoise.middleware.WhiteNoiseMiddleware')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = [
    "amacrine.ee.columbia.edu",
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
    "https://amacrine.ee.columbia.edu:4200",
    "https://amacrine.ee.columbia.edu:4202",
    "https://amacrine.ee.columbia.edu:4203",
    "https://lab.neuronlp.fruitflybrain.org",
    "https://www.fruitflybrain.org",
    "https://fruitflybrain.org"
]



# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static_prod')
STATICFILES_DIRS =  (
    os.path.join(BASE_DIR, 'static'),
)
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Media files (Images, Videos)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

# MEDIA_URL = '/images/'
# MEDIA_ROOT = os.path.join(STATIC_ROOT, 'media')
