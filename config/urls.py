"""spicyamigos URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
    Swagger permissions are kept IsAdminUser for now.
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import permissions
from drf_yasg.views import get_schema_view # new
from drf_yasg import openapi # new

schema_view = get_schema_view( # new
openapi.Info(
title="SpicyAmigos API",
default_version="v1",
description="SpicyAmigos schema_view with Swagger",
terms_of_service="https://www.google.com/policies/terms/",
contact=openapi.Contact(email="hello@example.com"),
license=openapi.License(name="BSD License"),
),
public=True,
permission_classes=(permissions.IsAdminUser,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('api_system/blog/', include('blog.urls')),
    path('api/v1/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/v1/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/v1/dj-rest-auth/registration/',
    include('dj_rest_auth.registration.urls')),
    path('swagger/', schema_view.with_ui(
    'swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui(
    'redoc', cache_timeout=0), name='schema-redoc'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
