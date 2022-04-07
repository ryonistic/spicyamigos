"""Handle the logic for authentication related links"""
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login as logthemin, logout as logthemout
from django.contrib import messages
from .forms import UserRegisterForm

def login(request):
    """if user posts data, check if it is valid,
    else, show them the login page with empty login
    form. If the data they entered is valid, use authenticate
    to find whether the user exists, if the user exists,
    the authenticate function will return the user,
    log that user in using django.contrib.auth.login function"""
    if not request.user.is_authenticated:
        if request.method == "POST":
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                logthemin(request, user)
                messages.success(request, 'Authentication successful')
                return redirect('store_home')
            messages.success(request, 'Authentication error. Try again.')
            return redirect('login')
        return render(request, 'login.html', {})
    messages.success(request, 'You are already logged in.')
    return redirect('store_home')

def logout(request):
    """logout function doesnt need any
    arguments, it simply logs out the user from
    whom the request came."""
    logthemout(request)
    messages.success(request, 'Logged out successfully.')
    return redirect('login')

def signup(request):
    """Logic is similar to the login function,
    the big difference is that the form is coming
    from the forms.py file and passed on as a context
    variable, hence, the form is rendered indirectly
    into the django HTML template."""
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
        messages.success(request, 'There was an error. Please enter valid details')
        #return redirect('signup') do not uncomment, if uncommented, help_text wont show
        # when user enters invalid details in the form, instead page will redirect to itself.
        # leaving this here in case someone tries to make that mistake.
    else:
        form = UserRegisterForm
    return render(request, 'signup.html', {'form':form})
