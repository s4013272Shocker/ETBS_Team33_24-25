from django.shortcuts import render

# Create your views here.

def dashboard(request):
    return render(request, '../templates/dashboard.html')

def event(request):
    return render(request, '../templates/event.html')

def history(request):
    return render(request, '../templates/history.html')

def revenue(request):
    return render(request, 'templates/revenue.html')