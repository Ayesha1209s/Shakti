#from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django is working!")


# Create your views here.
