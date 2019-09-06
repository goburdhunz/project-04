from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT
import requests
from .models import NewsInterest, EventsInterest, JobsInterest, User, Comment, Blog

from .serializers import UserSerializer, EventSerializer, NewsSerializer, JobSerializer, CommentSerializer, BlogSerializer, PopulatedUserSerializer, PopulatedBlogSerializer


class UserDetailView(APIView):

    def get(self, _request, pk):
        user = User.objects.get(pk=pk)
        serializer = PopulatedUserSerializer(user)
        return Response(serializer.data)

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
        auth = ('c9911e8f-fb68-448f-94ec-3217c0eb0168', '')

        response = requests.get(url, params=params, auth=auth)
        return Response(response.json()['results'])

class EventList(APIView):

    def get(self, _request):
        url = 'https://www.eventbriteapi.com/v3/events/search?q'
        params = {
            "q": "tech",
            "location.address": "london"
        }
        headers = {"Authorization": 'Bearer Y4CBHYXIUCFY3LMJFGEG'}

        response = requests.get(url, params=params, headers=headers)
        return Response(response.json()['events'])

class NewsList(APIView):

    def get(self, _request):
        url = 'https://newsapi.org/v2/everything?'
        params = {
            "q": "tech",
            "sortBy": "publishedAt"
        }
        headers = {"X-Api-Key": 'f60dcc94a4264c74a6485ed450132df2'}

        response = requests.get(url, params=params, headers=headers)
        return Response(response.json()['articles'])
