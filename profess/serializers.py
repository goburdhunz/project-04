from rest_framework import serializers
from .models import News_Interest, Events_Interest, Jobs_Interest, User, Comment, Blog


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'name', 'location', 'job_title', 'summary', 'image', 'event_type', 'news_topic', 'job_sector', 'blogs', )


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Events_Interest
        fields = ('id', 'event_type',)


class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = News_Interest
        fields = ('id', 'news_topic',)


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Jobs_Interest
        fields = ('id', 'job_sector',)


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'title', 'content', 'created_at', 'user',)


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ('id', 'title', 'created_by', 'blog_content', 'created_at', 'comments')


class PopulatedUserSerializer(UserSerializer):

    news_topic = NewsSerializer(many=True)
    job_sector = JobSerializer(many=True)
    event_type = EventSerializer(many=True)
    blogs = BlogSerializer(many=True)


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

    class Meta(BlogSerializer.Meta):

        fields = ('id', 'title', 'created_by', 'blog_content', 'created_at', 'comments',)
