from django.urls import path
from .views import JobList, BlogDetailView, UserDetailView, BlogList, EventList, NewsList, EventTypesList


urlpatterns = [
    path('profile/<int:pk>/', UserDetailView.as_view(), name='profile-page'),
    path('blogs/<int:pk>/', BlogDetailView.as_view(), name='blog-page'),
    path('blogs/', BlogList.as_view(), name='blogs-list'),
    path('myjobs/', JobList.as_view(), name='job-list'),
    path('myevents/', EventList.as_view(), name='event-list'),
    path('mynews/', NewsList.as_view(), name='news-list'),
    path('event_types/', EventTypesList.as_view(), name='event-type-list'),
]
