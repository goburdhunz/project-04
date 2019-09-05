from django.urls import path
from .views import UserDetailView, BlogList


urlpatterns = [
    path('profile/<int:pk>/', UserDetailView.as_view(), name='profile-page'),
    path('blogs/', BlogList.as_view(), name='blogs-page')
]
