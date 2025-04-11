from django.urls import path
from . import views

urlpatterns =[
    path('', views.dashboard, name = 'dashboard'),
    path('dashboard', views.dashboard, name = 'dashboard2'),
    path ('event', views.event, name = 'event'),
    path('history', views.history, name = 'history'),
    path('revenue', views.history, name = 'revenue')
]