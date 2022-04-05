"""api views are NOT the same as class views, this is
a mimic of the original Django views but in reality
these are using rest_framework.generics and serializers
instead of django.views.generic or object_list(s) etc"""
from rest_framework import generics
from store.models import Item
from .serializers import ItemSerializer


class ItemAPIView(generics.ListAPIView):
    """handle all item objects and use them in the
    queryset, similar to how regular django models are
    used in views.py"""
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
