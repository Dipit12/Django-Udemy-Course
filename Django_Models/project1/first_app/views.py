from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Topic,Webpage,AccessRecord

def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    date_dict = {'access_records':webpages_list}
    my_dict = {'insert content':'Hello i am from firstapp'}
    return render(request,'index.html',context = date_dict)

def room(request):
    return HttpResponse("You are viewing the room page")

