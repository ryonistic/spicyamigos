"""logic for dishes and their categories"""
from django.db import models

class Tag(models.Model):
    """There can be only one category like
    snack, breakfast, dessert, dinner, meal,etc"""
    category = models.CharField(max_length=75, unique=True)
    def __str__(self):
        return str(self.category)

class Item(models.Model):
    """There can be only one dish with one name
    and there can be decimal prices with decimal
    discounts and default discount is set to zero."""
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=500)
    price = models.DecimalField(decimal_places=2, max_digits=5)
    discount = models.PositiveSmallIntegerField(default=0)
    tags = models.ForeignKey(Tag, on_delete=models.CASCADE)
    is_vegan = models.BooleanField(default=False)
    is_deliverable = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    def __str__(self):
        return str(self.name)
