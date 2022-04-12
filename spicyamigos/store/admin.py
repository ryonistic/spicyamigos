"""Since we don't yet need any special design
for the admin panel entries of these models, I
am leaving it with the basic admin.site.register.
If someone wants to modify the entries, use the
constructor as such:-

@admin.register(modelname)
class ModelnameAdmin(admin.ModelAdmin):
    ----- modifications -----
"""
from django.contrib import admin
from .models import Item, Tag

admin.site.register(Item)
admin.site.register(Tag)
