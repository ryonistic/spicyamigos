"""Handle the logic for store related links"""
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

@login_required
def home(request):
    """Home page for store"""
    return render(request, 'store_home.html',{} )
