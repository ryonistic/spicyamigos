"""Handle the logic for store related links"""
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Item

#@login_required
def home(request):
    """Home page for store"""
    return render(request, 'store_home.html',{} )

@login_required
def menu(request):
    """Shows all the menu items"""
    items = Item.objects.all()
    return render(request, 'menu.html', {'items':items})
