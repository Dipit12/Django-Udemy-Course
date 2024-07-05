from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(response):
    my_dict = {'insert_me':"Hello I am from views.py !"}
    return render(request,'base.html', context=my_dict)

