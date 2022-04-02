""" All urls that are supposed to be related to the store app i.e.
anything after the usual localhost/xyz """
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='store_home'),
    path('menu/', views.menu, name='menu'),

]
