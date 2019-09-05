from django.urls import path
from .views import UserDetailView


urlpatterns = [
    path('profile/<int:pk>/', UserDetailView.as_view(), name='profile-page')
]
