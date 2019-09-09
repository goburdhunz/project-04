from rest_framework import serializers
from .models import NewsInterest, EventsInterest, JobsInterest, User, Comment, Blog


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'location', 'job_title', 'summary', 'image', 'event_type', 'news_topic', 'job_sector', 'blogs', )


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventsInterest
        fields = ('id', 'event_type',)


class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = NewsInterest
        fields = ('id', 'news_topic',)


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobsInterest
        fields = ('id', 'job_sector',)


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ('id', 'title', 'created_by', 'image', 'blog_content', 'created_at', 'comments')

class PopulatedUserSerializer(UserSerializer):

    news_topic = NewsSerializer(many=True)
    job_sector = JobSerializer(many=True)
    event_type = EventSerializer(many=True)
    blogs = BlogSerializer(many=True)


class CommentSerializer(serializers.ModelSerializer):

    user = PopulatedUserSerializer()

    class Meta:
        model = Comment
        fields = ('id', 'title', 'content', 'created_at', 'user',)


class PopulatedNewsSerializer(NewsSerializer):

    users = UserSerializer(many=True)

    class Meta(NewsSerializer.Meta):
        fields = ('id', 'news_topic',)


class PopulatedEventSerializer(EventSerializer):

    users = UserSerializer(many=True)

    class Meta(EventSerializer.Meta):
        fields = ('id', 'event_type',)


class PopulatedJobSerializer(JobSerializer):

    users = UserSerializer(many=True)

    class Meta(JobSerializer.Meta):
        fields = ('id', 'job_sector',)


class PopulatedBlogSerializer(BlogSerializer):

    comments = CommentSerializer(many=True)
    created_by = PopulatedUserSerializer()

    class Meta(BlogSerializer.Meta):

        fields = ('id', 'title', 'created_by', 'image', 'blog_content', 'created_at', 'comments',)
