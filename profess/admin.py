from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import NewsInterest, EventsInterest, JobsInterest, User, Comment, Blog


class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {
            'fields': ('username', 'password')
        }),
        (_('Personal info'), {
            'fields': ('first_name', 'last_name', 'email', 'image') # add extra fields here...
        }),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {
            'fields': ('last_login', 'date_joined')
        }),
    )

# Register your models here.
admin.site.register(NewsInterest)
admin.site.register(EventsInterest)
admin.site.register(JobsInterest)
admin.site.register(User, UserAdmin)
admin.site.register(Comment)
admin.site.register(Blog)
