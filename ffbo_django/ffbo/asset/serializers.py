from rest_framework import serializers
from .models import (
  Component, Member, Gallery, Post,
  Announcement, BrainMaps,
  FrontPageVideo, FrontPageCard,
  PageHeader
)

class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = ('id', 'title', 'shortDesc', 'desc', 'url', 'img')

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id', 'name', 'role', 'desc', 'url', 'img')

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ('id', 'title', 'desc', 'img', 'component', 'species', 'dataset', 'tag_url')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'updated_at')

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ('id', 'desc', 'url', 'show', 'updated_at')

class BrainMapsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BrainMaps
        fields = ('id', 'title', 'subtitle', 'img', 'url', 'desc', 'info_url')

class FrontPageVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FrontPageVideo
        fields = ('id', 'imagefile', 'videofile', 'updated_at')

class FrontPageCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = FrontPageCard
        fields = ('id', 'order', 'title', 'subtitle', 'desc', 'img', 'url', 'link', 'updated_at')

class PageHeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageHeader
        fields = ('id', 'title', 'subtitle', 'desc', 'updated_at')
