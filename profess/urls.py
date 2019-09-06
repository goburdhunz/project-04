from django.urls import path
from .views import JobList, BlogDetailView, UserDetailView, BlogList, EventList, NewsList


urlpatterns = [
    path('profile/<int:pk>/', UserDetailView.as_view(), name='profile-page'),
    path('blogs/<int:pk>/', BlogDetailView.as_view(), name='blog-page'),
    path('blogs/', BlogList.as_view(), name='blogs-list'),
    path('jobs/', JobList.as_view(), name='job-list'),
    path('events/', EventList.as_view(), name='event-list'),
    path('news/', NewsList.as_view(), name='news-list')
]
