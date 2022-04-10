from django.db import models
from django.conf import settings

class Post(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    date_posted = models.DateField(auto_now_add=True)
    def __str__(self):
        return str(self.title)
