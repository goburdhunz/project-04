from django.db import models


class News_Interest(models.Model):
    news_topic = models.CharField(max_length=50)

    def __str__(self):
        return self.news_topic


class Events_Interest(models.Model):
    event_type = models.CharField(max_length=50)

    def __str__(self):
        return self.event_type


class Jobs_Interest(models.Model):
    job_sector = models.CharField(max_length=50)

    def __str__(self):
        return self.job_sector

class Comment(models.Model):
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=200)
    user = models.ForeignKey('User', related_name='user', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    blogs = models.ManyToManyField('Blog', related_name='comments', blank=True)

    def __str__(self):
        return f'{self.title}, {self.user} - {self.created_at}'

class Blog(models.Model):
    title = models.CharField(max_length=50)
    created_by = models.ForeignKey('User', related_name='blogs', on_delete=models.CASCADE)
    blog_content = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}, {self.created_by} - {self.created_at}'

class User(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    job_title = models.CharField(max_length=50)
    summary = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    news_topic = models.ManyToManyField(News_Interest, related_name='users', blank=True)
    event_type = models.ManyToManyField(Events_Interest, related_name='users', blank=True)
    job_sector = models.ManyToManyField(Jobs_Interest, related_name='users', blank=True)

    def __str__(self):
        return f'{self.name}, {self.job_title} - {self.location}'
