"""This is a test for neomake
I wonder if it works"""
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as OldUserAdmin
from .models import User

@admin.register(User)
class UserAdmin(OldUserAdmin):
    """Sample docstring to shutup neomake
    seems like it is working"""
    list_display = ('username', 'email',)
