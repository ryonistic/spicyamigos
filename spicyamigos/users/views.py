"""Handle the logic for authentication related links"""
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login as logthemin, logout as logthemout
from django.contrib import messages


def login(request):
    """if user posts data, check if it is valid"""
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            logthemin(request, user)
            messages.success(request, 'Authentication successful')
            return redirect('store_home')
        else:
            messages.success(request, 'Authentication error. Try again.')
            return redirect('login')
    else:
        return render(request, 'login.html', {})

def logout(request):
    logthemout(request)
    messages.success(request, 'Logged out.')
    return redirect('login')

def signup(request):
    return render(request, 'signup.html', {})
