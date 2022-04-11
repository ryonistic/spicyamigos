"""Handle the logic for authentication related links"""
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login as logthemin, logout as logthemout

def login_view(request):
    if request.user.is_authenticated:
        return redirect('http://localhost:3000')
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            logthemin(request, user)
            return redirect('http://localhost:3000')
        else:
            return redirect('login')
    else:
        return render(request, 'login.html')

def logout_view(request):
    if request.user.is_authenticated:
        logthemout(request)
        return redirect('http://localhost:3000')
