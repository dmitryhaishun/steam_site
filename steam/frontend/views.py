from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect

@csrf_protect
def index(request):
    return render(request, 'frontend/index.html')