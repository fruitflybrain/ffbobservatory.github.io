from django.db import models

class Component(models.Model):
    def __str__(self):
        return 'Component: ' + self.title

    def __unicode__(self):
        return 'Component: ' + self.title

    title = models.CharField(max_length=256)
    shortDesc = models.TextField()
    desc = models.TextField()
    url = models.URLField()
    img = models.ImageField()


class Post(models.Model):
    def __str__(self):
        return 'Post: ' + self.title

    def __unicode__(self):
        return 'Post: ' + self.title

    title = models.CharField(max_length=1024)
    body = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)


class Member(models.Model):
    def __str__(self):
        return 'Member: ' + self.name

    def __unicode__(self):
        return 'Member: ' + self.name

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
    def __str__(self):
        return 'Gallery: ' + self.title

    def __unicode__(self):
        return 'Gallery: ' + self.title

    title = models.CharField(max_length=128)
    img = models.ImageField()
    desc = models.TextField(blank=True)
    component = models.CharField(
      max_length=128,
      blank=True,
      default='na',
      choices=[
        ('nlp', 'NeuroNLP'),
        ('gfx', 'NeuroGFX'),
        ('fbl', 'FlyBrainLab'),
        ('neuroarch', 'NeuroArch'),
        ('na', 'N/A')
      ])
    species = models.CharField(
      max_length=128,
      blank=True,
      default='na',
      choices=[
        ('adult', 'Adult'),
        ('larva', 'Larva'),
        ('na', 'N/A'),
      ])
    dataset = models.CharField(
      max_length=128,
      blank=True,
      default='na',
      choices=[
        ('flycircuit', 'Fly Circuit'),
        ('hemibrain', 'Hemibrain'),
        ('l1em', 'Larva L1EM'),
        ('7col', 'Janelia 7 Columns'),
        ('na', 'N/A'),
      ])
    tag_url  = models.URLField(
      null=True,
      blank=True
    )


class Announcement(models.Model):
    def __str__(self):
        return 'Annoucement: ' + self.updated_at.strftime('%Y-%m-%dT%H:%M:%S.%f%z')

    def __unicode__(self):
        return 'Annoucement: ' + self.updated_at.strftime('%Y-%m-%dT%H:%M:%S.%f%z')

    desc = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)
    url = models.URLField(null=True, blank=True)

    # whether this annoucement should be shown
    show = models.BooleanField(default=False)

class BrainMaps(models.Model):
    def __str__(self):
        return 'BrainMaps: ' + self.title

    def __unicode__(self):
        return 'BrainMaps: ' + self.title

    title = models.CharField(max_length=256)
    subtitle = models.CharField(max_length=512)
    img = models.ImageField()
    desc = models.TextField()
    url = models.URLField()
