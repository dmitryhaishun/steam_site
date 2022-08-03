from django.urls import path

from . import views

urlpatterns = [
    path('api/steam_site/', views.InfoListCreate.as_view()),
]