"""user registeration form"""
from django.contrib.auth.forms import UserCreationForm
from django import forms
from .models import User

class UserRegisterForm(UserCreationForm):
    """Tailwind classes put into the widgets and thus, styling them"""
    email = forms.EmailField(
        label='Email Address',
        widget=forms.EmailInput(
            attrs={
                'class': 'appearance-none block w-full p-3 leading-5 text-coolGray-900 \
                    border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 \
                    focus: outline-none focus: ring-2 focus: ring-red-500 focus: ring-opacity-50',
                'placeholder': 'johnsmith@example.com'}))
    first_name = forms.CharField(
        label='First Name',
        widget=forms.TextInput(
            attrs={
                'class': 'appearance-none block w-full p-3 leading-5 text-coolGray-900 border \
                    border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none \
                    focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
                'placeholder': 'John'}))
    last_name = forms.CharField(
        label='Last Name',
        widget=forms.TextInput(
            attrs={
                'class': 'appearance-none block w-full p-3 leading-5 text-coolGray-900 border \
                border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none \
                focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
                'placeholder': 'Smith'}))

    class Meta:
        """Meta properties for the form, setting
        up the labels and widgets by calling the
        init function"""
        model = User
        fields = ('username', 'email', 'first_name',
                  'last_name', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for fieldname in ['username', 'password1', 'password2']:
            self.fields[fieldname].help_text = None
            self.fields[fieldname].widget.attrs['class'] = 'appearance-none block w-full p-3 \
            leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md \
            placeholder-coolGray-400 focus:outline-none focus:ring-2 \
            focus:ring-red-500 focus:ring-opacity-50'

        self.fields['username'].widget.attrs['placeholder'] = 'johnsmith123'
        self.fields['username'].label = 'Username'
        self.fields['password1'].widget.attrs['placeholder'] = '********'
        self.fields['password1'].label = 'Enter Password'
        self.fields['password2'].widget.attrs['placeholder'] = '********'
        self.fields['password2'].label = 'Confirm Password'
