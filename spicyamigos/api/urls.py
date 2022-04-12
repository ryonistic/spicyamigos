from django.urls import path
from .views import ItemAPIView # FacebookLogin

urlpatterns = [
    path('', ItemAPIView.as_view()),
    #path('dj-rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
]
