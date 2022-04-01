""" All urls that are supposed to be related to the store app i.e.
anything after the usual localhost/xyz """
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='store_home.html'), name='store_home'),
    path('about/', TemplateView.as_view(template_name='about.html'), name='about')

]
