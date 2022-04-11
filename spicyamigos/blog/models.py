from django.conf import settings
from django.db import models
from PIL import Image


class Post(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    date_posted = models.DateField(auto_now_add=True)
    image = models.ImageField(default="default.jpg")

    def __str__(self):
        return str(self.title)
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        image = Image.open(self.image.path)
        if image.height > 700 or image.width > 700:
            output_size = (700, 700)
            image.thumbnail(output_size)
            image.save(self.image.path)
