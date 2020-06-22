from rest_framework import serializers
from .models import Component, Member, Gallery, Post

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
        fields = ('id', 'title', 'desc', 'img')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'updated_at')
