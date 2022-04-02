"""Handle the logic for authentication related links"""
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login as logthemin, logout as logthemout
from django.contrib import messages
from .forms import UserRegisterForm


def login(request):
    """if user posts data, check if it is valid"""
    if not request.user.is_authenticated:
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
    else:
        messages.success(request, 'You are already logged in.')
        return redirect('store_home')

def logout(request):
    logthemout(request)
    messages.success(request, 'Logged out.')
    return redirect('login')

def signup(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(request, username=username, password = password)
            logthemin(request, user)
            messages.success(request, 'Account Created. You are now logged in')
            return redirect('store_home')
        else:
            messages.success(request, 'There was an error. Please enter valid details')
            #return redirect('signup')
    else:
        form = UserRegisterForm
    return render(request, 'signup.html', {'form':form})
