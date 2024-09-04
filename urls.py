#Define URLs: In dashboard_backend/urls.py, include the routes for your API.
from django.urls import path, include

urlpatterns = [
    path('api/', include('charts.urls')),
]
