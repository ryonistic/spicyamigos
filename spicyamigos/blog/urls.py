"""Handles url paths for the blog app, this includes
the about page for the company and the posts on the
blog page"""
from django.urls import path
from .views import PostList, PostDetail
from . import views

urlpatterns = [
    path('<int:pk>/', PostDetail.as_view()),
    path('', PostList.as_view()),
#    path('test/', views.test_redirect, name="test_redirect"),
]
