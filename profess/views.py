import os
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT
from django.http import Http404
import requests
from .models import NewsInterest, EventsInterest, JobsInterest, User, Comment, Blog
reed_key = os.getenv('REED_API_KEY')
event_key = os.getenv('EVENTBRITE_API_KEY')
news_key = os.getenv('NEWS_API_KEY')
from .serializers import UserSerializer, EventSerializer, NewsSerializer, JobSerializer, CommentSerializer, BlogSerializer, PopulatedUserSerializer, PopulatedBlogSerializer


class UserDetailView(APIView):

    def get(self, _request, pk):
        user = User.objects.get(pk=pk)
        serializer = PopulatedUserSerializer(user)
        return Response(serializer.data)

    def get_user(self, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

        return user

    def put(self, request, pk):
        user = self.get_user(pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)


    def delete(self, _request, pk):
        user = self.get_user(pk)
        user.delete()
        return Response(status=204)


class BlogList(APIView):

    def get(self, _request):
        blogs = Blog.objects.all()
        serializer = PopulatedBlogSerializer(blogs, many=True)
        return Response(serializer.data)

class BlogDetailView(APIView):

    def get(self, _request, pk):
        blog = Blog.objects.get(pk=pk)
        serializer = PopulatedBlogSerializer(blog)
        return Response(serializer.data)

class JobList(APIView):

    def get(self, _request):
        url = 'https://www.reed.co.uk/api/1.0/search?'
        params = {
            "keywords": "junior software developer",
            "location": "london"
        }
        auth = (reed_key, '')

        response = requests.get(url, params=params, auth=auth)
        return Response(response.json()['results'])


class EventList(APIView):

    def get(self, _request):
        url = 'https://www.eventbriteapi.com/v3/events/search?q'
        params = {
            "q": "tech",
            "location.address": "london"
        }
        headers = {"Authorization": f'Bearer {event_key}'}

        response = requests.get(url, params=params, headers=headers)
        return Response(response.json()['events'])

class NewsList(APIView):

    def get(self, _request):
        url = 'https://newsapi.org/v2/everything?'
        params = {
            "q": "tech",
            "sortBy": "publishedAt",
            "pageSize": 100
        }
        headers = {"X-Api-Key": news_key}

        response = requests.get(url, params=params, headers=headers)
        return Response(response.json()['articles'])
