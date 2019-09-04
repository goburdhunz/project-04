from django.contrib import admin
from .models import News_Interest, Events_Interest, Jobs_Interest, User, Comment, Blog

# Register your models here.
admin.site.register(News_Interest)
admin.site.register(Events_Interest)
admin.site.register(Jobs_Interest)
admin.site.register(User)
admin.site.register(Comment)
admin.site.register(Blog)
