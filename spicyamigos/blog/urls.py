"""Handles url paths for the blog app, this includes
the about page for the company and the posts on the
blog page"""
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('about/', TemplateView.as_view(template_name='about.html'), name='about'),
    path('home/', TemplateView.as_view(template_name='blog_home.html'), name='blog_home'),
]
