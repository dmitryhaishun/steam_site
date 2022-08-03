from .models import Info
from .serializers import InfoSerializer
from rest_framework import generics

class InfoListCreate(generics.ListCreateAPIView):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer