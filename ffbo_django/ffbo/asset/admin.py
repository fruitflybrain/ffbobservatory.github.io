from django.contrib import admin
from .models import (
  Member, Component, Gallery, Post,
  Announcement, BrainMaps, FrontPageVideo, 
  FrontPageCard, PageHeader
)
# Register your models here.
admin.site.register(Member)
admin.site.register(Component)
admin.site.register(Gallery)
admin.site.register(Post)
admin.site.register(Announcement)
admin.site.register(BrainMaps)
admin.site.register(FrontPageVideo)
admin.site.register(FrontPageCard)
admin.site.register(PageHeader)
