from django.shortcuts import render
from django.http import HttpResponse

def index(response):
    return HttpResponse(" <h1>Coding with Django </h1>")

def v1(response):
    return HttpResponse("<h3>Some text </h3>")