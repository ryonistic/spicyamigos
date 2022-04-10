"""Keeping it simple for now"""
from rest_framework import generics, permissions
# from django.shortcuts import redirect
# from api.permissions import IsAuthorOrReadOnly
from api.serializers import PostSerializer
from .models import Post

class PostList(generics.ListAPIView):
    """A simple ListCreateAPIView that
    allows user to view a list or add more items
    to it, i.e. a blog feed."""
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveAPIView):
    """RetrieveUpdateDestroyAPIView that allows
    users to view individual posts that they can update or
    destroy, etc. """
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# def test_redirect(request):
  #  return redirect('http://localhost:3000')
