"""ffbo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from .asset import views

router = routers.DefaultRouter()
router.register(r'member', views.MemberViewSet)
router.register(r'component', views.ComponentViewSet)
router.register(r'gallery', views.GalleryViewSet)
router.register(r'post', views.PostViewSet)
router.register(r'announcement', views.AnnouncementViewSet)
router.register(r'gallery', views.GalleryViewSet)
router.register(r'brainmaps', views.BrainMapsViewSet)
router.register(r'frontpage/video', views.FrontPageVideoViewSet)
router.register(r'frontpage/cards', views.FrontPageCardViewSet)
router.register(r'pageheader', views.PageHeaderViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
