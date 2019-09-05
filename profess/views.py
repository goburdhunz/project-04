from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT

from .models import News_Interest, Events_Interest, Jobs_Interest, User, Comment, Blog


from .serializers import UserSerializer, EventSerializer, NewsSerializer, JobSerializer, CommentSerializer, BlogSerializer, PopulatedUserSerializer



class UserDetailView(APIView):

    def get(self, _request, pk):
        user = User.objects.get(pk=pk)
        serializer = PopulatedUserSerializer(user)
        return Response(serializer.data)
