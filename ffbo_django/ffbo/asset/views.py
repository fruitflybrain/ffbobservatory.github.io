from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets
from .models import (
  Member, Component, Gallery, Post, Announcement,
  BrainMaps, FrontPageVideo, FrontPageCard,
  PageHeader
)
from .serializers import (
  MemberSerializer, ComponentSerializer,
  GallerySerializer, PostSerializer,
  AnnouncementSerializer, BrainMapsSerializer,
  FrontPageVideoSerializer, FrontPageCardSerializer,
  PageHeaderSerializer
)


class MemberViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class ComponentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

class GalleryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class AnnouncementViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

class BrainMapsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = BrainMaps.objects.all()
    serializer_class = BrainMapsSerializer

class FrontPageVideoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = FrontPageVideo.objects.all()
    serializer_class = FrontPageVideoSerializer

class FrontPageCardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = FrontPageCard.objects.all()
    serializer_class = FrontPageCardSerializer

class PageHeaderViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = PageHeader.objects.all()
    serializer_class = PageHeaderSerializer
