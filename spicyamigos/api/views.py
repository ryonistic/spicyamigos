"""api views are NOT the same as class views, this is
a mimic of the original Django views but in reality
these are using rest_framework.generics and serializers
instead of django.views.generic or object_list(s) etc"""
from rest_framework import generics, permissions
from store.models import Item
from .serializers import ItemSerializer
#from allauth.socialaccount.providers.facebook.views import FacebookOaut2Adapter
#from dj_rest_auth.registration.views import SocialLoginView
# from django.contrib.auth.views import auth_login


class ItemAPIView(generics.ListAPIView):
    """handle all item objects and use them in the
    queryset, similar to how regular django models are
    used in views.py"""
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
