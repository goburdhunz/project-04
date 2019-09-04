from django.db import models


class News_Interest(models.Model):
    topic = models.CharField(max_length=50)

    def __str__(self):
        return self.topic


class Events_Interest(models.Model):
    type = models.CharField(max_length=50)

    def __str__(self):
        return self.type


class Jobs_Interest(models.Model):
    sector = models.CharField(max_length=50)

    def __str__(self):
        return self.sector


class User(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    job_title = models.CharField(max_length=50)
    summary = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    news_Interest = models.ManyToManyField(News_Interest, related_name='users', blank=True)
    events_Interest = models.ManyToManyField(Events_Interest, related_name='users', blank=True)
    jobs_Interest = models.ManyToManyField(Jobs_Interest, related_name='users', blank=True)

    def __str__(self):
        return f'{self.name}, {self.job_title} - {self.location}'


class Comment(models.Model):
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=200)
    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}, {self.user} - {self.created_at}'


class Blog(models.Model):
    title = models.CharField(max_length=50)
    created_by = models.ForeignKey(User, related_name='created_by', on_delete=models.CASCADE)
    blog_content = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    comment = models.ManyToManyField(Comment, related_name='blogs', blank=True)

    def __str__(self):
        return f'{self.title}, {self.user} - {self.created_at}'
