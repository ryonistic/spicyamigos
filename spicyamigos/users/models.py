"""User related models defined here."""
# from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """Custom user model defined here."""
    pass
    def __str__(self):
        return str(self.username)
