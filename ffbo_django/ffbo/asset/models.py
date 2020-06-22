from django.db import models

class Component(models.Model):
    title = models.CharField(max_length=256)
    shortDesc = models.TextField()
    desc = models.TextField()
    url = models.URLField()
    img = models.ImageField()

class Post(models.Model):
    title = models.CharField(max_length=1024)
    body = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

class Member(models.Model):
    name = models.CharField(max_length=128)
    desc = models.TextField(blank=True)
    role = models.CharField(
      max_length=128,
      blank=True,
      choices=[
        ('alumni', 'Alumni'),
        ('collaborators', 'Collaborators'),
        ('contributors', 'Contributors'),
        ('team', 'Team')
      ])
    url = models.URLField(null=True, blank=True)
    img = models.ImageField(null=True, blank=True)

class Gallery(models.Model):
    title = models.CharField(max_length=128)
    img = models.ImageField()
    desc = models.TextField(blank=True)
